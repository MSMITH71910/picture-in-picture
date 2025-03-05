# Picture-in-Picture App

## Overview
The **Picture-in-Picture App** is a simple yet powerful web application that allows users to stream their screen content in a Picture-in-Picture (PiP) mode. This feature enables multitasking by displaying a floating, resizable video window that stays on top of other windows, making it ideal for presentations, tutorials, or watching videos while working on other tasks.

This project demonstrates the use of modern web APIs, such as the `getDisplayMedia` API for screen sharing and the `requestPictureInPicture` API for enabling Picture-in-Picture mode.

---

## Features
- **Screen Sharing:** Select and stream your screen or a specific application window.
- **Picture-in-Picture Mode:** Display the screen stream in a floating, resizable window.
- **Responsive Design:** Works seamlessly across devices and screen sizes.
- **User-Friendly Interface:** Minimalistic and intuitive design for ease of use.

---

## How It Works
1. **Select Media Stream:**
   - When the app loads, it prompts the user to select a screen or application window to share using the `getDisplayMedia` API.
   - The selected screen is displayed in a video element on the webpage.

2. **Enable Picture-in-Picture Mode:**
   - Click the "Start" button to enable Picture-in-Picture mode.
   - The video stream will appear in a floating window that stays on top of other applications.

3. **Exit Picture-in-Picture Mode:**
   - Click the "Stop" button or exit PiP mode directly from the floating window.

---
