export default function SearchBar() {
  return (
    <div id="search-container">
      <h1 id="search__title">IP Adress Tracker</h1>
      <form id="search__form">
        <input
          type="search"
          id="search__input"
          name="q"
          placeholder="Search for any IP address or domain"
        />
        <button id="search__button">Search</button>
      </form>
    </div>
  );
}
