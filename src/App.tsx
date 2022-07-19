import { useState } from "react";
import "./app.scss";
import SearchBar from "./components/search-bar/search-bar";

function App() {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <div className="app">
      <SearchBar setValue={setSearchValue} />
    </div>
  );
}

export default App;
