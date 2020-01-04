import React from 'react'
import {useFormik} from 'formik'
const ApiFormSearch = ({handleSubmit,title,description,https,yesHttps}) => {

    const formik = useFormik({initialValues:{title:'',description:''},onSubmit: values => {
      
        alert(JSON.stringify(values, null, 2));
        handleSubmit(values);
      },});

    
    return (
        <form onSubmit={formik.handleSubmit}>
        <label htmlFor="title">Title</label><input id="title" type="text" name="title" value={formik.values.title}  onChange={formik.handleChange}
        value={formik.values.title}/>
        <label htmlFor="description">Description</label><input id="description" type="text" name="description" value={formik.values.description}  onChange={formik.handleChange}
        value={formik.values.description}/>
        {/* <label htmlFor="https">HTTPS</label><input id="https" type="checkbox" value={https} 
        onChange={e=> setHttps(!https)}></input>
        <fieldset>      
        <legend>HTTPS?</legend>      
        <input type="checkbox" name="yesHttps" value={yesHttps} onChange={()=>setYesHttps(!yesHttps)}/>YES<br/>
    </fieldset>     */}
        <button type="submit">Get APIs</button>
      </form>
    )
}

export default ApiFormSearch;