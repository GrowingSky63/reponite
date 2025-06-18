import { createContext, useContext, useState } from 'react';

const ShopPaginationContext = createContext();

export function ShopPaginationProvider({ children }) {
  const [shop, setShop] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [limit] = useState(20);

  const changePage = async (page) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/v1/shop?page=${page}&limit=${limit}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setShop(data.data || []);
      setCurrentPage(data.page || page);
      setMaxPage(data.max_page || 1);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const goToNextPage = () => {
    if (currentPage < maxPage) {
      changePage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      changePage(currentPage - 1);
    }
  };

  const value = {
    shop,
    loading,
    currentPage,
    maxPage,
    limit,
    changePage,
    goToNextPage,
    goToPreviousPage
  };

  return (
    <ShopPaginationContext.Provider value={value}>
      {children}
    </ShopPaginationContext.Provider>
  );
}

export function useShopPagination() {
  const context = useContext(ShopPaginationContext);
  if (!context) {
    throw new Error("useShopPagination must be used within a ShopPaginationProvider");
  }
  return context;
}