import React, { useState, useEffect } from 'react';

const BlocklistManager = () => {
  const [blocklist, setBlocklist] = useState([]);
  const [newSite, setNewSite] = useState('');

  useEffect(() => {
    fetchBlocklist();
  }, []);

  const fetchBlocklist = async () => {
    try {
      const response = await fetch('/blocklist-data.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setBlocklist(data.blocklist);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Failed to fetch blocklist data:', error);
    }
  };

  const handleAddSite = () => {
    if (newSite && !blocklist.includes(newSite)) {
      const newBlocklist = [...blocklist, newSite];
      setBlocklist(newBlocklist);
      setNewSite('');
      chrome.storage.local.set({ blocklist: newBlocklist });
    }
  };

  const handleRemoveSite = (site) => {
    const newBlocklist = blocklist.filter(item => item !== site);
    setBlocklist(newBlocklist);
    chrome.storage.local.set({ blocklist: newBlocklist });
  };

  return (
    <div>
      <h2>Blocklist Manager</h2>
      <ul>
        {blocklist.map((site, index) => (
          <li key={index}>
            {site}
            <button onClick={() => handleRemoveSite(site)}>Remove</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newSite}
        onChange={(e) => setNewSite(e.target.value)}
        placeholder="Add new site"
        id="site-url"   // Add id attribute
        name="site-url" // Add name attribute
      />
      <button onClick={handleAddSite}>Add Site</button>
    </div>
  );
};

export default BlocklistManager;
