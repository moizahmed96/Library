const title = document.querySelector(".title")
const author = document.querySelector(".author")
const pages = document.querySelector(".pages")
const read = document.querySelector(".read")
const submit = document.querySelector("submit")

const formField = document.querySelectorAll(".form-field")

console.log()

const main = document.querySelector(".main")

let myLibrary = [{ title: "avengers", author: "stan lee", pages: "21", read: "true" }];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary() {


    const checkFormField = () => {
        formField.forEach(field => {
            return field.textContent
        })
    }

    checkFormField()

    myLibrary.forEach(book => {
        console.log(book)
        main.append(book.title, book.author, book.pages, book.read)
    })
}

addBookToLibrary()