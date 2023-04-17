import { useEffect, useState } from "react";
import "../App.css";

function Search({ searchResults, setSearchResults }) {
  const [classifications, setClassifications] = useState([]);
  const [Century, setCentury] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedClassification, setSelectedClassification] = useState("");
  const [selectedCentury, setSelectedCentury] = useState("");

  async function fetchClassifications() {
    const resp = await fetch(
      "https://api.harvardartmuseums.org/classification?apikey=3f18c8a7-e292-4dc4-ad72-55155fc9cb19&size=100"
    );
    const info = await resp.json();
    setClassifications(info.records);
  }

  async function fetchCentury() {
    const resp = await fetch(
      "https://api.harvardartmuseums.org/century?apikey=3f18c8a7-e292-4dc4-ad72-55155fc9cb19&size=100"
    );
    const info = await resp.json();
    setCentury(info.records);
  }

  async function fetchQuery() {
    const resp = await fetch(
      "https://api.harvardartmuseums.org/object?apikey=3f18c8a7-e292-4dc4-ad72-55155fc9cb19"
    );
    const info = await resp.json();
    setSearchResults(info.records);
  }
  async function fetchSearchResults(e) {
    e.preventDefault();
    try {
      console.log("hi");
      const response = await fetch(
        `https://api.harvardartmuseums.org/object?apikey=3f18c8a7-e292-4dc4-ad72-55155fc9cb19&classification=${selectedClassification}&century${selectedCentury}&query${query}`
      );
      const info = await response.json();
      setSearchResults(info.records);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchClassifications();
    fetchCentury();
    fetchQuery();
  }, []);
  console.log(searchResults);
  // console.log(selectedClassification, selectedCentury, query);

  return (
    <div>
      <p>Query</p>

      <form onSubmit={fetchSearchResults}>
        <input
          type="text"
          name="query"
          id="query-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <label>Classifications: {classifications.length} </label>
        <select
          name="classifications"
          id="classifications"
          value={selectedClassification}
          onChange={(e) => setSelectedClassification(e.target.value)}
        >
          {classifications.map((classification) => (
            <option key={classification.id}>{classification.name}</option>
          ))}
        </select>
        <label>Century: {Century.length} </label>
        <select
          name="Century"
          id="Century"
          value={selectedCentury}
          onChange={(e) => setSelectedCentury(e.target.value)}
        >
          {Century.map((Century) => (
            <option key={Century.id}>{Century.name}</option>
          ))}
        </select>
        <button>search</button>
      </form>
    </div>
  );
}

export default Search;
