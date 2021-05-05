class Storage {
    static getNotes() {
        const notes = JSON.parse(localStorage.getItem('notes'));

        return notes === null ? [] : notes;
    }

    static addNote(note) {
        let notes = this.getNotes();

        notes = [...notes, note];

        localStorage.setItem('notes', JSON.stringify(notes));
    }

    static removeNote({dataset: {id}}) {
        let notes = this.getNotes();

        notes = notes.filter(note => note.id !== id);

        localStorage.setItem('notes', JSON.stringify(notes));
    }

    static updateNote(id) {
        let notes = this.getNotes();

        const modelTitle = document.querySelector('.modal #title').value;
        const modelBody = document.querySelector('.modal #body').value;

        notes = notes.reduce((acc, curr) => {
            if (curr.id === id) {
                curr.title = modelTitle;
                curr.body = modelBody;
                acc.push(curr);
                return acc;
            } else {
                acc.push(curr);
                return acc;
            }
        }, []);

        localStorage.setItem('notes', JSON.stringify(notes));
    }
}

export default Storage;