document.addEventListener("DOMContentLoaded", function () {
  const dropdownInput = document.getElementById("dropdown-input")
  const dropdownList = document.querySelector(".dropdown-list")

  dropdownInput.addEventListener("focus", function () {
    dropdownList.style.display = "block"
  })

  dropdownInput.addEventListener("blur", function () {
    dropdownList.style.display = "none"
  })
})
