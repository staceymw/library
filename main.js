let myLibrary = [];

class Book {
  constructor(title, author, pageCount, readStatus) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.readStatus = readStatus;
  }
}

function addBookToLibrary(event) {
  const title = event.target[0].value;
  const author = event.target[1].value;
  const pageCount = event.target[2].value;
  const readStatus = document.getElementById("read-status").checked;
  const newBook = new Book(title, author, pageCount, readStatus);
  myLibrary.push(newBook);
}

function displayBook(event) {
  const books = document.getElementById("books");
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  newCard.setAttribute("id", "card");
  
  const newTitle = document.createElement("h2");
  const title = event.target[0].value;
  newTitle.setAttribute("id", "card-heading");
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

  const newReadStatus = document.createElement("input");
  newReadStatus.setAttribute("type", "checkbox");
  newReadStatus.setAttribute("id", "read-status");
  newCard.append(label);
  newCard.append(newReadStatus);
  books.append(newCard);
  //display is done
}


document.getElementById("new-book-form").addEventListener("submit", (e) => {
  e.preventDefault();
  displayBook(e);
  addBookToLibrary(e);
  document.getElementById("new-book-form").reset();
});

  
  
