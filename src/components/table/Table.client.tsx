// src/components/table/Table.client.tsx
import React from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import { KickStarterProjectType } from '../../types/Project';
import './table.css'

interface TableProps {
  projects: KickStarterProjectType[];
  handleSort: (field: string) => void;
  sortOrders: { [key: string]: 'asc' | 'desc' }; // Pass sort orders for each column
}

/**
 * Renders the Kickstarter projects table.
 */
const Table: React.FC<TableProps> = ({ projects, handleSort, sortOrders }) => {
  return (
    <table className="kickstarter-table">
      <thead>
        <TableHeader handleSort={handleSort} sortOrders={sortOrders} />
      </thead>
      <tbody>
        {projects.map((project, index) => (
          <TableRow key={index} project={project} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;