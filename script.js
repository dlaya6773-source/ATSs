function analyzeResume() {

  let score = document.getElementById("score");

  let randomScore = Math.floor(Math.random() * 31) + 70;

  score.innerHTML = randomScore + "%";

  const skills = [
    "React.js",
    "Node.js",
    "MongoDB",
    "JavaScript",
    "Express.js",
    "Communication",
    "Problem Solving"
  ];

  const suggestions = [
    "Add more quantified achievements.",
    "Improve ATS keywords.",
    "Add internship experience.",
    "Include certifications.",
    "Improve resume formatting."
  ];

  let skillsList = document.getElementById("skills");
  skillsList.innerHTML = "";

  skills.forEach(skill => {
    let li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
  });

  let suggestionList = document.getElementById("suggestions");
  suggestionList.innerHTML = "";

  suggestions.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    suggestionList.appendChild(li);
  });

  alert("Resume analyzed successfully!");
}