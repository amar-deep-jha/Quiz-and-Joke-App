const quizData = [
    {
      question: "What does HTML stand for?",
      a: "HyperText Markup Language",
      b: "HighText Machine Language",
      c: "HyperTool Markup Language",
      d: "None of these",
      correct: "a"
    },
    {
      question: "Which language is used for styling?",
      a: "HTML",
      b: "jQuery",
      c: "CSS",
      d: "XML",
      correct: "c"
    }
  ];
  
  let currentQuiz = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const answersEls = document.querySelectorAll("input[name='answer']");
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const d_text = document.getElementById("d_text");
  const submitBtn = document.getElementById("submit");
  const resultEl = document.getElementById("result");
  
  loadQuiz();
  
  function loadQuiz() {
    const currentData = quizData[currentQuiz];
    questionEl.innerText = currentData.question;
    a_text.innerText = currentData.a;
    b_text.innerText = currentData.b;
    c_text.innerText = currentData.c;
    d_text.innerText = currentData.d;
    answersEls.forEach(el => el.checked = false);
  }
  
  submitBtn.addEventListener("click", () => {
    const selected = Array.from(answersEls).find(el => el.checked)?.id;
    if (selected) {
      if (selected === quizData[currentQuiz].correct) {
        score++;
      }
      currentQuiz++;
      if (currentQuiz < quizData.length) {
        loadQuiz();
      } else {
        resultEl.innerHTML = `<h3>Your Score: ${score}/${quizData.length}</h3>`;
        submitBtn.disabled = true;
      }
    }
  });
  function getJoke() {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(res => res.json())
      .then(data => {
        document.getElementById("joke").innerText = `${data.setup} - ${data.punchline}`;
      })
      .catch(err => {
        document.getElementById("joke").innerText = "Failed to fetch joke.";
      });
  }
    