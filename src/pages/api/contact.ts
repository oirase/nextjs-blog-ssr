//import dynamic from 'next/dynamic'
//import { senderEmailAdress } from '~/lib/mailer'
//const nodemailer = require('nodemailer')
//const a = require('../../lib/mailer.js')
import nodemailer from 'nodemailer'


export default function getData(req, res) {
const { name, email, subject, body } = req.body
const senderEmailAdress = 'japan.prefecture@gmail.com'
const receiverEmailAddress = 'mahoganyshelf@outlook.com'

  //const a1 = a.senderEmailAdress

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


  const mailView =
`
お問い合わせ内容

お名前　${name}
メールアドレス　${email}
題名　${subject}

本文
${body}
`
  const message = {
    from: senderEmailAdress,
    to: receiverEmailAddress,
    subject: `${name}様からのお問い合わせ`,
    text: mailView
  }



//const senderEmailAdress = dynamic(() => import('~/lib/mailer') as DynamicOptions<string>)

/*
  const message = {
    from: senderEmailAdress,
    to: receiverEmailAddress,
    subject: 'お問い合わせ',
    text: 'nodemailer-test'
  }
*/
  //sendMail(message)
/*
  transporter.sendMail(message, (error, response) => {
    if(error) {
      console.log('error')
    } else {
      console.log('success', res.response)
     //res.status(200).json({ nodemailer: 'success' })
     res.status(200).json({ result:'success' })
    }
  })
*/
res.status(200).json({ result:'success' })
}

