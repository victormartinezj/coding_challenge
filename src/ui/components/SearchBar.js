const SearchBar = ({
    filterUniversities,
    setFilterUniversities,
    sortingElements,
    setSortingElements,
}) => {
    return (
        <div className="bg-blue-700 p-4 rounded mb-6 flex justify-between items-center flex-wrap  text-white ">
            <div>
                Search:{" "}
                <input
                    className="rounded px-4 py-1 text-blue-600"
                    type="text"
                    id="search-university"
                    value={filterUniversities}
                    onChange={e => setFilterUniversities(e.target.value)}
                />
            </div>
            <div className="space-x-2 w-14 py-2">
                <button
                    className={`rounded py-2 px-2 border border-gray-200 ${
                        sortingElements === "order"
                            ? "bg-white text-blue-600"
                            : ""
                    } `}
                    onClick={() => {
                        setSortingElements("order");
                    }}>
                    A-Z
                </button>
                <button
                    className={`rounded py-2 px-2 border border-gray-200 ${
                        sortingElements === "reverse"
                            ? "bg-white text-blue-600"
                            : ""
                    } `}
                    onClick={() => {
                        setSortingElements("reverse");
                    }}>
                    Z-A
                </button>
            </div>
        </div>
    );
};
export default SearchBar;
