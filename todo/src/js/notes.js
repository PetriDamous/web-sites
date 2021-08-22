import { v4 as uuidv4 } from "uuid";
class Notes {
  constructor(title, body, id = uuidv4(), color = "default") {
    this.title = title;
    this.body = body;
    this.id = id;
    this.color = color;
  }
}

export default Notes;
