import Notes from './js/notes';
import UI from './js/ui';
import Storage from './js/storage';
import {noteValidation} from './js/utilis/utilis';

// Form Elements
const $title = document.querySelector('#form-main #title');
const $body = document.querySelector('#form-main #body');

// Load
document.addEventListener('DOMContentLoaded', () => {
    UI.renderNotes();
});

// Form
document.querySelector('#form-main').addEventListener('click', e => {
    if (e.target.id === 'body') {
        UI.openForm();
    }

    if (e.target.id === 'close-main') {
        e.preventDefault();
        UI.closeForm();
    }

    if (e.target.id === 'submit-main') {
        e.preventDefault();

        if (noteValidation($body.value)) {
            const note = new Notes($title.value, $body.value);
            Storage.addNote(note);
            UI.clearForm($title, $body);
            UI.displayMsg('add', 'success');
            UI.renderNotes();
        } else {
            UI.displayMsg('validation', 'danger');
        }

    }
});


// Modal
document.querySelector('.modal').addEventListener('click', e => {
    if (e.target.id === 'close-modal') {
        e.preventDefault();
        UI.closeModal();
    }

    if (e.target.id === 'submit-modal') {
        e.preventDefault();
        Storage.updateNote(e.currentTarget.dataset.id);
        UI.closeModal();
        UI.displayMsg('update', 'success');
        UI.renderNotes();
    }
});

// Notes
document.querySelector('#notes-area').addEventListener('click', e => {
    const elm = e.target;
    
    if (elm.matches('.btn-delete')) {
        Storage.removeNote(elm.closest('.card'));
        UI.displayMsg('delete', 'success');
        UI.renderNotes();
        return;
    }

    if (elm.matches('.card__color img')) {
        console.log('change color')
        // console.log(elm.closest('.card').dataset.id)
        UI.openCloseColor(elm.closest('.card'))
        UI.renderNotes();
        return;
    }

    UI.openModal(elm.closest('.card'));    
});