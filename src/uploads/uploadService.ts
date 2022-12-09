import multer from "multer";
import multerS3 from "multer-s3";
import AWS from "aws-sdk";
import btoa from "btoa";
import { request } from "../services/interfaces"
import { promisify } from "util";
import fs from "fs";
import config from "../config"
const convert = require("heic-convert");


const { v1: uuidv1 } = require("uuid");
// const { promisify } = require("util");
// const fs = require("fs");
// const convert = require("heic-convert");

AWS.config.update({
  accessKeyId: process.env.AWS_SES_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SES_SECRET_ACCESS_KEY,
  region: process.env.AWS_SES_REGION,
});

console.log(process.env.AWS_SES_ACCESS_KEY_ID, process.env.AWS_SES_REGION)

const S3: any = new AWS.S3();

const uploadmedia = (
  file: any,
  userId: any,
  mediaId?: string,
  key?: string
) => {
  return new Promise(async function (resolve, reject) {
    const entity = `underscoretec/${process.env.nodeEnv}/${userId}`; //literally any owner/user's id
    let newKey: string = `${entity}/${uuidv1()}`;

    let params = {
      Bucket: process.env?.BUCKET ?? "",
      Key: newKey,
      Body: file,
    };
    S3.upload(params, async (err: any, data: any) => {
      if (data) {
        resolve(data);
      } else {
        console.log("Error>>", err);
        reject("Upload media error");
      }
    });
  });
};

export const convertImage = (file: any) => {
  return new Promise(async function (resolve, reject) {
    try {
      const path = `${file.destination}/${file.filename}`;
      const inputBuffer = await promisify(fs.readFile)(path);

      const outputBuffer = await convert({
        buffer: inputBuffer, // the HEIC file buffer
        format: "JPEG", // output format
        quality: 1, // the jpeg compression quality, between 0 and 1
      });
      if (outputBuffer) {
        if (fs.existsSync(path)) {
          await fs.unlinkSync(path);
        }
        const result = await uploadmedia(outputBuffer, file.userId);

        resolve(result);
      }
    } catch (error) {
      console.log("heic conversion erorr===>:-", error);
    }
  });
};

export default {
  upload: (req: any, res: any) => {
    return new Promise(function (resolve, reject) {
      try {
        const userId = 1234;
        const entity = `underscoretec/${config.environment}/${userId}`; //literally any owner/user's id
        let storage;
        let type = req.query.fileType ? req.query.fileType : "image";
        console.log(type, userId, entity, process.env.BUCKET)
        if (type === "image") {
          storage = multerS3({
            s3: S3,
            bucket: process.env?.BUCKET ?? "",
            metadata: function (req: any, file: any, cb: any) {
              cb(null, {
                fileName: file.originalname,
                mimetype: file.mimetype,
              });
            },
            key: (req: any, file: any, cb: any) => {
              cb(null, entity + `/` + uuidv1());
            },
          });
        } else {
          storage = multer.diskStorage({
            destination: function (req: any, file: any, callback: any) {
              if (type === "convert") {
                const path = "./media";
                if (!fs.existsSync(path)) {
                  fs.mkdirSync(path);
                }
                callback(null, path);
              }
            },
            filename: function (req: any, file: any, callback: any) {
              let fileEx: any = /(?:\.([^.]+))?$/.exec(file.originalname);
              callback(null, `${uuidv1()}${fileEx[0]}`);
            },
          });
        }

        var upload = multer({
          storage: storage,
        }).any();

        if (upload) {
          upload(req, res, async (error: any) => {
            console.log("image upload error", error)
            if (error) {
              return reject({
                error: true,
                status: 400,
                message: error.message,
              });
            } else {
              if (type === "convert") {
                let data = req.files[0];
                data.userId = req.user?._id;
                const result: any = await convertImage(data);

                let obj = {
                  fieldname: data.fieldname,
                  originalname: data.originalname,
                  encoding: "7bit",
                  mimetype: "image/jpeg",
                  size: data.size,
                  bucket: result.Bucket || result.bucket,
                  key: result.Key || result.key,
                  location: data.Location,
                };
                req.files[0] = obj;
                return resolve({
                  error: false,
                  status: 200,
                  result: req.files,
                  message: "File uploaded",
                });
              } else {
                return resolve({
                  error: false,
                  status: 200,
                  result: req.files,
                  message: "File uploaded",
                });
              }
            }
          });
        } else {
          return reject({
            error: true,
            status: 404,
            message: "File not uploaded",
          });
        }
      } catch (e) {
        console.log("uploade error", e)
        return reject({
          error: true,
          status: 500,
          message: "Server error " + e,
        });
      }
    });
  },

  get: (req: request) => {
    return new Promise(function (resolve, reject) {
      try {
        const image = JSON.stringify({
          bucket: process.env?.BUCKET,
          key: req.query.key,
          edits: {
            resize: {
              width: parseInt(req.query.width),
              height: parseInt(req.query.height),
              fit: req.query.fit,
            },
            normalise: true,
          },
        });

        let cdnImage: any;
        if (req.query.key.includes("/v/")) {
          if (req.query.key.includes("thumbnail")) {
            cdnImage = btoa(image);
          } else {
            cdnImage = req.query.key;
          }
        } else {
          cdnImage = btoa(image);
        }

        const url = `${process.env.CDN_URL}/${cdnImage}`;

        return resolve({
          status: 200,
          error: false,
          url: url,
          message: "Success",
        });
      } catch (e) {
        console.log(e, "error");
        return reject({
          error: true,
          status: 400,
          message: "Server error " + e,
        });
      }
    });
  },

  delete: (req: any, res: any) => {
    return new Promise(function (resolve, reject) {
      try {
        let media = req.body.mediaId;
        let params = {
          Bucket: process.env?.BUCKET ?? "",
          Key: media?.mediaFile?.key,
        };

        // Delete Media from AWS.
        S3.deleteObject(params, (err: any, data: any) => {
          if (err) {
            return reject({
              error: true,
              status: 400,
              message: err.message,
            });
          } else {
            return resolve({
              error: false,
              status: 200,
              result: data,
              message: "File Deleted Successfully.",
            });
          }
        });
      } catch (error) {
        return reject({
          error: true,
          status: 500,
          message: "Server error " + error,
        });
      }
    });
  },

  update: (req: any) => {
    return new Promise(async function (resolve, reject) {
      try {
        let params = {
          Body: req.body.mediaFile,
          Bucket: process.env?.BUCKET ?? "",
          Key: req.query.key,
        };

        // Update Media in AWS.
        S3.putObject(params, (err: any, data: any) => {
          if (err) {
            return reject({
              error: true,
              status: 500,
              message: err.message,
            });
          } else {
            return resolve({
              error: false,
              status: 200,
              result: data,
              message: "File Updated Successfully.",
            });
          }
        });
      } catch (error) {
        return reject({
          error: true,
          status: 500,
          message: "Server error " + error,
        });
      }
    });
  },

  mediaGet: (req: any, res: any) => {
    return new Promise(async function (resolve, reject) {
      try {
        var getParams = {
          Bucket: process.env?.BUCKET, // your bucket name,
          Key: req.query.key, // path to the object you're looking for
        };
        let readStream = S3.getObject(getParams).createReadStream();
        res.writeHead(200);
        readStream.pipe(res);
        return;
      } catch (err) {
        console.log(err, "error =>>>");
        return reject({
          error: true,
          status: 400,
          message: "Server error " + err,
        });
      }
    });
  },
};
