import { createTransport　} from 'nodemailer'

export const senderEmailAdress = 'japan.prefecture@gmail.com'
export const receiverEmailAddress = 'mahoganyshelf@outlook.com'

const smtpConfig = {
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: senderEmailAdress,
    pass: 'axvdylavjpypqytf'
  }
}


const transporter = createTransport(smtpConfig)

export const sendMail = (message) => {

  transporter.sendMail(message, (error, response) => {
      if(error) {
        console.log('error')
      } else {
        //console.log('success', res.response)
       //res.status(200).json({ nodemailer: 'success' })
      }
    })
}
