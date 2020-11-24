import React, { useEffect, useState } from 'react';

import { Note } from './note';
import { NoteInput } from './note-input';
import { NoteService } from './note.service';

export function NoteList() {
  const [notes, setNotes] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    NoteService.loadNotes().then((notes) => {
      if (!isMounted) {
        return;
      }
      setNotes(notes);
      setIsLoading(false);
    });
    return () => {
      isMounted = false;
    };
  }, []);
  if (isLoading) {
    return <div>loading notes...</div>;
  }
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
