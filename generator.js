let names = {};

fetch('names.json')
  .then(response => response.json())
  .then(data => {
    names = data;
  })
  .catch(error => {
    console.error("Error loading names:", error);
  });

function generateNames(language, gender) {
  const nameList = document.getElementById("name-list");
  
  nameList.innerHTML = "";

  if (!names[language] || !names[language][gender]) {
    nameList.innerHTML = "<li>No names available for this selection.</li>";
    return;
  }

  const allNames = names[language][gender];
  const selectedNames = [];

  while (selectedNames.length < 10 && selectedNames.length < allNames.length) {
    const randomName = allNames[Math.floor(Math.random() * allNames.length)];
    if (!selectedNames.includes(randomName)) {
      selectedNames.push(randomName);
    }
  }

  selectedNames.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    nameList.appendChild(li);
  });
}
