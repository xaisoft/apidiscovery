import React from "react";

const ApiTableRow = ({entry}) => {
    return <tr key={entry.Link}>
    <td>{entry.API}</td>
    <td>{entry.Description}</td>
    <td><a target="_blank" href={entry.Link}>{entry.Link}</a></td>
    <td>{entry.Auth}</td>
    <td>{entry.HTTPS ? "YES":"NO"}</td>
    <td>{entry.Cors}</td>
    <td>{entry.Category}</td>
  </tr>
}

export default ApiTableRow;