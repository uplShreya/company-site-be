import { request } from "../services/interfaces";
import contactModel from "./model";
import messages from "../services/messages.json";
import { contactUs } from "../mail/mailService";
import moment from "moment";

export default{
    createContact:(req:request)=>{
        return new Promise(async (resolve, reject) => {
            try {
                const contacts = new contactModel({
                    name: req.body?.name,
                    email: req.body?.email.toLowerCase(),
                    service: req.body?.service,
                    mode:req.body?.mode,
                    project: req.body?.project,
                    documents: req.body?.documents === undefined ? {} : req.body?.documents,
                    createdAt: Date.now(),
                    updatedAt: Date.now()
                })
                const newContacts = await contacts.save()
                if (newContacts) {
                    contactUs({
                        service: newContacts?.service,
                        name: newContacts?.name,
                        email: newContacts?.email,
                        mode: newContacts?.mode,
                        project: newContacts?.project,
                        createdAt:moment(newContacts.createdAt).format("ll")
                    })
                    console.log(newContacts,"newContacts")
                    return resolve({
                        status: 200,
                        error: false,
                        result: newContacts,
                        code: "CONTACT_CREATED",
                        message:messages["CONTACT_CREATED"]
                    })
                }
                else {
                    return reject({
                        status: 400,
                        error: true,
                        code: "CONTACT_CREATE_FAILED",
                        message: messages["CONTACT_CREATE_FAILED"]

                    })
                }

            } catch (err) {
                console.log(err, "<<--[ContactUs 001] Error in contacts create")
                return reject({
                    status: 500,
                    error: true,
                    result: err,
                    code: "INTERNAL_SERVER_ERROR",
                    message: messages["INTERNAL_SERVER_ERROR"]

                })
            }
        })

    }
}