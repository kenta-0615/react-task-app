import React from "react";
import { memo } from "react";

export const EmailAddressInput = memo((p) => {
  return (
    <div>
      <label>Email:</label>
      <input
        type="email"
        required
        value={p.email}
        onChange={p.onChange}
        onClick={() => {}}
      />
      {p.errorMessage && <p>{p.errorMessage}</p>}
    </div>
  );
});
