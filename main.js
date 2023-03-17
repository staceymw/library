let myLibrary = [];

class Book {
  constructor(title, author, pageCount, read) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.read = read;
  }
}

function addBookToLibrary(title, author, pageCount, read) {
  const newBook = new Book(title, author, pageCount, read);
  console.log(newBook);
  //myLibrary.push(newBook);
  //displayBook();
}

document.getElementById("new-book-form").addEventListener("submit", displayBook);


function displayBook(event) {
  event.preventDefault();
  
  const books = document.getElementById("books");

  const newCard = document.createElement("div");
  newCard.classList.add("card");

  const newTitle = document.createElement("h2");
  const title = event.target[0].value;
  newTitle.textContent = title;
  newCard.append(newTitle);

  const newAuthor = document.createElement("p");
  const author = event.target[1].value;
  newAuthor.textContent = `Written by: ${author}`;
  newCard.append(newAuthor);

  const newPageCount = document.createElement("p");
  const pageCount = event.target[2].value;
  newPageCount.textContent = `${pageCount} pages`;
  newCard.append(newPageCount);

  const label = document.createElement("label");
  label.htmlFor = "read-status";
  label.textContent = "Check if read.";
  label.setAttribute("id", "read-status-label");
  const readStatus = document.createElement("input");
  readStatus.setAttribute("type", "checkbox");
  readStatus.setAttribute("id", "read-status");
  newCard.append(label);
  newCard.append(readStatus);

  books.append(newCard);

  document.getElementById("new-book-form").reset();
}

