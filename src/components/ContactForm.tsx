import { FC } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { skyblue, navy } from '~/styles/variables'
import contactFormType from '~/types/contactForm'

type Props = {
  onSubmit: (value: contactFormType) => void
}

const ContactForm: FC<Props> = ({ onSubmit }) => (
  <>
    <Formik
      initialValues={{ name: '', email: '', subject: '', body: '' }}
      validationSchema={Yup.object({
        name: Yup.string().max(20, 'お名前は20文字まで使用可能です'),
        //.required('お名前は必須項目です')
        email: Yup.string().email('メールアドレスのみ使用可能です'),
        //.required('メールアドレスは必須項目です')
        body: Yup.string().max(
          200,
          'お問い合わせ本文は200文字まで使用可能です'
        ),
        //.required('お問い合わせ本文は必須項目です')
      })}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false)
        onSubmit(values)
      }}
    >
      <Form className="form">
        <label className="form__label" htmlFor="name">
          お名前
        </label>
        <Field className="form__input" name="name" type="text"
        />
        <ErrorMessage name="name">
          {(msg) => <p className="form__error">{msg}</p>}
        </ErrorMessage>
        <label className="form__label" htmlFor="email">
          メールアドレス
        </label>
        <Field
          className="form__input"
          name="email"
          type="text"
        />
        <ErrorMessage name="email">
          {(msg) => <p className="form__error">{msg}</p>}
        </ErrorMessage>
        <label className="form__label" htmlFor="body">
          お問い合わせ内容
        </label>
        <Field
          className="form__textarea"
          name="body"
          type="text"
          component="textarea"
        />
        <ErrorMessage name="body">
          {(msg) => <p className="form__error">{msg}</p>}
        </ErrorMessage>
        <button className="form__button" type="submit">
          お問い合わせ送信
        </button>
      </Form>
    </Formik>
    <style jsx global>{`
      .form {
        display: flex;
        margin: 0 auto;
        width: 50rem;
        max-width: 100%;
        padding: 9rem 0 4rem 0;
        background: ${skyblue};
        flex-direction: column;
        align-items: center;
        box-shadow: 3px 3px 15px #333;
        position: relative;

        &:before {
          content: "";
          width: 100%;
          box-sizing: border-box;
          border-top: 50px solid  ${navy};
          border-left: 40px solid transparent;
          border-right: 40px solid transparent;
          position: absolute;
          top: 0;
          left: 0;
        }

        @at-root %form__element {
          margin-bottom: 1.5rem;
        }

        @at-root %form__input-element {
          margin-bottom: 3rem;
          width: 26rem;
          background: white;
        }

        &__input {
          @extend %form__input-element;
          height: 3.5rem;
          border-radius: 20px;
          padding: 5px 15px;
        }

        &__label {
          @extend %form__element;
          color: white;
        }

        &__textarea {
          @extend %form__input-element;
          height: 20rem;
          padding: 5px;
          border-radius: 5px;
        }

        &__button {
          padding: 2rem 4rem;
          background: white;
          color: ${skyblue};
          border-radius: 7px;
          margin: 2px 0;

          &:hover {
            box-shadow: none;
            margin: 4px 0 0 4px;
          }
        }

        &__error {
          margin-bottom: 3rem;
          color: white;
          background: red;
          padding: 1.2rem 0;
          width: 100%;
          text-align: center;
        }
      }
    `}</style>
  </>
)

export default ContactForm
