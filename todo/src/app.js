import Notes from './js/notes';
import UI from './js/ui';
import Storage from './js/storage';

const $title = document.querySelector('#title');
const $body = document.querySelector('#body');

document.addEventListener('DOMContentLoaded', () => {
    UI.renderNotes();
});

document.querySelector('#submit-main').addEventListener('click', e => {
    e.preventDefault();

    const note = new Notes($title.value, $body.value);
    Storage.addNote(note);
    UI.clearForm($title, $body);
    UI.renderNotes();
});


document.querySelector('.modal').addEventListener('click', e => {
    if (e.target.id === 'close-modal') {
        UI.closeModal();
    }

    if (e.target.id === 'submit-modal') {
        e.preventDefault();
        Storage.updateNote(e.currentTarget.dataset.id);
        UI.closeModal();
        UI.renderNotes();
    }
});

document.querySelector('#notes-area').addEventListener('click', e => {
    const elm = e.target;
    
    if (elm.matches('.btn-delete')) {
        Storage.removeNote(elm.closest('.card'));
        UI.renderNotes();
        return;
    }

    if (elm.matches('.card__color img')) {
        console.log('change color')
        // console.log(elm.closest('.card'))
        UI.renderNotes();
        return;
    }

    UI.openModal(elm.closest('.card'));    
});

