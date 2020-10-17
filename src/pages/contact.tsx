import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Layout from '~/components/Layout'
import { white, skyblue } from '~/styles/variables'


const Contact = () => {

  const setData = async () => {
    const url = '/api/contact'
    const data = { test: "api-test" }
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const json = await res.json()
    console.log(json)
  }

  return (
    <Layout>
      <Formik
        initialValues={{ name: '', email: '', title: '', body: '' }}
        validationSchema={Yup.object({
          name: Yup.string()
          .max(20, 'お名前は20文字まで使用可能です')
          .required('お名前は必須項目です'),
          email: Yup.string()
          .email('メールアドレスのみ使用可能です')
          .required('メールアドレスは必須項目です')
          ,
          subject: Yup.string()
          .max(30, '件名は30文字まで使用可能です')
          ,
          body: Yup.string()
          .max(200, 'お問い合わせ本文は200文字まで使用可能です')
          .required('お問い合わせ本文は必須項目です')
        })}
        onSubmit={(values, {
        setSubmitting }) => {
          setData()
          setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400)
        }}
        >
        <Form  className="form" >
          <label className="form__label" htmlFor="name">お名前</label>
          <Field className="form__input" name="name" type="text" />
          <ErrorMessage name="name">
            { msg => <p className="form__error">{msg}</p> }
          </ErrorMessage>
          <label className="form__label" htmlFor="email">メールアドレス</label>
          <Field className="form__input" name="email" type="text" value="aaa@bb.cc" />
          <ErrorMessage name="email">
            { msg => <p className="form__error">{msg}</p> }
          </ErrorMessage>
          <label className="form__label" htmlFor="subject">題名</label>
          <Field className="form__input" name="subject" type="text" />
          <ErrorMessage name="subject">
            { msg => <p className="form__error">{msg}</p> }
          </ErrorMessage>
          <label className="form__label" htmlFor="body">お問い合わせ内容</label>
          <Field className="form__textarea" name="body" type="text" component="textarea" />
          <ErrorMessage name="body">
            { msg => <p className="form__error">{msg}</p> }
          </ErrorMessage>
          <button className="form__button" type="submit">お問い合わせ送信</button>
        </Form>
      </Formik>
      <style jsx global>{`
        .form {
          display: flex;
          margin: 0 auto;
          width: 34rem;
          padding: 4rem 0;
          background: ${skyblue};
          flex-direction: column;
          align-items: center;
          box-shadow: 3px 3px 15px #333;

          @at-root %form__element {
            margin-bottom: 1.5rem;
          }

          @at-root %form__input-element {
            margin-bottom: 3rem;
            width: 25rem;
            background: ${white};
          }

          &__input {
            @extend %form__input-element;
            height: 3.5rem;
            border-radius: 20px;
            padding: 5px 15px;
          }

          &__label {
            @extend %form__element;
            color: ${white};
          }

          &__textarea {
            @extend %form__input-element;
            height: 20rem;
            padding: 5px;
            border-radius: 5px;
          }

          &__button {
            padding: 2rem 4rem;
            background: ${white};
            color: ${skyblue};
            border-radius: 7px;
          }

          &__error {
            margin-bottom: 3rem;
            color: ${white};
            background: red;
            padding: 1.2rem 0;
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </Layout>
  )
}

export default  Contact


