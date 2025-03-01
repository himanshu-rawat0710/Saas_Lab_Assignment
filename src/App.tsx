// src/App.tsx
import React, { useEffect, useState } from 'react';
import Table from './components/table/Table.client';
import Pagination from './components/pagination/Pagination.client';
import { KickStarterProjectType, SORT_FIELDS, SORT_ORDER } from './types/Project';

/**
 * Main App component that fetches project data and renders the table with pagination.
 */
const App: React.FC = () => {
  const [projects, setProjects] = useState<KickStarterProjectType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortOrders, setSortOrders] = useState<{ [key in SORT_FIELDS]: SORT_ORDER }>({
    [SORT_FIELDS.S_NO]: SORT_ORDER.ASC,
    [SORT_FIELDS.PERCENTAGE_FUNDED]: SORT_ORDER.ASC,
    [SORT_FIELDS.PLEDGED]: SORT_ORDER.ASC,
  });

  const itemsPerPage = 5;

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          'https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json'
        );
        const data = await res.json();
        if (data) {
          setProjects(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Handle sorting logic per column
  const handleSort = (field: string) => {
    const newSortDirection: SORT_ORDER = sortOrders[field as SORT_FIELDS] === SORT_ORDER.ASC ? SORT_ORDER.DESC : SORT_ORDER.ASC;
    setSortOrders({ ...sortOrders, [field]: newSortDirection });

    const sortedProjects = [...projects].sort((a, b) => {
      if (field === 's_no') {
        return newSortDirection === SORT_ORDER.ASC
          ? a['s.no'] - b['s.no']
          : b['s.no'] - a['s.no'];
      } else if(field === 'percentage_funded') {
        return newSortDirection === SORT_ORDER.ASC
          ? a['percentage.funded'] - b['percentage.funded']
          : b['percentage.funded'] - a['percentage.funded'];
      } else if (field === 'pledged') {
        return newSortDirection === SORT_ORDER.ASC
          ? a['amt.pledged'] - b['amt.pledged']
          : b['amt.pledged'] - a['amt.pledged'];
      }
      return 0;
    });
    setProjects(sortedProjects);
  };

  const onPageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  // Pagination logic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProjects = projects.length > 0 ? projects.slice(startIndex, startIndex + itemsPerPage) : [];

  return (
    <div className="app">
      <h1>Highly-rated kickstarter projects</h1>
      {projects.length > 0 ? (
        <>
          <Table
            projects={paginatedProjects}
            handleSort={handleSort}
            sortOrders={sortOrders}
          />
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(projects.length / itemsPerPage)}
            onPageChange={onPageChange}
          />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;