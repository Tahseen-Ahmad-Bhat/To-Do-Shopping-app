import React from "react";

export default function Input({ htmlFor, value, setValue }) {
  return (
    <div>
      <input
        type="text"
        id={htmlFor}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
      />
    </div>
  );
}
