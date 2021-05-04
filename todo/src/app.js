import Notes from './js/notes';
import UI from './js/ui';
import Storage from './js/storage';

document.addEventListener('DOMContentLoaded', () => {
    UI.renderNotes();
});

document.querySelector('#submit').addEventListener('click', (e) => {
    e.preventDefault();
    const title = document.querySelector('#title').value;
    const body = document.querySelector('#body').value;
    const note = new Notes(title, body);

    Storage.addNote(note);
    UI.clearForm();
    UI.renderNotes();
});

document.querySelector('#notes-area').addEventListener('click', e => {
    console.log(e.target)
    console.log(e.target.closest('.card'))
    UI.removeNote(e.target.parentNode.parentNode);
    // UI.renderNotes();
});

