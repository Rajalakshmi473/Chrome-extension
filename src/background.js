chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'REMOVE_SITE') {
    handleRemoveSite(message.site);
  }

  if (message.type === 'GET_BLOCKLIST') {
    chrome.storage.local.get('blocklist', (result) => {
      sendResponse(result.blocklist || []);
    });
    return true;  // Keep the message channel open for asynchronous response
  }

  if (message.type === 'SET_BLOCKLIST') {
    chrome.storage.local.set({ blocklist: message.blocklist }, () => {
      sendResponse({ success: true });
    });
    return true;  // Keep the message channel open for asynchronous response
  }
});

const handleRemoveSite = (site) => {
  if (chrome && chrome.storage && chrome.storage.local) {
    chrome.storage.local.get('blocklist', (result) => {
      const newBlocklist = result.blocklist.filter(item => item !== site);
      chrome.storage.local.set({ blocklist: newBlocklist }, () => {
        console.log('Blocklist updated');
      });
    });
  } else {
    console.error('Chrome storage API is not available');
  }
};
