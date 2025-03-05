const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
      videoElement.hidden = false; // Show video element
    };
  } catch (error) {
    alert("Error: Unable to access media stream. Please try again.");
  }
}

button.addEventListener('click', async () => {
  if (!document.pictureInPictureElement) {
    // Start Picture-in-Picture
    try {
      button.disabled = true;
      button.textContent = "Loading...";
      await videoElement.requestPictureInPicture();
      button.textContent = "Stop";
    } catch (error) {
      alert("Error: Picture-in-Picture failed. Please try again.");
    } finally {
      button.disabled = false;
    }
  } else {
    // Exit Picture-in-Picture
    try {
      await document.exitPictureInPicture();
      button.textContent = "Start";
    } catch (error) {
      alert("Error: Unable to exit Picture-in-Picture.");
    }
  }
});

// On Load
selectMediaStream();