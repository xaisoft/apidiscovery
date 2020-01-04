import React from "react";
import ApiTableRow from "./ApiTableRow";

const ApiTable = ({entries}) => {
    return <table>
    <caption>Public APIs</caption>
          <thead>
            <tr>
            <th>
              Title
            </th>
            <th>
              Description
            </th>
            <th>
              Link
            </th>
            <th>
              Auth
            </th>
            <th>
              HTTPS
            </th>
            <th>Cors</th>
            <th>Category</th>
            </tr>
          </thead>
          <tbody>
          {
   
      entries.map(entry=>
        <ApiTableRow key={entry.Link} entry={entry}/>
      )
    }
          </tbody>
        </table>
}

export default ApiTable;