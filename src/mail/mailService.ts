import fs from 'fs';
import handlebars from "handlebars";
import { sendEmail } from './mail';


const readHTMLFile = (path: any) => {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, {encoding: "utf-8"}, function (err, html) {
            if (err) {
                reject(err)
            } else {
                resolve(html)
            }
        });
    });
};

// export function contactUs(data: any) {
//     return new Promise(function (resolve, reject) {
//         let text = `
//         Dear ${data.name},<br/><br/><br/> 

//         Thank you for reaching out to us.<br/><br/> 

//         Your enquiry is registered with Subject :- ${data.subject} <br/>

//         Our business development colleague will get in touch with you soon.<br/>

//         We are glad that you have taken the first step to connect and build a relationship with Golfnet.<br/>

//         Looking forward to working with you and your organization.<br/><br/> 

//         Best regards, `;
//         let Body = {
//             Html: {
//                 Charset: "UTF-8",
//                 Data: text
//             },
//             Text: {
//                 Charset: "UTF-8",
//                 Data: `Thank you for your enquiry`
//             },
//         };
//         sendEmail({
//             receiverAddress: data.email,
//             body: Body,
//             subject: {
//                 Charset: "UTF-8",
//                 Data: `Thank you for your enquiry`,
//             },
//             cc: process.env.ccmail,
//         });
//     });
// }


export function contactUs(contact:any){
    return new Promise(async function (resolve, reject) {
		let htmlRendered;
		let htmlToSend;
		try {
			htmlRendered = await readHTMLFile(
				"./src/mail/emailTemplates/emailTemplateforUnderscore.html"
			); //path of template for contact us email

		} catch (err) {
			console.log("Error getting email template", err);
		}
		if (htmlRendered) {
			var template = handlebars.compile(htmlRendered);

			// This data is passed to the template
			var data = {
				userName: `${contact.name}`,
                service:`${contact.service}`,
                mode:`${contact.mode}`,
                project:`${contact.project}`,
				webUrl: process.env.APP_URL,
                date:`${contact.createdAt}`,

			};

			var result = template(data);

			htmlToSend = result;
		}
		let Body = {
			/* required */
			Html: {
				Charset: "UTF-8",
				Data: htmlToSend,
			},
			Text: {
				Charset: "UTF-8",
				Data: htmlToSend,
			},
		};

        sendEmail({
            receiverAddress: contact.email,
            body: Body,
            subject: {
                Charset: "UTF-8",
                Data: `Thank you for your enquiry`,
            },
            cc:process.env.ccmail,
        });

    })
}

