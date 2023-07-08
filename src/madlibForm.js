import React, { useState } from "react";


const Madlibs = () => { 

    const Item = ({verb, noun, place, adjective}) => {
        return (
          <p>
          The {noun} is {verb} while on the way to the {adjective} {place}.
      </p>)}
   
    const initialState = {
        verb: "",
        noun: "",
        place: "",
        adjective: "",
    }
    const [item, setItems] = useState(initialState)
    const [formData, setFormData] = useState(initialState)
    const handelChange = e =>{
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData(initialState)
        return(
            <div><Item/>
       </div>)
    }

    return(
<form onSubmit={handleSubmit}> 

    <label htmlFor="verb">Verb</label>
        <input 
         id="verb" 
         name="verb"
         type="text" 
         placeholder="put verb here" 
         value={formData.verb} 
         onChange={handelChange}
         />
<br></br>
    <label htmlFor="noun">Noun</label>
        <input 
         id="noun" 
         name="noun"
         type="text" 
         placeholder="put noun here" 
         value={formData.noun} 
         onChange={handelChange}
         />
<br></br>
<label htmlFor="place">Place</label>
        <input 
         id="place" 
         name="place"
         type="text" 
         placeholder="name a place here" 
         value={formData.place} 
         onChange={handelChange}
         />
<br></br>
<label htmlFor="adjective">Adjective</label>
        <input 
         id="adjective" 
         name="adjective"
         type="text" 
         placeholder="put adjective here" 
         value={formData.adjective} 
         onChange={handelChange}
         />
<br></br>
        <button>Submit</button>
    </form>
 )

};
   
   export default Madlibs;