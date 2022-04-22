import { TextName } from "../component/inputForm/TextName";
import { EmailAddressInput } from "../component/inputForm/EmailAddressInput";
import { PasswordInput } from "../component/inputForm/PasswordInput";
import { TelephoneNumberInput } from "../component/inputForm/TelephoneNumberInput";
import { SubmitButton } from "../component/Button/SubmitButton";
import { memo } from "react";


export const LoginPage = memo(() => {

    return(
        <div>
            <TextName />
            <EmailAddressInput />
            <PasswordInput />
            <TelephoneNumberInput />
            <SubmitButton />
        </div>
    );
});