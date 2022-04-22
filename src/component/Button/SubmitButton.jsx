import React from "react";
import { useState, memo} from "react";

export const SubmitButton = memo((props) => {
    const [button, setButton] = useState(true);
    console.log(button);

    return (
        <div>
            <button
            type='submit'
            handleChange={props.button}
            onChange={(e) => setButton(e.target.value)}
            >
                送信
            </button>
        </div>
    )
});

