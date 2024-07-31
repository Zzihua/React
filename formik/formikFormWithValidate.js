import { useFormik } from "formik";

export default function FormikFormWithValidate(){

    const emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-]+)*\.[A-Za-z]+$/;

    const validate = (values)=>{
        const errors = {};

        if(!values.name){
            errors.name = "您的名字不能室空值";
        }else if(values.name.length >15){
            errors.name = "您的名字不能超過15個字";
        }

        if(!values.email){
            errors.email = "您的email不能室空值";
        }else if(!emailRule.test(values.email)){
            errors.name = "請您輸入有效的email";
        }
        return errors;
    }









    const formik = useFormik({
        initialValues:{
            name:"",
            email:""
        },
        validate,
        onSubmit: (values)=>{
            console.log(values);
        }
    });

    return(
        <form onSubmit={formik.handleSubmit}> 
            <label htmlFor="name">Your name</label>
            <input 
                type="text" 
                id="name"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
            />
            <label htmlFor="email">Your e-mail</label>
            <input 
                type="email" 
                id="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email} />
            <button type="submit">Submit</button>
        </form>
    )
}