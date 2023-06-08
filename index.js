const buttons = document.querySelectorAll(".btn");
//console.log(buttons)

buttons.forEach((e) => {
  e.addEventListener("click", (e) => {
    const checked = document.querySelector(".checked")
    if (checked) {
      checked.classList.remove("checked")
      checked.style.backgroundColor = ""
    }

    e.target.style.backgroundColor = "var(--orange)";
    e.target.classList.add("checked")


    document.querySelector("#submit").addEventListener("click", () => {
      document.querySelector(".rating-state").style.display = "none";
      document.querySelector(".success-message").style.display = "unset";

      let score = document.getElementById("score").innerHTML
      score += e.target.innerHTML
      document.getElementById("score").innerHTML = score
    })
  })
})
