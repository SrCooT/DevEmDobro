import { useState } from "react";

export default function useFormInput(initialValue) {
    const [ value, setValue] = useState(initialValue);

    function handlechange(event) {
        setValue(event.target.value);
    }

    const inputProps ={
        value: value,
        onChange: handlechange
    }

    return inputProps
}
