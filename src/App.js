import * as React from 'react'
import { withFormik } from 'formik'
import Yup from 'yup'

const App = ({
    values,
    handleChange
}) => (

  <div>

      <input type="email" name="email" placeholder="Email" value={values.email} onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" value={values.password} onChange={handleChange} />

  </div>

)

const FormikApp = withFormik({
  mapPropsToValues({ email, password }){
    return {
        email: email || 'example@email.com',
        password: password || ''
    }  
  }
})(App)

export default FormikApp
