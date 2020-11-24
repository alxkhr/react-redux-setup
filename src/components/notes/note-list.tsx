import React, { useState } from 'react';

import { Note } from './note';
import { NoteInput } from './note-input';

export function NoteList() {
  const [notes, setNotes] = useState(['abc', 'foo', 'asdf']);
  return (
    <>
      <ul>
        {notes.map((note, i) => (
          <Note text={note} key={i} /> // index is not a good react-key
        ))}
      </ul>
      <NoteInput
        onAddNote={(text: string) => {
          setNotes([...notes, text]);
        }}
      />
    </>
  );
}
