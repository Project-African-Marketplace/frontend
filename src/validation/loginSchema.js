import * as yup from 'yup';

const loginSchema =  yup.object().shape({
    username: yup
    .string()
    .trim()
    .required('Username is required')
    .min(1, 'Username is too short'),
    password: yup
    .string()
    .required('Password is required')
    .min(1, 'Password is too short')
})

export default loginSchema;