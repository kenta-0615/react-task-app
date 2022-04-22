import React from "react";
import { useState, memo} from "react";

export const TelephoneNumberInput = memo(() => {
    const [inputNumber, setInputNumber] = useState();
    console.log(inputNumber);
    const isValid = inputNumber != null && inputNumber.trim().length > 0;
    console.log(isValid);
    const handleInput = (e) =>{
        const TelephoneNumberInput = TelephoneNumberInput(e.target.value);
        setInputNumber(TelephoneNumberInput);
        console.log(handleInput);
    };

    return(
        <form>
            <label>
                Number:
                <input name={inputNumber} onChange={(e) => handleInput(e)} onClick={() => {}} value={inputNumber} />
                <button disabled={!isValid}>Save</button>
            </label>
        </form>
    );
});