const correctAnswers = ["B", "B", "B", "B"];
const form = document.querySelector(".quiz-form");
const getResultSelector = document.querySelector(".result"); // Get element from DOM

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  // check answers

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });
  //show result on page
  scrollTo(0, 0); // Scroll up to the beginning to see the score
  getResultSelector.classList.remove("d-none"); // Remove class "d-info"
  //getResultSelector.querySelector("span").textContent = "${score}$%"

  let output = 0;
  const timer = setInterval(() => {
    document.getElementById("resultText").innerHTML = `${output} %`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 40);
});
