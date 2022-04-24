import React from "react";
import { memo } from "react";

export const SubmitButton = memo((p) => {
  return (
    <div>
      <button type="submit" onClick={p.onClick}>
        {p.name}
      </button>
    </div>
  );
});
