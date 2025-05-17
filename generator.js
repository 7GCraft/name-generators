const syllables = ["ka", "lo", "vi", "dra", "zen", "ruk", "shi", "tor", "mel", "an", "qu", "xan"];

function generateName() {
  const name = Array.from({ length: 3 }, () => syllables[Math.floor(Math.random() * syllables.length)])
    .join('');
  const capitalised = name.charAt(0).toUpperCase() + name.slice(1);
  document.getElementById("name").innerText = capitalised;
}
