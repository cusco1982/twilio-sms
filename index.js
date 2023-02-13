require('dotenv').config()
const twilio = require('twilio');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;



const client = twilio(accountSid, authToken);


const recipients = process.env.RECIPIENTS.split(", ");



recipients.forEach(recipient => {

    client.messages
        .create({
            body: 'Testing 123.',
            from: process.env.TWILIO_PHONE_NUMBER,
            to: recipient
        })
        .then(message => console.log(message.sid))
        .catch(err => console.error(err));

});



// CHATGPT CODE --


// const twilio = require('twilio');
// const client = new twilio(
//   process.env.TWILIO_ACCOUNT_SID,
//   process.env.TWILIO_AUTH_TOKEN
// );
// const recipients = [
//   '+14155552671',
//   '+14155552672',
//   '+14155552673'
// ];
// recipients.forEach(recipient => {
//   client.messages
//     .create({
//       body: 'Hello from Twilio!',
//       to: recipient,
//       from: process.env.TWILIO_PHONE_NUMBER
//     })
//     .then(message => console.log(`Text sent to ${recipient}`))
//     .catch(err => console.error(err));
// });