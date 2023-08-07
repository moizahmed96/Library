const title = document.querySelector(".title")
const author = document.querySelector(".author")
const pages = document.querySelector(".pages")
const read = document.querySelector(".read")
const submit = document.querySelector(".submit")

const formField = document.querySelectorAll(".form-field")

const main = document.querySelector(".main")

let myLibrary = [{ title: "avengers", author: "stan lee", pages: "21"}];

function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
}

function addBookToLibrary() {


    const checkFormField = () => {
            submit.addEventListener("click", (e) => {
                if (title.value == "" || author.value == "" || pages.value == "") {
                    alert("Please enter all the details about your book!")
                } else {
                    const newBook = new Book(title.value,  author.value,  pages.value)
                    console.log(newBook)
                }
            })
    }

    checkFormField()
}

addBookToLibrary()