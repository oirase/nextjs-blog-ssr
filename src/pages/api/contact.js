//import dynamic from 'next/dynamic'
//import { senderEmailAdress } from '~/lib/mailer'
const nodemailer = require('nodemailer')
//const a = require('../../lib/mailer.js')



export default function getData(req, res) {
const { name, email, subject, body } = req.body


  //const a1 = a.senderEmailAdress

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user:  'japan.prefecture@gmail.com',
      pass: 'axvdylavjpypqytf'
    }
  })



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

