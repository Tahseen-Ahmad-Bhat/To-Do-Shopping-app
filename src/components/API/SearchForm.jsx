import React, { useState } from "react";
import "./SearchForm.css";
import { validateInput } from "../../util/validate";
import { useNotificationContext } from "../../util/customHooks";

export default function SearchForm({ setCity }) {
  const [text, setText] = useState("");

  const { updateNotification } = useNotificationContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    const { ok, msg } = validateInput(text);

    if (ok === "false") return updateNotification(msg);

    setCity(text.toLowerCase());
    setText("");
  };

  return (
    <div className="searchForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter the city name"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
