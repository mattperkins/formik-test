import * as React from 'react'
import { withFormik } from 'formik'
import Yup from 'yup'

const App = ({
    values,
    handleChange
}) => (

  <div>
      <input type="email" name="email" placeholder="Email" value={values.email} onChange={handleChange} />
  </div>

)

const FormikApp = withFormik({
  mapPropsToValues(){
    return {
        email: 'test1234'  
    }  
  }
})(App)

export default FormikApp
