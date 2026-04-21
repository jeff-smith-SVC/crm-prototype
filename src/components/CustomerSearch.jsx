import { useState } from 'react';

const filters = ['Recent Callers', 'VIP Members', 'Open Cases'];

export default function CustomerSearch() {
  const [query, setQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState([]);

  const toggleFilter = (filter) => {
    setActiveFilters((prev) =>
      prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]
    );
  };

  return (
    <div className="bg-white border border-[#dedede] rounded-lg p-5 flex flex-col gap-4">
      <span className="font-semibold text-[#212121] text-lg">Customer Search</span>

      <div className="flex gap-3 items-center">
        <div className="border border-[#dedede] rounded-[6px] flex gap-2 items-center px-3.5 py-3 flex-1">
          <div className="bg-[#707070] rounded-sm size-4" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, phone, email, or member ID..."
            className="text-sm outline-none w-full placeholder:text-[#707070]"
          />
        </div>
        <button className="bg-[#2961de] text-white font-semibold text-sm rounded-[6px] px-6 py-3 hover:bg-[#1e4fba] transition-colors cursor-pointer">
          Search
        </button>
      </div>

      <div className="flex gap-2 items-center">
        <span className="text-[#6b6b6b] text-xs font-medium">Quick filters:</span>
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => toggleFilter(filter)}
            className={`text-xs font-medium px-2.5 py-1 rounded-full cursor-pointer transition-colors ${
              activeFilters.includes(filter)
                ? 'bg-[#2961de] text-white'
                : 'bg-[#edf2ff] text-[#2961de] hover:bg-[#dde6ff]'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}
