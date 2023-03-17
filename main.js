let myLibrary = [];

class Book {
  constructor(title, author, pageCount, read) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.read = read;
  }
}

// let title = document.getElementById("book-title").value;
let author = document.getElementById("book-author").value;
let pageCount = document.getElementById("page-count").value;
let read = document.getElementById("read-checkbox").checked;

function addBookToLibrary(title, author, pageCount, read) {
  const newBook = new Book(title, author, pageCount, read);
  console.log(newBook);
  //myLibrary.push(newBook);
  //displayBook();
}

document.getElementById("new-book-form").addEventListener("submit", handleAddBook);

function handleAddBook(event) {
  event.preventDefault();
  console.log(event);
  const title = event.target[0];
  console.log(title);
  const author = event.target[1];
  const pageCount = event.target[2];
  const read = event.target[3];
}

function displayBook() {}
