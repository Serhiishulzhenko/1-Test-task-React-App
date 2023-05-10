import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Form, List } from './components';

const App = () => {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) ?? []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => {
    setNotes(notes => [...notes, { ...note, id: uuidv4() }]);
  };

  const deleteNote = (id) => {
    setNotes(notes => notes.filter((note) => note.id !== id));
  }

  const updateNote = (updatedNote) => {
    setNotes((notes) => notes.map((note) =>
      note.id === updatedNote.id ? updatedNote : note
    ));
  }

  return (
    <div>
      <h1>Notes App</h1>
      <Form onSubmit={addNote} />
      <List
        notes={notes}
        onEdit={updateNote}
        onDelete={deleteNote}
      />
    </div>
  );
};

export default App;
