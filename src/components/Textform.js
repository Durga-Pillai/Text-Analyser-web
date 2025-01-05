import React,{useState} from 'react';
import './Textform.css';
 

export default function Textform(props) {
   const handleClick = ()=>{
    console.log('Uppercase was clicked');
    let newText =text.toUpperCase(text);
    setText(newText);
   }
   const handlelowClick = ()=>{
    console.log('Uppercase was clicked');
    let newText =text.toLowerCase();
    setText(newText);
   }
   const handleonChange = (event)=>{
    console.log("Uppercase was clicked");
    setText(event.target.value);
   }
   
    const [text,setText] = useState('Enter text here');
    //  setText("new text");
  return (
    <>

    <div className="container" >
        <h1>{props.heading}</h1>
    
  <div className="mb-3">
    {/* <label for="myBox" className="form-label">Text Area</label> */}
    <textarea  className="form-control" value={text} onChange={handleonChange} id="myBox" rows="8"></textarea>
    
  </div>
  <button className="btn-primary animated"  onClick={handleClick}>Convert to Uppercase</button>
  <button className="btn-primary animated" onClick={handlelowClick}>Convert to Lowercase</button>
  
  </div>
  <div className ="container" my-3>
    <h1>Your text summary</h1><br />
    <p>{text.split(" ").length} words and {text.length} characters</p><br></br>
   <p>{0.008 *text.split(" ").length } Minutes taken to read</p>
  </div>
  </>
  );
}
