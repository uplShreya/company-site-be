import express from 'express';
import config from "./config";
import connectToDb from "./database/index";
import cors from "cors";
import routes from "./routes/routes";


const app = express();

const whitelist = [
    "http://localhost:3000",
    "http://localhost:3001",
    "http://localhost:3002",
  ];
app.use(cors({ origin: whitelist, credentials: true }));
app.use(express.json({ limit: '50mb' }));
app.use("/api", routes);


// Connection to mongoDB
connectToDb();


const server = app.listen(config.port, () => {
    console.log(`
      ################################################
      🛡️  Conpanysite server listening on port: http://localhost:${config.port} 🛡️
      ################################################
    `);
 
  });
  server.setTimeout(500000)


  