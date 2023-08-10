const addBookButton = document.querySelector(".add-book-button")
const title = document.querySelector(".title")
const author = document.querySelector(".author")
const pages = document.querySelector(".pages")
const read = document.querySelector(".read")
const submit = document.querySelector(".submit")

const formField = document.querySelectorAll(".form-field")

const main = document.querySelector(".main")

let myLibrary = [];

function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
}

function addBookToLibrary() {

    const displayBook = () => {
        console.log(myLibrary)
        myLibrary.forEach((book, index, array) => {
            const newDiv = document.createElement("div")
            newDiv.className = "book"
            newDiv.setAttribute("id", `${index}`)
            newDiv.textContent = `${book.title} | ${book.author} | ${book.pages}`
            main.appendChild(newDiv)
        })
    }

    const addBook = () => {
        submit.addEventListener("click", (e) => {
            e.preventDefault()
            if (title.value == "" || author.value == "" || pages.value == "") {
                alert("Please enter all the details about your book!")
            } else {
                const newBook = new Book(title.value, author.value, pages.value)
                myLibrary.push(newBook)
                main.textContent = ""
                displayBook()
            }
        })
    }

    addBook()


}

addBookToLibrary()