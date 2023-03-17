let myLibrary = [];

class Book {
    constructor(title, author, pageCount, read) {
        this.title = title;
        this.author = author;
        this.pageCount = pageCount;
        this.read = read;
    }
}

let title = document.getElementById("book-title").value;
let author = document.getElementById("book-author").value;
let pageCount = document.getElementById("page-count").value;
let read = document.getElementById("read-checkbox").checked;

function addBookToLibrary(title, author, pageCount, read) {

    const newBook = new Book(title, author, pageCount, read);
    console.log(newBook)
    //myLibrary.push(newBook);
    //displayBook();
}

document.getElementById("add-book").addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Hello World");
})

function displayBook() {

}