import React from "react";

export const TelephoneNumberInput = (p) => {
    return(
        <form>
            <label>
                Number:
                </label>
                <input
                name="telephoneNumber"
                type="text"
                onChange={p.onChange}
                value={p.telephoneNumber} />
            {p.telephoneNumberErrorMessage && <p>p.telephoneNumberErrorMessage</p>}
        </form>
    );
};