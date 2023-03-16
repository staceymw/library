let myLibrary = [];

class Book {
    constructor(title, author, pageCount, status) {
        this.title = title
        this.author = author
        this.pageCount = pageCount
        this.status = status
    }
}

function addBookToLibrary(title, author, pageCount, status) {
    const newBook = new Book(title, author, pageCount, status);
    myLibrary.push(newBook);
    //displayBook();
}

function displayBook() {
    
}