import { useFormik } from "formik";
import * as Yup from "yup";

export default function FormikFormWithYUP(){


    const formik = useFormik({
        initialValues:{
            name:"",
            email:""
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(15,"您的名字不能超過15個字!")
                .required("您的名字不能是空值!"),
            email: Yup.string()
                .max(15,"請您輸入有效的email!")
                .required("您的email不能是空值!"),
        }),
        onSubmit: (values ,{resetForm})=>{
            console.log(values);
            resetForm();
        }
    });

    const showNameError = formik.touched.name && formik.errors.name;
    const showEmailError = formik.touched.email && formik.errors.email;

    return(
        <form onSubmit={formik.handleSubmit}> 
            <label htmlFor="name">Your name</label>
            <input 
                type="text" 
                id="name"
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className={showNameError ? "invalid":""}
            />
            {showNameError ?(
                <p className="error-text">{formik.errors.name}</p>
            ): null}

            &nbsp;&nbsp;&nbsp;

            <label htmlFor="email">Your e-mail</label>
            <input 
                type="email" 
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email} 
                className={showEmailError ? "invalid":""}
            />
            {showEmailError ?(
                <p className="error-text">{formik.errors.email}</p>
            ): null}
            <br></br>
            <button type="submit">Submit</button>
        </form>
    )
}