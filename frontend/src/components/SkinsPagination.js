import { useSkinsPagination } from "../context/SkinsPaginationContext";

export default function SkinsPagination() {
  const { currentPage, maxPage, changePage } = useSkinsPagination();

  const handlePageChange = async (page) => {
    try {
      await changePage(page);
    } catch (error) {
      console.error('Error changing page:', error);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(maxPage, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
          <button 
            className="page-link" 
            onClick={() => handlePageChange(i)}
            disabled={currentPage === i}
          >
            {i}
          </button>
        </li>
      );
    }

    return pages;
  };

  if (maxPage <= 1) return null;

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button 
            className="page-link" 
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        
        {renderPageNumbers()}
        
        <li className={`page-item ${currentPage === maxPage ? 'disabled' : ''}`}>
          <button 
            className="page-link" 
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === maxPage}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}