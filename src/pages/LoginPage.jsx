import { TextName } from "../component/inputForm/TextName";
import { EmailAddressInput } from "../component/inputForm/EmailAddressInput";
import { PasswordInput } from "../component/inputForm/PasswordInput";
import { PasswordReInput } from "../component/inputForm/PasswordReInput";
import { NumberInput } from "../component/inputForm/NumberInput";


export const LoginPage = () => {
    return(
        <div>
            <TextName />
            <dr />
            <EmailAddressInput />
            <dr />
            <PasswordInput />
            <PasswordReInput />
            <dr />
            <NumberInput />
        </div>
    );
}