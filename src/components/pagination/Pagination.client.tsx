import React from 'react';
import './Pagination.css'; // Add a CSS file for pagination styles

const Pagination: React.FC<{
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}> = ({ currentPage, totalPages, onPageChange }) => {
  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handlePageSelect = (page: number) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pages = [];

    // Display the first page, ellipsis before current, and neighboring pages
    if (currentPage > 2) {
      pages.push(
        <button key={1} onClick={() => handlePageSelect(1)}>
          1
        </button>
      );
      if (currentPage > 3) pages.push(<span key="start-dots">...</span>);
    }

    // Display current page and its neighbors
    for (let i = Math.max(1, currentPage - 1); i <= Math.min(currentPage + 1, totalPages); i++) {
      pages.push(
        <button
          key={i}
          className={`page-button ${currentPage === i ? 'active' : ''}`}
          onClick={() => handlePageSelect(i)}
        >
          {i}
        </button>
      );
    }

    // Display ellipsis after current and last page if necessary
    if (currentPage < totalPages - 2) {
      if (currentPage < totalPages - 2) pages.push(<span key="end-dots">...</span>);
      pages.push(
        <button key={totalPages} onClick={() => handlePageSelect(totalPages)}>
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="pagination">
      <button className="prev-button" onClick={handlePrev} disabled={currentPage === 1}>
        Previous
      </button>

      {renderPageNumbers()}

      <button className="next-button" onClick={handleNext} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;