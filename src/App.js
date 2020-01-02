import React,{useState} from 'react';

import './App.css';

function App() {

  const [entries,setEntries] = useState([]);
  const [title,setTitle] = useState([]);
  const [description,setDescription] = useState([])
  const [https,setHttps] = useState(false);
  const [url,setUrl] = useState('https://api.publicapis.org/entries');
  const [yesHttps,setYesHttps] = useState(false)
  const handleSubmit = async e => {
    e.preventDefault();
    const queryParams = {
      https:yesHttps,
      title:title,
      description:description
    }

    const urlSearchParams =new URLSearchParams(queryParams);
    
    const query = urlSearchParams.toString();
 
    const response = await fetch(`${url}?${query}`);

    const json = await response.json();
    console.log(json)
    setEntries(json.entries)
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label><input id="title" type="text" name="title" value={title} onChange={e => setTitle(e.target.value)}/>
        <label htmlFor="description">Description</label><input id="description" type="text" name="description" value={description} onChange={e => setDescription(e.target.value)}/>
        <label htmlFor="https">HTTPS</label><input id="https" type="checkbox" value={https} 
        onChange={e=> setHttps(!https)}></input>
        <fieldset>      
        <legend>HTTPS?</legend>      
        <input type="checkbox" name="yesHttps" value={yesHttps} onChange={()=>setYesHttps(!yesHttps)}/>YES<br/>
    </fieldset>    
        <button type="submit">Get APIs</button>
      </form>
      <table>
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
        // API: "Cat Facts"
        // Description: "Daily cat facts"
        // Auth: ""
        // HTTPS: true
        // Cors: "no"
        // Link: "https://alexwohlbruck.github.io/cat-facts/"
        // Category: "Animals"
     
        entries.length > 0 && entries.map(x=>
        
        <tr key={x.Link}>
          <td>{x.API}</td>
          <td>{x.Description}</td>
          <td><a target="_blank" href={x.Link}>{x.Link}</a></td>
          <td>{x.Auth}</td>
          <td>{x.HTTPS ? "YES":"NO"}</td>
          <td>{x.Cors}</td>
          <td>{x.Category}</td>
        </tr>)
      }
            </tbody>
          </table>

    </div>
  );
}

export default App;
