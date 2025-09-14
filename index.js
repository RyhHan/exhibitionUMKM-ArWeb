document.addEventListener("DOMContentLoaded", (event) => {
  const modelViewer = document.querySelector("model-viewer");
  const modelTitle = document.getElementById("model-title");
  const modelDescription = document.getElementById("model-description");

  const modelsData = {
    "oiiaioooooiai_cat.glb": {
      title: "Kucing Oiiaioooooia",
      description:
        "Kucing dengan quotes Oiiaioooooia Oiiaioooooia Oiiaioooooia Oiiaioooooia Oiiaioooooia",
    },
    "catSigma.glb": {
      title: "Kucing Sigma",
      description:
        "beliau adalah kucing sigma, kucing yang sangat mandiri dan tidak memerlukan perhatian dari manusia.",
    },
    "iron_man.glb": {
      title: "Iron Man",
      description:
        "NOOOOOOOO dia sudah mati, tapi entah kenapa dia muncul lagi jadi dr.doom, hmmmmm menarik!!!",
    },
    "ghost.glb": {
      title: "Hantu",
      description: "Ihhhhhh Takuttttnyeeeeeeeeee",
    },
    "shiba.glb": {
      title: "Anjing Shiba",
      description: "Anjing shiba yang sangat lucu dan menggemaskan.",
    },
    "hitler.glb": {
      title: "Hitler",
      description: "Ini adalah model 3D dari Hitler.",
    },
    "coklat-thagen.glb": {
      title: "Coklat Thagen",
      description: "Coklat Thagen yang sangat lezat dan nikmat.",
    },
    "taro-thagen.glb": {
      title: "Taro Thagen",
      description: "Taro Thagen yang sangat lezat dan nikmat.",
    },
    "resident_evil_tyrant.glb": {
      title: "Resident Evil Tyrant",
      description: "Model 3D dari Resident Evil Tyrant.",
    },
    "GatotKaca.glb": {
      title: "Gatot Kaca",
      description: "Model 3D dari Gatot Kaca.",
    },
    "3DModel.glb": {
      title: "3D Model",
      description: "Ini adalah model 3D generik.",
    },
    "sambal.glb": {
      title: "Sambal",
      description: "Sambal yang sangat pedas dan menggugah selera.",
    },
  };

  const urlParams = new URLSearchParams(window.location.search);
  let modelName = urlParams.get("model");

  if (!modelName || !modelsData[modelName]) {
    modelName = "oiiaioooooiai_cat.glb";
  }

  const currentModel = modelsData[modelName];

  modelViewer.src = `./models/${modelName}`;
  modelTitle.textContent = currentModel.title;
  modelDescription.textContent = currentModel.description;
});

const modelViewer = document.getElementById("mv");
const bar = document.querySelector("#progress-bar #bar");
const progressContainer = document.getElementById("progress-bar");

modelViewer.addEventListener("progress", (event) => {
  const progress = event.detail.totalProgress * 100;
  bar.style.width = `${progress}%`;
});

modelViewer.addEventListener("load", () => {
  progressContainer.style.display = "none";
});
