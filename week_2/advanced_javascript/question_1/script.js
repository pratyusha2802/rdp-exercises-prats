document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".btns")

  button.addEventListener("click", () => {
    button.classList.add("clicked") // Apply the new style when clicked
    button.textContent = "Saved" // Change the button text
  })
})
