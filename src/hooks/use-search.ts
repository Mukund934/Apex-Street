import { useState, useMemo } from 'react';
import { useDebounce } from './use-debounce';

export function useSearch<T>(
  items: T[],
  searchFunction: (item: T, query: string) => boolean,
  delay: number = 300
) {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  
  const debouncedQuery = useDebounce(query, delay);

  const filteredItems = useMemo(() => {
    if (!debouncedQuery.trim()) {
      setIsSearching(false);
      return items;
    }
    
    setIsSearching(false);
    return items.filter(item => searchFunction(item, debouncedQuery));
  }, [items, debouncedQuery, searchFunction]);

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    if (newQuery !== debouncedQuery) {
      setIsSearching(true);
    }
  };

  return {
    query,
    debouncedQuery,
    filteredItems,
    isSearching,
    handleSearch,
    hasResults: filteredItems.length > 0,
    isEmpty: debouncedQuery.trim() !== '' && filteredItems.length === 0
  };
}