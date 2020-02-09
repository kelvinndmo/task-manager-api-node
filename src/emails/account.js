const sgMail = require("@sendgrid/mail")

const sengridAPiKey = process.env.SENDGRID_API_KEY

sgMail.setApiKey(sengridAPiKey)


const sendWelcomeEmail = (email,name) => {
    sgMail.send({
        to:email,
        from:'no-reply@novak.com',
        subject:'Welcome to Task Manager',
        text: `Welcome ${name} to our application`
    })
}

module.exports = {
    sendWelcomeEmail
} 