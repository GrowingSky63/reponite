import { createContext, useContext, useState, useCallback } from 'react';

const SkinPaginationContext = createContext();

export const useSkinsPagination = () => {
  const context = useContext(SkinPaginationContext);
  if (!context) {
    throw new Error('useSkinsPagination must be used within a SkinPaginationProvider');
  }
  return context;
};

export const SkinPaginationProvider = ({ children }) => {
  const [skins, setSkins] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const [typesLoading, setTypesLoading] = useState(false);

  const fetchTypes = useCallback(async () => {
    setTypesLoading(true);
    try {
      const response = await fetch('/api/v1/skins/types');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      if (data.status !== 200) {
        throw new Error(`Error: ${data.error}`);
      }
      
      setTypes(data.data);
    } catch (error) {
      throw error;
    } finally {
      setTypesLoading(false);
    }
  }, []);

  const changePage = useCallback(async (page, type = selectedType) => {
    if (page < 1 || (page > maxPage && maxPage > 0)) return;
    
    setLoading(true);
    try {
      const typeParam = type ? `&type=${encodeURIComponent(type)}` : '';
      const response = await fetch(`/api/v1/skins?page=${page}&limit=20${typeParam}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      if (data.status !== 200) {
        throw new Error(`Error: ${data.error}`);
      }
      
      setSkins(data.data);
      setCurrentPage(data.page);
      setMaxPage(data.max_page);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  }, [maxPage, selectedType]);

  const changeType = useCallback(async (type) => {
    setSelectedType(type);
    setCurrentPage(1);
    await changePage(1, type);
  }, [changePage]);

  return (
    <SkinPaginationContext.Provider 
      value={{
        skins,
        currentPage,
        maxPage,
        loading,
        types,
        selectedType,
        typesLoading,
        changePage,
        changeType,
        fetchTypes
      }}
    >
      {children}
    </SkinPaginationContext.Provider>
  );
};