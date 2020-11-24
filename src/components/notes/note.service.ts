export namespace NoteService {
  export function loadNotes(): Promise<string[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(['abc', 'foo', 'asdf']), 1500);
    });
  }
}
