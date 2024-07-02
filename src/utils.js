// src/utils.js

export const getBlocklist = () => {
    return new Promise((resolve) => {
      chrome.storage.local.get('blocklist', (result) => {
        resolve(result.blocklist || []);
      });
    });
  };
  
  export const addToBlocklist = (site) => {
    return new Promise((resolve) => {
      chrome.storage.local.get('blocklist', (result) => {
        const blocklist = result.blocklist || [];
        blocklist.push(site);
        chrome.storage.local.set({ blocklist }, () => resolve());
      });
    });
  };
  
  export const removeFromBlocklist = (site) => {
    return new Promise((resolve) => {
      chrome.storage.local.get('blocklist', (result) => {
        const blocklist = result.blocklist || [];
        const newBlocklist = blocklist.filter((s) => s !== site);
        chrome.storage.local.set({ blocklist: newBlocklist }, () => resolve());
      });
    });
  };
  
  export const setEnabled = (enabled) => {
    return new Promise((resolve) => {
      chrome.storage.local.set({ enabled }, () => resolve());
    });
  };  