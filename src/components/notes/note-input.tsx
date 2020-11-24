import React, { useState } from 'react';

export function NoteInput(props: { onAddNote: (text: string) => void }) {
  const [text, setText] = useState('');
  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          props.onAddNote(text);
          setText('');
        }}
      >
        add
      </button>
    </>
  );
}
