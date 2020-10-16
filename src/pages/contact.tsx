import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Layout from '~/components/Layout'


const Contact = () => {

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
          setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400)
        }}
        >
        <Form>
          <label htmlFor="name">お名前</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" />
          <label htmlFor="email">メールアドレス</label>
          <Field name="email" type="text" />
          <ErrorMessage name="email" />
          <label htmlFor="subject">題名</label>
          <Field name="subject" type="text" />
          <ErrorMessage name="subject" />
          <label htmlFor="body">お問い合わせ内容</label>
          <Field name="body" type="text" />
          <ErrorMessage name="body" />
        </Form>
      </Formik>
    </Layout>
  )
}

export default  Contact


