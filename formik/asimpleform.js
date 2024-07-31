import { useFormik } from "formik";


export default function SimpleForm(){
    return(
        <form>
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" />
            <label htmlFor="email">Your e-mail</label>
            <input type="email" id="email" />
            <button type="submit">Submit</button>
        </form>
    )
}