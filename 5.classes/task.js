// task_1
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    return this.state * 1.5;
  }
  set state(num) {
    if (num < 0) {
      this._state = 0;
    } else if (num > 100) {
      this._state = 100;
    } else {
      this._state = num;
    }
  }
  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}
class Book extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, author) {
    super(name, releaseDate, pagesCount, author);
    this.author = author;
    this.type = "book";
  }
}
class NovelBook extends Book {
  constructor(name, releaseDate, pagesCount, author) {
    super(name, releaseDate, pagesCount, author);
    this.type = "novel";
  }
}
class FantasticBook extends Book {
  constructor(name, releaseDate, pagesCount, author) {
    super(name, releaseDate, pagesCount, author);
    this.type = "fantastic";
  }
}
class DetectiveBook extends Book {
  constructor(name, releaseDate, pagesCount, author) {
    super(name, releaseDate, pagesCount, author);
    this.type = "detective";
  }
}

// task_2

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }
  addBook(book, state) {
    if (book.state > 30) {
      return this.books.push(book);
    }
  }
  findBookBy(type, value) {
    let notFound = null;
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i][type] === value) {
        notFound = this.books[i];
      }
    }
    return notFound;
  }
  giveBookByName(bookName) {
    let notFound = this.findBookBy(bookName);
    let serialNumber = this.books.indexOf(notFound);
    if (serialNumber === -1) return null;
    return this.books.splice(serialNumber, 1)[0];
  }
}
