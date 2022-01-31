import * as yup from 'yup';

const registerSchema =  yup.object().shape({
    username: yup
    .string()
    .trim()
    .required('Username is required')
    .min(5, 'Username is too short'),
    password: yup
    .required('Password is required')
    .min(5, 'Password is too short'),
    role: yup
    .string()
    .oneOf(['owner', 'customer'], 'Please select a role')
})

export default registerSchema;