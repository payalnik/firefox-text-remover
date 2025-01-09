// background.js
// Initialize default blacklist if it's not set yet.
browser.runtime.onInstalled.addListener(async ({ reason }) => {
  if (reason === "install") {
    // Set a default blacklist
    await browser.storage.local.set({ blacklist: ["badword", "example"] });
  }
});
