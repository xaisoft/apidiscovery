import React from "react";
import { FaCheck } from 'react-icons/fa';
import styled from "styled-components";

const TableRow = styled.tr`
    :nth-child(even){
  background-color: #eee;
}
`;

const TableCell = styled.td`
padding: 20px;
text-align:center;
`
const ApiTableRow = ({entry}) => {
    return <TableRow>
    <TableCell>{entry.API}</TableCell>
    <TableCell>{entry.Description}</TableCell>
    <TableCell><a target="_blank" rel="noopener noreferrer" href={entry.Link}>Go to API website</a></TableCell>
    <TableCell>{entry.Auth}</TableCell>
    <TableCell>{entry.HTTPS ? <FaCheck/>:null}</TableCell>
    <TableCell>{entry.Cors}</TableCell>
    <TableCell>{entry.Category}</TableCell>
  </TableRow>
}

export default ApiTableRow;