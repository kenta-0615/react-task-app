import React from "react";
import { useState, memo } from "react";

export const PasswordInput = memo(() => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [state, setState] = useState('');
    const handlePasswordChange = event => {
        setPassword(event.target.value);
    };
    const handleSave = () => {
        console.log(password);
    }

    const passwordErrorMessage = () => {
        if(password.length <= 0) return 'パスワードを入力してください'
    }


    return(
        <form action="/password" method="post">
            <label>
                PASS:
            </label>
            <input type="password" name="password" id="password" value={password} onChange={handlePasswordChange} />
            {passwordErrorMessage().length > 0 && <p>{passwordErrorMessage}</p>}
            <button onClick={handleSave}>Save</button>
        </form>
    )
});