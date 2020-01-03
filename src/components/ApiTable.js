import React from "react";
import ApiTableRow from "./ApiTableRow";

const ApiTable = ({entries}) => {
    return <table>
    <caption>Public APIs</caption>
          <thead>
            <tr>
            <th>
              API
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
   
      entries.length > 0 && entries.map(entry=>
        <ApiTableRow entry={entry}/>
      )
    }
          </tbody>
        </table>
}

export default ApiTable;