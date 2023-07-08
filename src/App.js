import Madlibs from "./madlibForm.js"
import React, {usestate} from "react";

function App() {
const [items, setitems] = usestate('')
const Item = ({verb, noun, place, adjective}) => {
  return (
    <p>
    The {noun} is {verb} while on the way to the {adjective} {place}.
</p>)}
return (
  <div>
    <Madlibs/>
    <div> 
  {items.map(({verb, noun, place, adjective}) => <Item verb={verb} noun={noun} place={place} adjectice={adjective} /> )}
</div>  
  </div>

  );
}
export default App;
