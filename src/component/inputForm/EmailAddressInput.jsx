import React from "react"
import { useState, memo } from "react";

export const EmailAddressInput = memo(() => {
    const [email, setEmail] = useState('');

    const emailErrorMassage = () => {
        if (!email) return '※メールアドレスを入力してください'
        return ''
}

    return(
        <from>
            <label>
                Email:{email}
            </label>
            <input type="email" name="email" id="email" onChange={(e) => {setEmail(e.target.value)}} onClick={() => {}} />
            <p>{emailErrorMassage.length()}</p>
            <button disabled={emailErrorMassage.length()}>Save</button>
        </from>
    );
});