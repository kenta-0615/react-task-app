import React from "react";

export const PasswordInput = (p) => {
  return (
    <div>
      <form>
        <label>PASS:</label>
        <input
          type="password"
          name="password"
          value={p.password}
          onChange={p.onChangePass}
        />
      </form>
      <form>
        <label>REPASS:</label>
        <input
          type="password"
          name="confirm"
          value={p.confirm}
          onChange={p.onChangeConfirm}
        />
        {p.errorMessage && <p>{p.errorMessage}</p>}
      </form>
    </div>
  );
};
