import React, { useState } from 'react';

import { Note } from './note';

export function NoteList() {
  const [notes, setNotes] = useState(['abc', 'foo', 'asdf']);
  const [text, setText] = useState('');
  return (
    <>
      <ul>
        {notes.map((note, i) => (
          <Note text={note} key={i} /> // index is not a good react-key
        ))}
      </ul>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setNotes([...notes, text]);
          setText('');
        }}
      >
        add
      </button>
    </>
  );
}
