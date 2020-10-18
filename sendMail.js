const nodemailer = require('nodemailer')

const senderEmailAdress = 'japan.prefecture@gmail.com'
//const receiverEmailAddress = 'mahoganyshelf@outlook.com'
const receiverEmailAddress = 'azukiparfait@protonmail.com'

const smtpConfig = {
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: true,
  auth: {
    user: senderEmailAdress,
    pass: 'axvdylavjpypqytf'
  }
}

const transporter = nodemailer.createTransport(smtpConfig)

const message = {
  from: senderEmailAdress,
  to: receiverEmailAddress,
  subject: 'nodemailer_test',
  text: 'nodemailer_body'
}

transporter.sendMail(message, (error, res) => {
  if(error) {
    console.log('error')
  } else {
    console.log('success', res.response)
  }
})

