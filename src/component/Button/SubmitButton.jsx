import React from "react";
import { memo } from "react";

export const SubmitButton = memo((p) => {
  return (
    <div>
      <button type="submit" onClick={p.onClick} Submit={p.onChange} disabled={p.disabled} >
        {p.name}
      </button>
    </div>
  );
});
