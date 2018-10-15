import * as React from 'react'
import { withFormik, Form, Field } from 'formik'
import Yup from 'yup'

const App = ({
    values,
    handleChange
}) => (

  <Form>

      <Field type="email" name="email" placeholder="Email" />
      <Field type="password" name="password" placeholder="Password" />
      <button type="submit">Submit</button>

  </Form>

)

const FormikApp = withFormik({
  mapPropsToValues({ email, password }){
    return {
        email: email || 'example@email.com',
        password: password || ''
    }  
  },
  handleSubmit(values) {
    console.log(values) 
  }

})(App)

export default FormikApp
