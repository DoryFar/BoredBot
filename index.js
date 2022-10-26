/**
Challenge: 

- Add some styling! Be creative, play with layout a bit
  (Spoiler: I'm going to use a single-column flexbox layout)
  add some color, grab a font from Google fonts - whatever
  you'd like!
*/
function Button() {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
        document.querySelector("h4").textContent = data.activity
        document.querySelector("h1").textContent = "💃🏻 HappyBot 🕺🏻"
    })
}
