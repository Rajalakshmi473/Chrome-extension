// Example of how you might call handleRemoveSite from a content script
chrome.runtime.sendMessage({ type: 'REMOVE_SITE', site: 'example.com' });
