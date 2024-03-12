import useFormInput from "../../assets/hooks/useFormInput";


export default function Form() {
    const firstNameProps = useFormInput("Juno");
    const lastNameProps = useFormInput("Cristian");
 

    return (
        <>
        <label>
            First name:
            <input {...firstNameProps}/>
        </label>

        <label>
            Last name:
            <input {...lastNameProps}/>
        </label>
        <p><b>
            bom dia, {firstNameProps.value}  {lastNameProps.value} 😉
            </b></p>
        </>
    );
}
