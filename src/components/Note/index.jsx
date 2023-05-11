import React, { useState } from "react";
import { Form } from "../index";
import "./index.css";

export const Note = ({ note, onEdit, onDelete }) => {
  const [isEdit, setISedit] = useState(false);

  if (isEdit) {
    return (
      <Form
        note={note}
        onSubmit={(newNote) => {
          onEdit({ ...note, ...newNote });
          setISedit(false);
        }}
      />
    );
  }

  return (
    <div className="note">
      <h2>{note.title}</h2>
      <section>
        <input type="checkbox" id={note.id} data-hidden />
        <label htmlFor={note.id} form={note.id}>Show Description</label>
        <p>{note.body}</p>
      </section>
      <div className="note__button">
      <button onClick={() => setISedit(true)}>Edit</button>
      <button onClick={() => onDelete(note.id)}>Delete</button>
      </div>
    </div>
  );
};
