import { useState } from "react";
import { TextName } from "../component/inputForm/TextName";
import { EmailAddressInput } from "../component/inputForm/EmailAddressInput";
import { PasswordInput } from "../component/inputForm/PasswordInput";
import { TelephoneNumberInput } from "../component/inputForm/TelephoneNumberInput";
import { SubmitButton } from "../component/Button/SubmitButton";
import { memo } from "react";

export const LoginPage = memo(() => {
  const [name, setName] = useState("");
  console.log(name);

  const nameErrorMessage = () => {
    if (name.length <= 0) return "必須入力です";
    console.log(name.length);
    if (name.length < 6 || name.length > 38) return "半角英数字のみ";
    console.log(name.length);
    if (!/^[0-9a-zA-Z]*$/.test(name)) return "半角英数字ではありません";
    console.log(!/^[0-9a-zA-Z]*$/);
    return "";
  };

  const changeName = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <TextName
        name={name}
        onChange={changeName}
        errorMessage={nameErrorMessage}
      />
      <EmailAddressInput />
      <PasswordInput />
      <TelephoneNumberInput />
      <SubmitButton />
    </div>
  );
});
