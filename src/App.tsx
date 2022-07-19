import { useState } from "react";
import "./app.scss";
import LocationDetails from "./components/location-details/location-details";
import SearchBar from "./components/search-bar/search-bar";

function App() {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <div className="app">
      <SearchBar setValue={setSearchValue} />
      <LocationDetails searchValue={searchValue} />
    </div>
  );
}

export default App;
