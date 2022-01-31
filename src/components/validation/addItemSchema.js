import * as yup from 'yup';

const addItemSchema =  yup.object().shape({
    name: yup
    .string()
    .trim()
    .required("Please type a name")
    .min(1),
    description: yup
    .string()
    .trim()
    .required('Please type a Description')
    .min(10, 'Please type more')
    .max(150, 'Reached max characters')
})

export default addItemSchema;