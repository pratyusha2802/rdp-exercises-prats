document.addEventListener("DOMContentLoaded", function () {
  const categoryButtons = document.querySelectorAll(".category-button")
  const categories = document.querySelectorAll(".category")

  categoryButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const categoryToShow = this.getAttribute("data-category")

      categories.forEach((category) => {
        if (category.classList.contains(categoryToShow)) {
          category.classList.remove("hide")
        } else {
          category.classList.add("hide")
        }
      })
    })
  })
})
