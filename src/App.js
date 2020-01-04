import React,{useState} from 'react';

import './App.css';
import ApiTable from './components/ApiTable';
import ApiFormSearch from './components/ApiFormSearch';

function App() {

  const [entries,setEntries] = useState([]);
  const [title,setTitle] = useState([]);
  const [description,setDescription] = useState([])
  const [https,setHttps] = useState(false);
  const [url,setUrl] = useState('https://api.publicapis.org/entries');
  const [yesHttps,setYesHttps] = useState(false)
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
      <ApiFormSearch title={title} handleSubmit={handleSubmit} description={description}/>
    
    {entries.length > 0 &&  <ApiTable entries={entries}/> }
    </div>
  );
}

export default App;
