import express from "express";
import contactus from "../contactus"
import uploads from "../uploads"
let router = express.Router();

router.use("/contactus",contactus),
router.use("/uploads", uploads);

export default router;