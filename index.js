const buttons = document.querySelectorAll(".btn");

buttons.forEach((e) => {
  e.addEventListener("click", (e) => {
    const checked = document.querySelector(".checked")
    if (checked) {
      checked.classList.remove("checked")
      checked.style.backgroundColor = ""
    }

    e.target.style.backgroundColor = "var(--orange)";
    e.target.classList.add("checked")

    let score = document.getElementById("score").innerHTML
    score = e.target.innerHTML
    document.getElementById("score").innerHTML = score
  })
})

document.querySelector("#submit").addEventListener("click", () => {
  let checked = document.querySelector(".checked")
  console.log(checked)
  if (!checked) {
    alert("Please vote before submit!")
  }

  document.querySelector(".rating-state").style.display = "none";
  document.querySelector(".success-message").style.display = "unset";
})

document.querySelector("#return").addEventListener("click", () => {
  document.querySelector(".rating-state").style.display = "unset";
  document.querySelector(".success-message").style.display = "none";
})
