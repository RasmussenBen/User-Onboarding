import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required'),
    email: yup
        .string()
        .email('Must be a valid email address')
        .required('Email address is required'),
    password: yup
        .string()
        .required('Password is required'),
    termsOfService: yup
        .boolean()
})

export default formSchema;