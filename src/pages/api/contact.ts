import { NextApiRequest, NextApiResponse } from 'next'
import { createTransport } from 'nodemailer'
import htmlspecialchars from 'htmlspecialchars'
import contactFormType from '~/types/contactForm'

const senderEmailAdress = process.env.MAIL_FROM_ADDRESS
const receiverEmailAddress = process.env.MAIL_RECEIVER_ADDRESS

export default function getData(req: NextApiRequest, res: NextApiResponse) {
  const data = {} as contactFormType
  for (const value of Object.keys(req.body)) {
    data[value] = htmlspecialchars(req.body[value])
  }
  const { name, email, body } = data

  const transporter = createTransport({
    service: process.env.MAIL_SERVICE,
    host: process.env.MAIL_FROM_HOST,
    port: process.env.MAIL_PORT,
    secure: true,
    auth: {
      user: senderEmailAdress,
      pass: process.env.MAIL_PASSWORD,
    },
  })

  const mailView = `
お問い合わせ内容

お名前 ${name}
メールアドレス　${email}

本文
${body}
`
  const message = {
    from: senderEmailAdress,
    to: receiverEmailAddress,
    subject: `${name}様からのお問い合わせ`,
    text: mailView,
  }

  /*
  transporter.sendMail(message, (error, response) => {
    if(error) {
      console.log('error')
    } else {
      console.log('success', res.response)
     res.status(200).json({ nodemailer: 'success' })
     //res.status(200).json(smtpConfig)
    }
  })
*/
  //res.status(200).json({ result:'success' })
  res.status(200).json(data)
}
