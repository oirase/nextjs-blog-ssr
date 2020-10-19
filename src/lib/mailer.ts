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

export default createTransport(smtpConfig)
