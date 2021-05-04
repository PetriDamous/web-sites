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
                    <button class="btn btn-delete">Delete</button>
                </div>
            </div>`
        ).join('');
    }

    static clearForm(title, body) {
        title.value = '';
        body.value = '';     
    }

    static openModal({dataset: {id}}) {
        const $modal = document.querySelector('.modal');
        const $modelTitle = document.querySelector('.modal #title');
        const $modelBody = document.querySelector('.modal #body');
        
        const notes = Storage.getNotes();
        const note = notes.find(note => note.id === id);

        const {title, body} = note;

        $modal.dataset.id = id;
        $modelTitle.value = title;
        $modelBody.value = body;        

        $modal.classList.add('open-modal');
    }

    static closeModal() {
        const $modal = document.querySelector('.modal');
        $modal.classList.remove('open-modal');
    } 
}

export default UI;