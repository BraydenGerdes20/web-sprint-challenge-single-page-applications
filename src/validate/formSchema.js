import * as yup from'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('name is reqired')
        .min(2, 'name must be more than 2 characters long')
})
export default formSchema