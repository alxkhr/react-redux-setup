import React from 'react';

export function NoteList() {
  const notes = ['abc', 'foo', 'asdf'];
  return (
    <ul>
      {notes.map((note) => (
        <li>{note}</li>
      ))}
    </ul>
  );
}
