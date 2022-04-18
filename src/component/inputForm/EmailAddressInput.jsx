import React from "react"
import { useState, memo } from "react";

export const EmailAddressInput = memo((onSignup) => {
    const [email, setEmail] = useState('');
    const isValid = email != null && email.trim().length > 0;
    const handleSubmit = event => {
        event.preventDefault();
        onSignup({email});
    }


    return(
        <from onSubmit={handleSubmit}>
            <label>
                Email:{email}
            </label>
            <input type="email" required value={email} onChange={(e) => {setEmail(e.target.value)}} onClick={() => {}} />
            <button disabled={!isValid}>Save</button>
        </from>
    );
});