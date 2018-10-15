import * as React from 'react'
import { withFormik } from 'formik'
import Yup from 'yup'

const App = ({
    values,
    handleChange,
    handleSubmit
}) => (

  <form onSubmit={handleSubmit}>

      <input type="email" name="email" placeholder="Email" value={values.email} onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" value={values.password} onChange={handleChange} />
      <button type="submit">Submit</button>

  </form>

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
