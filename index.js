const addBookButton = document.querySelector(".add-book-button")
const section = document.querySelector(".section.form")
const addBookForm = document.querySelector(".add-book-form")
const title = document.querySelector(".title")
const author = document.querySelector(".author")
const pages = document.querySelector(".pages")
const submit = document.querySelector(".submit")

const formField = document.querySelectorAll(".form-field")

const main = document.querySelector(".main")

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary() {

    addBookButton.addEventListener("click", () => {
        if (section.style.display == "") {
            section.style.display = "block"
        } else {
            section.style.display = ""
        }
    })

    const displayBook = () => {
        console.log(myLibrary)
        myLibrary.forEach((book, index, array) => {
            const newDiv = document.createElement("div")
            newDiv.className = "book"

            const newPara = document.createElement("p")
            newPara.textContent = `${book.title} | ${book.author} | ${book.pages}`
            newDiv.append(newPara)

            const readStatus = document.createElement("button")
            readStatus.className = "read-status"
            readStatus.textContent = "Read"
            readStatus.setAttribute("id", `${index}`)
            newDiv.appendChild(readStatus)

            const deleteButton = document.createElement("button")
            deleteButton.className = "delete-button"
            deleteButton.textContent = "Delete"
            deleteButton.setAttribute("id", `${index}`)
            newDiv.appendChild(deleteButton)

            main.appendChild(newDiv)

        })
    }

    document.addEventListener("click", (e) => {
        if (e.target.className == "read-status") {
            e.target.style.backgroundColor = "green"
        }
    })

    document.addEventListener("click", (e) => {
        if (e.target.className == "delete-button") {
            var bookId = e.target.id
            myLibrary.filter((book, index) => {
                if (index == bookId) {
                    myLibrary.splice(index, 1)
                    e.target.parentNode.remove()
                    console.log(myLibrary)
                }
            })
        }
    })

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
                addBookForm.reset()
                displayBook()

            }
        })
    }

    addBook()

}

addBookToLibrary()