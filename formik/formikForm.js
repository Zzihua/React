import { useFormik } from "formik";


export default function FormikForm(){
    const formik = useFormik({
        initialValues:{
            name:"",
            email:""
        },
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