import React from 'react';
import { KickStarterProjectType } from '../../types/Project';

interface TableRowProps {
  project: KickStarterProjectType;
}

/**
 * Renders a single table row for a Kickstarter project.
 */
const TableRow: React.FC<TableRowProps> = ({ project }) => {
  return (
    <tr>
      <td>{project['s.no'] + 1}</td>
      <td>{project['percentage.funded']}%</td>
      <td>${project['amt.pledged'].toLocaleString()}</td>
    </tr>
  );
};

export default TableRow;