import { TextName } from "../component/inputForm/TextName";
import { MailAddressInput } from "../component/inputForm/MailAddressInput";
import { PasswordInput } from "../component/inputForm/PasswordInput";
import { PasswordReInput } from "../component/inputForm/PasswordReInput";
import { NumberInput } from "../component/inputForm/NumberInput";


export const LoginPage = () => {
    return(
        <div>
            <TextName />
            <dr />
            <MailAddressInput />
            <dr />
            <PasswordInput />
            <PasswordReInput />
            <dr />
            <NumberInput />
        </div>
    );
}