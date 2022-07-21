import { useState } from "react";
import "./app.scss";
import LocationDetails from "./components/location-details/location-details";
import Map from "./components/map/map";
import SearchBar from "./components/search-bar/search-bar";

function App() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [langAndLat, setLangAndLat] = useState<Array<number>>([]);

  return (
    <div className="app">
      <SearchBar setValue={setSearchValue} />
      <LocationDetails data={{ searchValue, setLangAndLat }} />
      {langAndLat.length > 0 ? (
        <Map position={langAndLat} />
      ) : (
        <h1>Enter Details</h1>
      )}
    </div>
  );
}

export default App;
