import uploadService from "./uploadService";
import express from "express";
const Axios = require("axios");

const router = express.Router();
import {logger }from "../services/logger"

/**
@type - POST
@route -  /api/uploads/
@desc - route for add new file
@access - PRIVATE */
router.post("/",
async (req: any, res: any, next: any) => {
  uploadService
    .upload(req, res)
    .then((response: any) => {
      return res.status(response.status).send({
        error: response.error,
        result: response.result,
        message: response.message,
      });
    })
    .catch((err: any) => {
      return res.status(err.status || 500).send({
        error: err.error,
        result: err.result,
        message: err.message,
      });
    });
});

/**
@type - GET
@route - /api/uploads/
@desc - route for get file
@access - PRIVATE */
router.get("/", async (req: any, res: any, next: any) => {
  uploadService
    .get(req)
    .then(async (response: any) => {
      const url = response.url;
      const axiosObj = await Axios({
        url,
        method: "GET",
        responseType: "stream",
      });
      axiosObj.data.pipe(res);
    })
    .catch((err: any) => {
      return res.status(err.status || 500).send({
        error: err.error,
        result: err.result,
        message: err.message,
      });
    });
});


/**
@type - PUT
@route - /api/uploads/
@desc - route to update a file.
@access - PRIVATE */
router.put("/", async (req: any, res: any, next: any) => {
  uploadService
    .update(req)
    .then((response: any) => {
      return res.status(response.status).send({
        error: response.error,
        result: response.result,
        message: response.message,
      });
    })
    .catch((err: any) => {
      return res.status(err.status || 500).send({
        error: err.error,
        result: err.result,
        message: err.message,
      });
    });
});

/**
@type - GET
@route - /api/uploads/file/download
@desc - route for get file
@access - PRIVATE */
router.get("/file/download", async (req: any, res: any, next: any) => {
  uploadService
    .mediaGet(req, res)
    .then(async (response: any) => {
      return res.status(response.status).send({
        error: response.error,
        result: response.result,
        message: response.message,
      });
    })
    .catch((err: any) => {
      return res.status(err.status || 500).send({
        error: err.error,
        result: err.result,
        message: err.message,
      });
    });
});


export default router;
