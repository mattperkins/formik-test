import * as React from 'react'
import { withFormik, Form } from 'formik'
import Yup from 'yup'

const App = ({
    values,
    handleChange
}) => (

  <Form>

      <input type="email" name="email" placeholder="Email" value={values.email} onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" value={values.password} onChange={handleChange} />
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
