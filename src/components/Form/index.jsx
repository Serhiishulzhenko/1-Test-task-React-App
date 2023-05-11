import React, { useState } from 'react';
import "./index.css";

export const Form = ({ note, onSubmit }) => {
  const [title, setTitle] = useState(note ? note.title : "");
  const [body, setBody] = useState(note ? note.body : "");

  const submitForm = (e) => {
    e.preventDefault();
    onSubmit({ title, body });
    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={submitForm} className="form">
      <input 
        className="input"
        type="text" 
        placeholder="Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea 
        className="textarea"
        placeholder="Body" 
        value={body} 
        onChange={(e) => setBody(e.target.value)}
      />
      <button type="submit">{note ? "Update" : "Create"} Note</button>
    </form>
  );
};
