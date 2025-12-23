const parts = {
  backgrounds: [
    "blue50", "blue60", "blue70",
    "darkblue30", "darkblue50", "darkblue70",
    "green50", "green60", "green70",
    "grey40", "grey70", "grey80",
    "red50", "red60", "red70",
    "yellow50", "yellow60", "yellow70"
  ],

  ears: ["default", "tilt-backward", "tilt-forward"],

  eyes: ["default", "angry", "naughty", "panda", "smart", "star"],

  hair: ["default", "bang", "curls", "elegant", "fancy", "quiff", "short"],

  mouth: ["default", "astonished", "eating", "laugh", "tongue"],

  neck: ["default", "bend-backward", "bend-forward", "thick"],

  leg: ["default", "bubble-tea", "cookie", "game-console", "tilt-backward", "tilt-forward"],

  accessories: ["earings", "flower", "glasses", "headphone"]
};

function loadDefault() {
  for (let part in parts) {
    const img = document.getElementById(part);
    if (img) {
      img.src = `assets/${part}/${parts[part][0]}.png`;
    }
  }
  document.getElementById("nose").src = "assets/nose.png";
}

loadDefault();

const partsGrid = document.getElementById("partsGrid");

for (let part in parts) {
  const btn = document.createElement("button");
  btn.innerText = part.toUpperCase();
  btn.onclick = () => openOptions(part);
  partsGrid.appendChild(btn);
}

function openOptions(part) {
  document.getElementById("partsView").style.display = "none";
  document.getElementById("optionsView").style.display = "block";

  document.getElementById("optionTitle").innerText = part.toUpperCase();

  const optionsGrid = document.getElementById("optionsGrid");
  optionsGrid.innerHTML = "";

  parts[part].forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => {
      document.getElementById(part).src =
        `assets/${part}/${option}.png`;
    };
    optionsGrid.appendChild(btn);
  });
}

document.getElementById("backBtn").addEventListener("click", () => {
  document.getElementById("optionsView").style.display = "none";
  document.getElementById("partsView").style.display = "block";
});

document.getElementById("randomBtn").addEventListener("click", () => {
  for (let part in parts) {
    const randomIndex = Math.floor(Math.random() * parts[part].length);
    const randomOption = parts[part][randomIndex];
    document.getElementById(part).src =
      `assets/${part}/${randomOption}.png`;
  }
});

document.getElementById("downloadBtn").addEventListener("click", () => {
  html2canvas(document.getElementById("alpaca")).then(canvas => {
    const link = document.createElement("a");
    link.download = "alpaca.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
});