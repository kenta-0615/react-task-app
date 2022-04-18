import { TextName } from "../component/inputForm/TextName";
import { EmailAddressInput } from "../component/inputForm/EmailAddressInput";
import { PasswordInput } from "../component/inputForm/PasswordInput";
import { NumberInput } from "../component/inputForm/NumberInput";
import { memo } from "react";


export const LoginPage = memo(() => {
    return(
        <div>
            <TextName />
            <EmailAddressInput />
            <PasswordInput />
            <NumberInput />
        </div>
    );
});