const AddSiteForm = ({ onAdd }) => {
    const [site, setSite] = React.useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onAdd(site);
      setSite('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={site}
          onChange={(e) => setSite(e.target.value)}
          placeholder="Enter site URL"
          id="site-url"   // Add id attribute
          name="site-url" // Add name attribute
        />
        <button type="submit">Add Site</button>
      </form>
    );
  };
  