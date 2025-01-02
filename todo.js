class Todo {
    #title;
    #contents;
    #id;
    #deadline;

    constructor(title, contents, id, deadline) {
        this.#title = title;
        this.#contents = contents;
        this.#id = id;
        this.#deadline = deadline;
    }

    getTodo() {
        return {
            id: this.#id,
            title: this.#title,
            deadline: this.#deadline,
        }
    }

    getDetail() {
        return {
            title: this.#title,
            contents: this.#contents
        }
    }

    editDetail(newTitle, newContents) {
        if(newTitle !== '') {
            this.#title = newTitle;
        }
        if(newContents !== '') {
            this.#contents = newContents;
        }
    }
}

export default Todo;