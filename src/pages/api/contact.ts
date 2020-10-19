import { sendMail,
         senderEmailAdress,
         receiverEmailAddress  } from '~/lib/mailer'

export default async function getData(req, res) {
const { name, email, subject, body } = req.body




  const message = {
    from: senderEmailAdress,
    to: receiverEmailAddress,
    subject: `${name}様からのお問い合わせ`,
    text: 'nodemailer-test'
  }

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

