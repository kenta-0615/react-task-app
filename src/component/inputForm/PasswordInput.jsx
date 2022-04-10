import React from "react";
import { useState } from "react";

export const PasswordInput = () => {

    return(
        <form action="/password" method="post">
            <label>
                PASS:
            </label>
            <input type="password" name="password" id="password" value="password" onClick={() => {}} />
            <button>Save</button>
        </form>
    )
}