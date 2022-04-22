import { useState, memo } from "react"

export const TextName = memo(() => {
    const [name, setName] = useState('')
    console.log(name);

    const nameErrorMessage = ()=>{
        if(name.length <= 0) return "必須入力です"
        console.log(name.length);
        if(name.length < 6 || name.length > 38) return "半角英数字のみ"
        console.log(name.length);
        if(!/^[0-9a-zA-Z]*$/.test(name)) return "半角英数字ではありません"
        console.log(!/^[0-9a-zA-Z]*$/);
        return ""
    }
    
    return(
        <div>
        <form action="/name" method="post">
            <label>
                Name:
                <input type="text" name="name" placeholder="Enter your name" value={name} onChange={(e) => {setName(e.target.value)}} onClick={()=>{}} />
                {nameErrorMessage().length > 0 && <p>{nameErrorMessage()}</p>}
                <button disabled={nameErrorMessage().length > 0}>Save</button>
            </label>
        </form>
        </div>
    );
});