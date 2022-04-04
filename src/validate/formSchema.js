import * as yup from 'yup';

const formSchema = yup.object({
    name: yup
        .string()
        .min(2, 'name must be more that 2 charaters long!'),
})
export default formSchema;