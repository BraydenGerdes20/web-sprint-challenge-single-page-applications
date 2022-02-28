import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .min(2, 'name must be more that 2 charaters long!'),
})
export default formSchema;