import express from 'express';
import contactServices from "./services";

const router = express.Router();


/**
 * @type - POST
 * @route -  /api/contactus
 * @desc - route for contact Us.
 * @access - PUBLIC
 * @function - createContact
 */

router.post("/", async (req: any, res: any) => {
    contactServices.createContact(req)
        .then((response: any) => {
            return res.send({
                status: response.status,
                error: response.error,
                result: response.result,
                code: response.code,
                message: response.message,
            });
        })
        .catch((err: any) => {
            return res.send({
                status: err.status,
                error: err.error,
                result: err.result,
                code: err.code,
                message: err.message,
            });
        })
})

export default router;
