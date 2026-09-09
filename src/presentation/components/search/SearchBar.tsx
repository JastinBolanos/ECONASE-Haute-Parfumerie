import React from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, onClear }) => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative flex items-center">
        <label htmlFor="search-input" className="sr-only">
          Buscar fragancia
        </label>
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#8A8177]">
          <Search className="w-4 h-4" strokeWidth={1.75} />
        </div>
        <input
          id="search-input"
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Buscar en ECONASE (notas aromáticas, acordes, ingredientes)..."
          className="w-full pl-11 pr-11 py-3 bg-white border border-[#DDD7CD] rounded-full text-sm text-[#1A1918] placeholder-[#9E968D] shadow-xs hover:border-[#BFB6A8] focus:border-[#1A1918] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#1A1918] transition-all duration-150"
        />
        {value && (
          <button
            id="clear-search-btn"
            type="button"
            onClick={onClear}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#8A8177] hover:text-[#1A1918] transition-colors cursor-pointer"
            aria-label="Limpiar búsqueda"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
