import nodemailer from 'nodemailer'

const senderEmailAdress = 'japan.prefecture@gmail.com'
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

//const transporter = nodemailer.createTransport(smtpConfig)

export default async function getData(req, res) {
  const { name, email, subject, body } = req.body
/*
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

  transporter.sendMail(message, (error, res) => {
    if(error) {
      console.log('error')
    } else {
      console.log('success', res.response)
      res.status(200).json(body)
    }
  })
*/
  res.status(200).json(req.body)
}

