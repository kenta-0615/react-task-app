import React from "react";
import { useState, memo } from "react";

export const PasswordInput = memo(() => {
    const [password, setPassword] = useState;

    const passwordErrorMessage = () => {
        if(password.length <= 0) return 'パスワードを入力してください'
    }


    return(
        <form action="/password" method="post">
            <label>
                PASS:
            </label>
            <input type="password" name="password" id="password" value={password} onChange={(e) => {setPassword(e.target.value)} } onClick={() => {}} />
            {passwordErrorMessage().length > 0 && <p>{passwordErrorMessage}</p>}
            <button>Save</button>
        </form>
    )
});