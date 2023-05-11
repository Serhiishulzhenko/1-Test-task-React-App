import React from 'react';
import { Note } from '../index';
import "./index.css";

export const List = ({ notes, onEdit, onDelete }) => {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <Note key={note.id} note={note} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};

