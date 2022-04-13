import React from "react";
import { useState, memo} from "react";

export const NumberInput = memo(() => {
    const [number, setNumber] = useState();

    const numberErrorMassage = () =>{
        if(number.length <= 0) return '電話番号を入力してください'
    }
    return(
        <form>
            <label>
                Number:
                <input type="number" name="numberInput" onChange={(e) => {setNumber(e.target.value)}} onClick={() => {}} />
                <button disabled={numberErrorMassage.length <= 0 && <p>{numberErrorMassage()}</p>}></button>
            </label>
        </form>
    );
});