import React from "react"
import { useState, useEffect } from "react";

export const EmailAddressInput = () => {
    const [email, setEmail] = useState('');
    useEffect(() => {
        setEmail("test@example.com")
    },[]);

    const emailErrorMassage = () => {
        if (!email) return '※メールアドレスを入力してください'
        const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if (!regex.test(email)) return '※正しい形式でメールアドレスを入力してください'
        return ''
    }

    return(
        <from>
            <label>
                Email:{email}
            </label>
            <input type="email" name="email" onChange={(e) => {setEmail(e.target.value)}} onClick={() => {}} />
            {emailErrorMassage.regex < 0 && <p>{emailErrorMassage.length()}</p>}
            <button disabled={emailErrorMassage.length()}>Save</button>
        </from>
    );
}