//import dynamic from 'next/dynamic'
import { senderEmailAdress } from '~/lib/mailer'

export default function getData(req, res) {
const { name, email, subject, body } = req.body

//const senderEmailAdress = dynamic(() => import('~/lib/mailer') as DynamicOptions<string>)
try {
  const a1 = senderEmailAdress
} catch(e) {
  console.log('error', e)
}
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

