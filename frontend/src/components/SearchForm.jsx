const SearchForm = ({
  keyword,
  setKeyword,
  handleSearch,
  loading,
}) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-5">
        Search Buyer Leads
      </h2>

      <div className="flex flex-col md:flex-row gap-4">

        <input
          type="text"
          placeholder="Try: sound healing, yoga studio..."
          value={keyword}
          onChange={(e) =>
            setKeyword(e.target.value)
          }
          className="flex-1 border border-slate-300 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handleSearch}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl disabled:bg-gray-400 transition-all"
        >
          {loading
            ? "Searching..."
            : "Search Leads"}
        </button>
      </div>
    </div>
  );
};

export default SearchForm;