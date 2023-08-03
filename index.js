function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    this.info = function () {
        return `${this.title}, ${this.author}, ${this.pages}, ${this.read},`       
    }
}

var marvelComics = new Book("The Avengers", "Stan Lee", "214", "I have read this")

console.log(marvelComics.info())