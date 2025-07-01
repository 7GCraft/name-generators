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

  const langData = names[language];
  if (!langData) {
    nameList.innerHTML = "<li>No names available for this selection.</li>";
    return;
  }

  const selectedNames = [];

  if (langData.type === "composite") {
    const surnames = langData["surname"];
    const givenNames = langData[gender];

    if (!surnames || !givenNames) {
      nameList.innerHTML = `<li>No composite names available for ${language} ${gender}.</li>`;;
      return;
    }

    while (selectedNames.length < 10 && selectedNames.length < surnames.length * givenNames.length) {
      const surname = surnames[Math.floor(Math.random() * surnames.length)];
      const givenName = givenNames[Math.floor(Math.random() * givenNames.length)];
      const fullName = surname + " " + givenName;

      if (!selectedNames.includes(fullName)) {
        selectedNames.push(fullName);
      }
    }

  } else if (langData.type === "simple") {
    const allNames = langData[gender];

    if (!allNames) {
      nameList.innerHTML = `<li>No simple names available for ${language} ${gender}.</li>`;
      return;
    }

    while (selectedNames.length < 10 && selectedNames.length < allNames.length) {
      const randomName = allNames[Math.floor(Math.random() * allNames.length)];
      if (!selectedNames.includes(randomName)) {
        selectedNames.push(randomName);
      }
    }
  }

  selectedNames.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    nameList.appendChild(li);
  });
}

