import React from "react";
import { useState, memo } from "react";

export const PasswordInput = memo(() => {
    const [password, setPassword] = useState('');
    console.log(password);

    const [confirm, setConfirm] = useState('');
    console.log(confirm);

    const isValid = password != null && password.trim().length > 0;
    console.log(isValid);

    const bothFieldsAreFilled = password && confirm;
    console.log(bothFieldsAreFilled);

    const passwordMatch = password === confirm;
    console.log(passwordMatch);


    return(
        <div>
        <form>
            <label>
                PASS:
            </label>
            <input type="password"
                   name="password"
                   value={password}
                   onChange={(e) => {setPassword(e.target.value)}}
                   />
            <button disabled={!isValid}>Save</button>
        </form>
        <form>
            <label>
                REPASS:
            </label>
            <input
            type="password"
            name="confirm"
            value={confirm}
            onChange={(e) => {setConfirm(e.target.value)}}
            />
            {bothFieldsAreFilled ?
            (passwordMatch ?
            (
            <div>
                <i>check_circle</i>
                Password match
            </div>

            ) :
            (
                <div>
                    <i>report</i>
                    Password do not match
                </div>
            )
            ) : null
        }
        <button disabled={!isValid}>Save</button>
        </form>
        </div>
    )
});