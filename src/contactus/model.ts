import * as mongoose from "mongoose";
let Schema = mongoose.Schema;

const ContactsSchema = new Schema({
   
    service:{
        type:String
    },
    mode:{
        type:String
    },
    name: {
        type: String
    },
    email: {
        type: String,
    },
    project: {
        type: String,
    },

    documents: {
        key: {
            type: String,
        },
        name: {
            type: String,
        },
        mimetype: {
            type: String,
        },
        location: {
            type: String,
        },
        size: {
            type: Number,
        },
    },
    enabled: {
        type: Number,
        default: 1, //0: false 1: true  2:disable
    },
    createdAt: {
        type: Number,
        default: Date.now,
    },
    updatedAt: {
        type: Number,
        default: Date.now,
    }

})


export default mongoose.model("contacts", ContactsSchema);