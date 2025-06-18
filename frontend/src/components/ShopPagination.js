import { useShopPagination } from "../context/ShopPaginationContext";

export default function ShopPagination() {
  const { currentPage, maxPage, changePage, goToNextPage, goToPreviousPage } = useShopPagination();

  const renderPageNumbers = () => {
    const pages = [];
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(maxPage, currentPage + 2);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          className={`btn ${i === currentPage ? 'btn-primary' : 'btn-outline-primary'} mx-1`}
          onClick={() => changePage(i)}
        >
          {i}
        </button>
      );
    }

    return pages;
  };

  if (maxPage <= 1) return null;

  return (
    <div className="d-flex justify-content-center align-items-center mt-4">
      <button
        className="btn btn-outline-secondary me-2"
        onClick={goToPreviousPage}
        disabled={currentPage === 1}
      >
        Anterior
      </button>
      
      {renderPageNumbers()}
      
      <button
        className="btn btn-outline-secondary ms-2"
        onClick={goToNextPage}
        disabled={currentPage === maxPage}
      >
        Próximo
      </button>
    </div>
  );
}