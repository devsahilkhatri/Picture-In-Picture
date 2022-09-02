const videoEl = document.getElementById("video");
const button = document.getElementById("button");

// Promt to select media stream, pass to video element then play
const selectMediaStream = async function () {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoEl.srcObject = mediaStream;
    videoEl.onloadedmetadata = () => {
      videoEl.play();
    };
  } catch (error) {
    console.log("Woops, error here", error);
  }
};

button.addEventListener("click", async () => {
  // Disable Button
  button.disabled = true;
  // Start Picture in Picture
  await videoEl.requestPictureInPicture();
  // Reset Button
  button.disabled = false;
});

// On Load
selectMediaStream();
