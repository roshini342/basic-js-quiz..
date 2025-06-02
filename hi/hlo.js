const s = [
  {
    q: "How many planets in the universe??",
    o: [3, 4, 8, 9],
    a: 8
  },
  {
    q: "How many planets in the universe??",
    o: [3, 4, 8, 9],
    a: 8
  },
  {
    q: "What is the capital of France?",
    o: ["Paris", "London", "Berlin", "Rome"],
    a: "Paris"
  },
  {
    q: "Which is the largest ocean?",
    o: ["Atlantic", "Indian", "Arctic", "Pacific"],
    a: "Pacific"
  }
];

function hello() {
  const ques = document.getElementById("question");
  let html = "";

  for (let i = 0; i < s.length; i++) {
    const qo = s[i];
    html += `<h2>${qo.q}</h2>`;

    qo.o.forEach(opt => {
      html += `<input type="radio" name="q${i}" value="${opt}">${opt}<br>`;
    });
  }

  html += `<button onclick="checkAnswers()">Submit Answers</button>`;

  ques.innerHTML = html;
}

function checkAnswers() {
  let m = 0; 

  s.forEach((qo, index) => {
    const check = document.querySelector(`input[name="q${index}"]:checked`);

    if (check) {
      if (check.value === qo.a.toString()) {
        m++;
      }
    }
  });
document.getElementById("score").innerHTML=`your score${m}`}

