let myLibrary = [];

class Book {
  constructor(title, author, pageCount, readStatus) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.readStatus = readStatus;
    this.index;
  }
}

function getNewCard() {
  const newCard = document.createElement("div");

  newCard.classList.add("card");
  newCard.setAttribute("id", "card");

  return newCard;
}

function getNewTitle(title) {
  const newTitle = document.createElement("h2");

  newTitle.setAttribute("id", "card-heading");
  newTitle.textContent = title;

  return newTitle;
}

function getNewAuthor(author) {
  const newAuthor = document.createElement("p");
  newAuthor.textContent = `Written by: ${author}`;

  return newAuthor;
}

function getNewPageCount(pageCount) {
  const newPageCount = document.createElement("p");
  newPageCount.textContent = `${pageCount} pages`;

  return newPageCount;
}

function getReadStatusButton() {
  const readStatusButton = document.createElement("button");
  const checkbox = document.getElementById("form-read-status");
  readStatusButton.setAttribute("id", "read-status-button");
  
  if (checkbox.checked === true) {
    readStatusButton.textContent = "Read";
    readStatusButton.classList.add("read");
  } else {
    readStatusButton.textContent = "Unread";
    readStatusButton.classList.add("unread");
  }

  return readStatusButton;
}

function handleReadButton(event) {
  const button = event.target;
  const index = button.parentElement.dataset.index;
  console.log(event);

  if (button.classList[0] === "read") {
    button.classList.remove("read");
    button.classList.add("unread");
    button.textContent = "Unread";
    myLibrary[index].readStatus = false;
  } else {
    button.classList.remove("unread");
    button.classList.add("read");
    button.textContent = "Read";
    myLibrary[index].readStatus = true;
  }
}

function constructDeleteButton(index) {
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("card-button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", (e) => {
    myLibrary.splice(index, 1);
    e.target.parentElement.remove();
  });

  return deleteButton;
}

function addToLibrary(event) {
  const title = event.target[0].value;
  const author = event.target[1].value;
  const pageCount = event.target[2].value;
  const readStatus = document.getElementById("form-read-status").checked;
  const newBook = new Book(title, author, pageCount, readStatus);

  myLibrary.push(newBook);
}

function constructBook(book, index) {
  const { title, author, pageCount } = book;
  const books = document.getElementById("books");

  const newCard = getNewCard();

  if (book.index >= 0) {
    return;
  }

  const newTitle = getNewTitle(title);
  const newAuthor = getNewAuthor(author);
  const newPageCount = getNewPageCount(pageCount);
  const readStatusButton = getReadStatusButton();
  const deleteButton = constructDeleteButton(index);

  newCard.append(newTitle);
  newCard.append(newAuthor);
  newCard.append(newPageCount);
  newCard.append(readStatusButton);
  readStatusButton.addEventListener("click", handleReadButton);
  newCard.append(deleteButton);
  newCard.setAttribute("data-index", index);

  book.index = index;
  books.append(newCard);
}

document.getElementById("new-book-form").addEventListener("submit", (e) => {
  e.preventDefault();
  addToLibrary(e);

  myLibrary.forEach((book, index) => {
    constructBook(book, index);
  });

  console.log(myLibrary);
  document.getElementById("new-book-form").reset();
});
