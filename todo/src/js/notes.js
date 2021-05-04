import {generateId} from './utilis/utilis';
import Storage from './storage';

class Notes {
    constructor(title, body, id=generateId(Storage.getNotes()), color="white") {
        this.title = title;
        this.body = body;
        this.id = id;
        this.color = color;
    }
}

export default Notes;