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

    static displayMsg(action, status) {
        const $msg = document.querySelector('#message');

        switch (action) {
            case 'add':
                $msg.textContent = 'Note added.';
            break;
            case 'delete':
                $msg.textContent = 'Note deleted';
            break;
            case 'update':
                $msg.textContent = 'Note updated';
            break;
            case 'validation':
                $msg.textContent = 'Please write a note.';
            break;
        }

        if (status === 'danger') {
            $msg.classList.remove('theme-success');
            $msg.classList.add('theme-danger');
        } else {
            $msg.classList.remove('theme-danger');
            $msg.classList.add('theme-success');  
        }

        $msg.style.visibility = 'visible';

        setTimeout(() => {
            $msg.style.visibility = 'hidden';
        }, 3000);
    }

    static clearForm(title, body) {
        title.value = '';
        body.value = '';     
    }

    static openForm() {
        const $formTitle = document.querySelector('#form-main #title');
        const $formBtns = document.querySelector('#form-buttons-main');

        $formTitle.style.display = 'block';
        $formBtns.style.display = 'block';  
    }

    static closeForm() {
        const $formTitle = document.querySelector('#form-main #title');
        const $formBtns = document.querySelector('#form-buttons-main');

        $formTitle.style.display = 'none';
        $formBtns.style.display = 'none';
    }

    static openCloseColor(note) {
        const $colorToolTip = document.querySelector('.color-tooltip');
        const noteCoords = note.getBoundingClientRect();
        console.log(noteCoords)
        const horizontal = noteCoords.left + window.scrollX;
        const vertical = noteCoords.top + window.scrollY;

        $colorToolTip.style.transform = `translate(${horizontal}px, ${vertical}px)`;
        $colorToolTip.style.display = 'flex';

        
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