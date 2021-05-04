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

    static removeNote(note) {
        console.log(note)

    }
}


export default Storage;