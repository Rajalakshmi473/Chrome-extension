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
  
  document.getElementById('removeSiteButton').addEventListener('click', () => {
    const site = document.getElementById('siteUrlInput').value;
    handleRemoveSite(site);
  });