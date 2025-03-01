import React from 'react';

interface TableHeaderProps {
  handleSort: (field: string) => void;
  sortOrders: { [key: string]: 'asc' | 'desc' };
}

/**
 * Renders the table header with sortable columns.
 */
const TableHeader: React.FC<TableHeaderProps> = ({ handleSort, sortOrders }) => {
  return (
    <tr>
      <th onClick={() => handleSort('s_no')}>S. No {sortOrders['s_no'] === 'asc' ? '↑' : '↓'}</th>
      <th onClick={() => handleSort('percentage_funded')}>
        Percentage Funded {sortOrders['percentage_funded'] === 'asc' ? '↑' : '↓'}
      </th>
      <th onClick={() => handleSort('pledged')}>
        Amount Pledged {sortOrders['pledged'] === 'asc' ? '↑' : '↓'}
      </th>
    </tr>
  );
};

export default TableHeader;