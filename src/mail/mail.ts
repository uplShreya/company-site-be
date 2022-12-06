import * as AWS from "aws-sdk";

//Amazon SES configuration
const SESconfig = {
    apiVersion: "2010-12-01",
    accessKeyId: process.env.AWS_SES_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SES_SECRET_ACCESS_KEY,
    region: process.env.AWS_SES_REGION,
}

// Function name- SendEmail

export function sendEmail({ receiverAddress, body, subject ,cc}: any) {
    var params = {
        Source: `${process.env.emailAlias} <${process.env.senderEmail}>`,
        Destination: {
            ToAddresses: [receiverAddress],
            CcAddresses: [cc],

        },
        ReplyToAddresses: [],
        Message: {
            Body: body,
            Subject: subject,
        }
    };

    new AWS.SES(SESconfig)
        .sendEmail(params)
        .promise()
        .then((res: any) => {
            console.log("Response:-", res);
        })
        .catch((err: any) => {
            console.log("Error:-", err);
        })

}