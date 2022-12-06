import dotenv from "dotenv";

const envFound = dotenv.config();

if (envFound.error) {
  // This error should crash whole process
  console.log("⚠️  Couldn't find .env file  ⚠️");
  setTimeout(() => {
    process.exit(1);
  }, 2000);
}

const PORT: number = parseInt(process.env.PORT as string, 10);
const MONGODB_URI: string = process.env.MONGODB_URI as string;
const ENVIRONMENT: string = process.env.nodeEnv as string;
const SECKEY: string = process.env.sec_key as string;
const EXPIRES: number = parseInt(process.env.jwtExpiryIn as string);
const TOKEN_SEC: string = process.env.jwtPrivateKey as string;
const CDN_URL: string = process.env.CDN_URL as string;
const APP_URL: string = process.env.APP_URL as string;


export default {
  port: PORT,
  databaseURL: MONGODB_URI,
  Seckey: SECKEY,
  tokenSecret: TOKEN_SEC,
  environment: ENVIRONMENT,
  Expires: EXPIRES,
  cdnUrl: CDN_URL,
  appUrl: APP_URL,

  api: {
    prefix: "/api",
  },
};
