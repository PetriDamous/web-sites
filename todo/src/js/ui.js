import Storage from './storage';

class UI {    
    static renderNotes() {
        const notes = Storage.getNotes();

        document.querySelector('#notes-area').innerHTML = notes.map((note) => 
            `<div class="card" data-color="${note.color}" data-id="${note.id}">
                <h3 class="card__title">${note.title}</h3>
                <div class="card__body">${note.body}</div>
                <div class="card__options">
                    <div class="card__color">
                        <img src="/img/chromatic.png" alt="color picker">
                    </div>
                    <button class="btn">Delete</button>
                </div>
            </div>`
        ).join('');
    }

    static removeNote() {

    }

    static clearForm() {    
        document.querySelector('#title').value = '';
        document.querySelector('#body').value = '';        
    }
}

export default UI;