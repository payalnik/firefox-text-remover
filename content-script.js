// content-script.js

// A function to replace text content if it contains any blacklisted word.
function replaceBlacklistedText(blacklist) {
  // For performance, let's do this once after the DOM is loaded.
  // If you want to handle dynamically added elements, consider a MutationObserver.
  
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    null,
    false
  );
  
  let node;
  while ((node = walker.nextNode())) {
    const text = node.nodeValue;
    if (!text) continue;
    
    // Check if any blacklisted word is present
    for (let i = 0; i < blacklist.length; i++) {
      const word = blacklist[i];
      if (word && text.toLowerCase().includes(word.toLowerCase())) {
        // Replace entire text node with [REMOVED]
        node.nodeValue = "[REMOVED]";
        break; // No need to check other words once replaced
      }
    }
  }
}

// Load blacklist from storage and apply text replacement
browser.storage.local.get("blacklist").then((data) => {
  const blacklist = data.blacklist || [];
  replaceBlacklistedText(blacklist);
});
