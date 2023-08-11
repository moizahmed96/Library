const addBookButton = document.querySelector(".add-book-button")
const section = document.querySelector(".section.form")
const addBookForm = document.querySelector(".add-book-form")
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

    addBookButton.addEventListener("click", () => {
        if (section.style.display == "") {
            section.style.display = "block"
            console.log(section.style.display)
        } else {
            section.style.display = ""
        }
    })

    const displayBook = () => {
        console.log(myLibrary)
        myLibrary.forEach((book, index, array) => {
            const newDiv = document.createElement("div")
            newDiv.className = "book"
            newDiv.setAttribute("id", `${index}`)
            newDiv.textContent = `${book.title} | ${book.author} | ${book.pages}`

            const deleteButton = document.createElement("button")
            deleteButton.className = "delete-button"
            deleteButton.textContent = "Delete"

            newDiv.appendChild(deleteButton)

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
                section.style.display = ""
                displayBook()
            }
        })
    }

    addBook()


}

addBookToLibrary()