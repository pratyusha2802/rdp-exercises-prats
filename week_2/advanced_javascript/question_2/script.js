document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".ques-label button")

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const parentQues = this.closest(".ques");
      const answer = parentQues.querySelector(".ques-ans");
  
      answer.classList.toggle("hidden");
  
      // Change FontAwesome icon based on answer visibility
      const icon = this.querySelector("i");
      if (answer.classList.contains("hidden")) {
        icon.classList.remove("fa-chevron-up");
        icon.classList.add("fa-chevron-down");
      } else {
        icon.classList.remove("fa-chevron-down");
        icon.classList.add("fa-chevron-up");
      }
    });
  });
})
