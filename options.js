// options.js

const blacklistUl = document.getElementById("blacklist");
const newWordInput = document.getElementById("newWord");
const addWordBtn = document.getElementById("addWordBtn");

// Load current blacklist and display it
function loadBlacklist() {
  browser.storage.local.get("blacklist").then((data) => {
    const blacklist = data.blacklist || [];
    renderBlacklist(blacklist);
  });
}

// Render the blacklist items
function renderBlacklist(blacklist) {
  blacklistUl.innerHTML = "";
  blacklist.forEach((word, index) => {
    const li = document.createElement("li");
    
    const textSpan = document.createElement("span");
    textSpan.textContent = word + " ";
    
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => removeWord(index));
    
    li.appendChild(textSpan);
    li.appendChild(removeBtn);
    blacklistUl.appendChild(li);
  });
}

// Add a new word to the blacklist
function addWord() {
  const newWord = newWordInput.value.trim();
  if (!newWord) return;

  browser.storage.local.get("blacklist").then((data) => {
    const blacklist = data.blacklist || [];
    blacklist.push(newWord);
    browser.storage.local.set({ blacklist }).then(() => {
      newWordInput.value = "";
      renderBlacklist(blacklist);
    });
  });
}

// Remove a word by index
function removeWord(index) {
  browser.storage.local.get("blacklist").then((data) => {
    const blacklist = data.blacklist || [];
    blacklist.splice(index, 1);
    browser.storage.local.set({ blacklist }).then(() => {
      renderBlacklist(blacklist);
    });
  });
}

// Hook up event listeners
addWordBtn.addEventListener("click", addWord);
document.addEventListener("DOMContentLoaded", loadBlacklist);
