
import './App.css';
import { useState } from "react";


function App() {
  const [name, setTextarea] = useState("Type some word");
  const [text, setText] = useState("Type some word");
  

  const handleSubmit = (event) => {
    event.preventDefault();
    text = setTextarea(event.target.value);
  
    
    
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>head</h2>

      <textarea  onChange={handleSubmit} cols="30" rows="10"></textarea>
      <input type="submit" />
      <h2>The thing you write is {name} </h2>
      <h4>{text}</h4>
    </form>
  );

}
export default App;
