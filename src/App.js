import * as React from 'react'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'

const erzStyle = {color:'red', fontSize:'.6rem', marginBottom: 3}

const App = ({
    values,
    errors,
    touched
}) => (

  <Form>

<div>
      <div> 
        { touched.email && errors.email && 
          <p style={erzStyle}>{errors.email}</p> 
        }
        <Field type="email" name="email" placeholder="Email" />
      </div>

      <div> 
        { touched.password && errors.password && 
          <p style={erzStyle}>{errors.password}</p> 
        }
        <Field type="password" name="password" placeholder="Password" />
      </div>

      <button type="submit">Submit</button>
</div>

      <div>
        <Field type="checkbox" name="newsletter" checked={values.newsletter} />
        Sign up to our newsletter
      </div>

      <div>
        <Field component="select" name="plan">
          <option value="free">Free</option>
          <option value="premium">Premium</option>
        </Field>
      </div>

  </Form>

)

const FormikApp = withFormik({
  mapPropsToValues({ email, password, newsletter, plan }){
    return {
        email: email || '',
        password: password || '',
        newsletter: newsletter || false,
        plan: plan || 'free'
    }  
  },
  // integrate Yup
  validationSchema: Yup.object().shape({
   email: Yup.string().email('Email not valid').required('Email is required'),
   password: Yup.string().min(4, 'Password must be at least 4 characters').required('Password is required') 
  }), // end Yup
  handleSubmit(values) {
    console.log(values) 
  }

})(App)

export default FormikApp
