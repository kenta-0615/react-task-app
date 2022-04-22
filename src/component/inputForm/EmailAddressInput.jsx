import React from "react"
import { useState, memo } from "react";

export const EmailAddressInput = memo((onSignup) => {
    const [email, setEmail] = useState('');
    console.log(email);
    const isValid = email != null && email.trim().length > 0;
    console.log(isValid);
    const handleSubmit = event => {
        event.preventDefault();
        onSignup({email});
        console.log(handleSubmit);
    }


    return(
        <from>
            <label>
                Email:
            </label>
            <input type="email" required value={email} onChange={(e) => {setEmail(e.target.value)}} onClick={handleSubmit} />
            <button disabled={!isValid}>Save</button>
        </from>
    );
});