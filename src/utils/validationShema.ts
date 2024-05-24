import * as yup from 'yup'



export const formShema = yup.object().shape({
    name: yup.string().trim().min(5, 'Минимальная длина 5 символов').required('Обязательное поле'),
    phone: yup.string().required('Обязательное поле'),
    birthday: yup.string().required('Обязательное полея'),
    role: yup.string().required('Обязательное поле'),
})