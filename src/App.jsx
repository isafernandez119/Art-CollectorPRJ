import "./App.css";
import Title from "./assets/Title";
import Search from "./assets/search";
import Preview from "./assets/preview";
import Featured from "./assets/Featured";
import { useState } from "react";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);
  return (
    <div className="App">
      <Title />
      <Search
        searchResults={searchResults}
        setSearchResults={setSearchResults}
      />
      <div className="content">
        <Preview
          searchResults={searchResults}
          setSelectedResult={setSelectedResult}
        />
        {selectedResult && <Featured selectedResult={selectedResult} />}
      </div>
    </div>
  );
}

export default App;
