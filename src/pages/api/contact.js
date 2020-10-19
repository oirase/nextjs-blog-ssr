//import dynamic from 'next/dynamic'
//import { senderEmailAdress } from '~/lib/mailer'
const nodemailer = require('nodemailer')
const a = require('../../lib/mailer.js')

try {
  const a1 = a.senderEmailAdress
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: a.senderEmailAdress,
      pass: 'axvdylavjpypqytf'
    }
  })

} catch(e) {
  console.log('error', e)
}

export default function getData(req, res) {
const { name, email, subject, body } = req.body

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
    }
  })
*/
  res.status(200).json(req.body)
}

