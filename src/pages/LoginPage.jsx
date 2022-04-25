import { useState } from "react";
import { TextName } from "../component/inputForm/TextName";
import { EmailAddressInput } from "../component/inputForm/EmailAddressInput";
import { PasswordInput } from "../component/inputForm/PasswordInput";
import { TelephoneNumberInput } from "../component/inputForm/TelephoneNumberInput";
import { SubmitButton } from "../component/Button/SubmitButton";
import { memo } from "react";

export const LoginPage = memo(() => {
  //  stateの定義
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [telephoneNumber, setTelephoneNumber] = useState("");

  // バリデーションチェックのロジック
  const nameErrorMessage = () => {
    if (name.length <= 0) return "必須入力です";
    console.log(name.length);
    if (name.length < 6 || name.length > 38) return "6文字以上38文字以下で入力してください";
    console.log(name.length);
    if (!/^[0-9a-zA-Z]*$/.test(name)) return "半角英数字ではありません";
    console.log(!/^[0-9a-zA-Z]*$/);
    return "";
  };

  const emailErrorMessage = () => {
    const isValid = email != null && email.trim().length > 0;

    if (!isValid) return "メールのバリデーションエラー";
    return "";
  };

  const passwordErrorMessage = () => {
    const bothFieldsAreFilled = password && confirm;
    const passwordMatch = password === confirm;

    if (!bothFieldsAreFilled) return "パスワードとパスワード確認を入力してください";
    if (!passwordMatch) return "パスワードが一致していません";
    return "";
  };

  const telephoneNumberErrorMessage = () => {
    console.log(telephoneNumberErrorMessage);
    if (telephoneNumber.length <= 0) return "電話番号を入力してください";
    if (!/[0-9]{1,4}/.test(telephoneNumber)) return "正しく入力してください";
    return "";
  };

  //    stateを更新する関数たち
  const changeName = (e) => {
    setName(e.target.value);
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePass = (e) => {
    setPassword(e.target.value);
  };

  const changeConfirm = (e) => {
    setConfirm(e.target.value);
  };

  const changeTel = (e) => {
    setTelephoneNumber(e.target.value);
  }

    
  const canButtonNotClick = nameErrorMessage().length > 0 || emailErrorMessage().length >0 || passwordErrorMessage().length >0 || telephoneNumberErrorMessage().length >0;



  const sendUserInfo = () => {
    console.log(name, email, password, confirm, telephoneNumber);
    alert("送信したよ");
  };


  return (
    <div>
      <TextName
        name={name}
        onChange={changeName}
        errorMessage={nameErrorMessage()}
      />
      <EmailAddressInput
        email={email}
        onChange={changeEmail}
        errorMessage={emailErrorMessage()}
      />
      <PasswordInput
        password={password}
        onChangePass={changePass}
        confirm={confirm}
        onChangeConfirm={changeConfirm}
        errorMessage={passwordErrorMessage()}
      />
      <TelephoneNumberInput
      telephoneNumber={telephoneNumber}
      changeTel={changeTel}
      telephoneNumberErrorMessage={telephoneNumberErrorMessage()}
      />
      <SubmitButton name={"保存"}  onClick={sendUserInfo} disabled={canButtonNotClick} />
    </div>
  );
});
