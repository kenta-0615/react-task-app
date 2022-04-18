import React from "react";
import { useState, memo } from "react";

export const PasswordInput = memo(() => {
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const bothFieldsAreFilled = password && confirm;
    const passwordMatch = password === confirm;

    return(
        <div>
        <form>
            <label>
                PASS:
            </label>
            <input type="password"
                   name="password"
                   value={password} 
                   onChange={(e) => {setPassword(e.target.value)}} />
            <button>Save</button>
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
        </form>
        </div>
    )
});