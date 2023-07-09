import React, { useState } from "react";

const Madlibs = () => { 

    const initialState = {
        verb: "",
        noun: "",
        place: "",
        adjective: "",
    }
    const [formData, setFormData] = useState(initialState)
    const handelChange = e =>{
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }
   
    const verb =(formData.verb)
    const noun =(formData.noun)
    const adjective =(formData.adjective)
    const place =(formData.place)    

const story =("The " + noun + " was " + verb + " while on a " + adjective + " trip to the magical " + place)
   
const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(initialState)
    console.log(story)
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
