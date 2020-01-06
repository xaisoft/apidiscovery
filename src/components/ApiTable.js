import React from "react";
import ApiTableRow from "./ApiTableRow";
import styled from "styled-components";

const Table = styled.table`
    table-layout: fixed;
    width:100%;
    border-collapse: collapse; border: 3px solid purple;
`
const TableHeaderCell = styled.th`
    padding:20px;

    :nth-child(1) {
        width: 15%;

    :nth-child(2) {
        width: 30%;
    }

    :nth-child(3) {
        width: 30%;
    }
}
`


const TableHeader = styled.thead``


const TableRow = styled.tr``;

const ApiTable = ({entries}) => {
    return <Table>
    <caption>Public APIs</caption>
          <TableHeader>
            <TableRow>
            <TableHeaderCell>
              Title
            </TableHeaderCell>
            <TableHeaderCell>
              Description
            </TableHeaderCell>
            <TableHeaderCell>
              Link
            </TableHeaderCell>
            <TableHeaderCell>
              Auth
            </TableHeaderCell>
            <TableHeaderCell>
              HTTPS
            </TableHeaderCell>
            <TableHeaderCell>Cors</TableHeaderCell>
            <TableHeaderCell>Category</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <tbody>
          {
   
      entries.map(entry=>
        <ApiTableRow key={entry.Link} entry={entry}/>
      )
    }
          </tbody>
        </Table>
}

export default ApiTable;