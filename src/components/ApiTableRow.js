import React from "react";
import { FaCheck } from 'react-icons/fa';
const ApiTableRow = ({entry}) => {
    return <tr>
    <td>{entry.API}</td>
    <td>{entry.Description}</td>
    <td><a target="_blank" href={entry.Link}>Go to API website</a></td>
    <td>{entry.Auth}</td>
    <td style={{textAlign:"center"}}>{entry.HTTPS ? <FaCheck/>:null}</td>
    <td>{entry.Cors}</td>
    <td>{entry.Category}</td>
  </tr>
}

export default ApiTableRow;