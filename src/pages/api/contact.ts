import { createTransport } from 'nodemailer'

const senderEmailAdress = 'japan.prefecture@gmail.com'
const receiverEmailAddress = 'mahoganyshelf@outlook.com'

export default function getData(req, res) {
const { name, email, subject, body } = req.body

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

  const transporter = createTransport(smtpConfig)

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

