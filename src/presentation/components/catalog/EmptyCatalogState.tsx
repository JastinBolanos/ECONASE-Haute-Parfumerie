import React from 'react';
import { SearchX } from 'lucide-react';

interface EmptyCatalogStateProps {
  searchQuery: string;
  onReset: () => void;
}

export const EmptyCatalogState: React.FC<EmptyCatalogStateProps> = ({
  searchQuery,
  onReset,
}) => {
  return (
    <div
      id="no-results-box"
      className="text-center py-16 px-6 max-w-md mx-auto bg-white border border-[#E8E4DC] rounded-2xl"
    >
      <div className="w-12 h-12 rounded-full bg-[#F4F1EA] text-[#80766D] mx-auto flex items-center justify-center mb-4">
        <SearchX className="w-6 h-6" strokeWidth={1.5} />
      </div>
      <h3 className="font-serif-luxury text-2xl font-medium text-[#1A1918] mb-2">
        Sin resultados
      </h3>
      <p className="text-sm text-[#6E665E] mb-6">
        No encontramos fragancias que coincidan con &ldquo;{searchQuery}&rdquo;.
      </p>
      <button
        id="reset-search-btn"
        type="button"
        onClick={onReset}
        className="px-5 py-2.5 rounded-full border border-[#1A1918] text-xs uppercase tracking-wider text-[#1A1918] hover:bg-[#1A1918] hover:text-white transition-colors cursor-pointer"
      >
        Ver catálogo completo
      </button>
    </div>
  );
};
