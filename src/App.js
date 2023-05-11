import React, { useEffect, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Form, List, Search } from "./components";
import "./App.css";

const App = () => {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) ?? []);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => {
    setNotes((notes) => [...notes, { ...note, id: uuidv4() }]);
  };

  const deleteNote = (id) => {
    setNotes((notes) => notes.filter((note) => note.id !== id));
  };

  const updateNote = (updatedNote) => {
    setNotes((notes) => notes.map((note) => (note.id === updatedNote.id ? updatedNote : note)));
  };

  const onSearch = (searchText) => setSearchText(searchText);

  const filterNotes = useMemo(() => {
    return notes.filter(({ title, body }) => title?.includes(searchText) || body.includes(searchText));
  }, [notes, searchText]);

  return (
    <div className="app__container">
      <h1 className="app__header">Notes App</h1>
      <div className="app__outlet">
        <Form onSubmit={addNote} />
        <hr />
        <Search onSearch={onSearch} />
        <List notes={filterNotes} onEdit={updateNote} onDelete={deleteNote} />
      </div>
      <div className="app__footer">FOOTER</div>
    </div>
  );
};

export default App;
