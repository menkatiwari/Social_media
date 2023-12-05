import { Button, TextField } from '@mui/material'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import * as Yup from "yup"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useDispatch } from 'react-redux';
import { registerUserAction } from '../../Redux/Auth/auth.action';


const initialValues = {firstName:"",lastName:"", email:"",password:"",gender:""};
const validationSchema = {email:Yup.string().email("Invalid email")
.required("Email is required"),password:Yup.string()
.min(6,"Password must be at least 6 character")
.required("password is Required")};

const Register = () => {
    const [gender, setGender] = useState("");
    const dispatch=useDispatch();

    const handleSubmit = (values) => {
        values.gender=gender
        console.log("handlesubmit",values);
        dispatch(registerUserAction({data:values}))
    }

    const handleChange = (event) => {
        setGender(event.target.value);
      };


    return (
        <>
            <Formik
             onSubmit={handleSubmit} 
            // validationSchema={validationSchema} 
            initialValues={initialValues}>
            
            <Form className='space-y-5'>
                <div className='space-y-5'> 
                    <div>
                     <Field as={TextField} name="firstName" 
                     placeholder="FirstName" type="text"
                     variant="outlined" fullWidth/>
                     <ErrorMessage  name='firstName' component={"div"} 
                     className='text-red-500'/>
                    </div>

                    <div>
                     <Field as={TextField} name="lastName" 
                     placeholder="LastName" type="text"
                     variant="outlined" fullWidth/>
                     <ErrorMessage  name='lastName' component={"div"} 
                     className='text-red-500'/>
                    </div>

                    <div>
                     <Field as={TextField} name="email" 
                     placeholder="Email" type="email"
                     variant="outlined" fullWidth/>
                     <ErrorMessage  name='email' component={"div"} 
                     className='text-red-500'/>
                    </div>

                    <div>
                     <Field as={TextField} name="password" 
                     placeholder="Password" type="password"
                     variant="outlined" fullWidth/>
                     <ErrorMessage  name='password' component={"div"} 
                     className='text-red-500'/>
                    </div>
                   
                    <RadioGroup onChange={handleChange}
                     row
                       aria-label="gender"
                       name="gender">
                       <FormControlLabel value="female" control={<Radio />} label="Female" />
                       <ErrorMessage  name='gender' component={"div"} 
                        className='text-red-500'/>
                       <FormControlLabel value="male" control={<Radio />} label="Male" />   
                    </RadioGroup>


                </div>
                <Button sx={{padding:".8rem 0rem"}} fullWidth type='submit'
                variant='contained' color='primary'>Register</Button>
            </Form>
            </Formik>
        </>
    )
}

export default Register
