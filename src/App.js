import React,{useState} from 'react';

import './App.css';
import ApiTable from './components/ApiTable';
import ApiFormSearch from './components/ApiFormSearch';

function App() {

  const [entries,setEntries] = useState([]);
  const [url,setUrl] = useState('https://api.publicapis.org/entries');
  const handleSubmit = async (values) => {
    
    const queryParams = {
   
      title:values.title,
      description:values.description
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
      <ApiFormSearch  handleSubmit={handleSubmit}/>
    
    {entries.length > 0 &&  <ApiTable entries={entries}/> }
    </div>
  );
}

export default App;
