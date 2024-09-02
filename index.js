document.addEventListener("DOMContentLoaded", ()=> {
  renderBooks()
  fetchBooks()
})


function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!


    fetch('https://anapioficeandfire.com/api/books')
    .then(res => res.json())
    .then(data => data.forEach(book => {
      console.log(book)
    }))
}

function renderBooks(book) {
  const div = document.createElement("div")
  const p = document.createElement("p")
  // p.innerText = book.name
  div.appendChild(p)
}

// renderBooks()

// function renderBooks(book) {
//   const unorderedList = document.getElementById("list");
//   const li = document.createElement("li");
//   li.textContent = book["name"]
//   li.addEventListener("click", () => showBookCard(book))
//   unorderedList.appendChild(li)
//   }

//   function showBookCard(book) {
//     const showPanel = document.getElementById("show-panel")
//     showPanel.innerHTML = ""
//     const coverImage = document.createElement("img")
//     coverImage.src = book.img_url

//     const description = document.createElement("h1")
//     description.textContent = book.description

//     const button = document.createElement("button")
//     button.textContent = "Like"
//     button.addEventListener("click", () => likeBook(book))

//     const usersList = document.createElement("ul")

//     book.users.forEach(user => {
//         const userLi = document.createElement("li");
//         userLi.textContent = user.username;
//         usersList.appendChild(userLi);
//     })

//     showPanel.appendChild(coverImage)
//     showPanel.appendChild(description)
//     showPanel.appendChild(button)
//     showPanel.appendChild(usersList)
//   }

//   function likeBook(book) {
//     book.users.push(userName)
//     fetch(`http://localhost:3000/books/${book.id}`, {
//     method: "PATCH",
//     headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json"
//     },
//     body: JSON.stringify({users: book.users})
//     })
//     .then(res => res.json())
//     .then(likedBook => showBookCard(likedBook));
//     }