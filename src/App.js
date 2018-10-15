import * as React from 'react'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'


const Erz = ({label}) => (
  <p style={{color:'red', fontSize:'.6rem', marginBottom: 3}}>{label} must be valid</p>  
)

const App = ({
    values,
    errors,
    touched
}) => (

  <Form>

<div>
      <div> { touched.email && errors.email && <Erz label="email" /> }
        <Field type="email" name="email" placeholder="Email" />
      </div>

      <div> { touched.password && errors.password  && <Erz label="password" /> }
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
        email: email || 'example@email.com',
        password: password || '',
        newsletter: newsletter || false,
        plan: plan || 'free'
    }  
  },
  // integrate Yup
  validationSchema: Yup.object().shape({
   email: Yup.string().email().required(),
   password: Yup.string().min(4).required() 
  }), // end Yup
  handleSubmit(values) {
    console.log(values) 
  }

})(App)

export default FormikApp
