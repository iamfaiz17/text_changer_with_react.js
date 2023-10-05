import React, {useState} from 'react';

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("UPPERCASE WAS CLICKED" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = ()=> {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = ()=> {
        let newText = '';
        setText(newText);
    }
    const handleOnChange = (event)=>{
        // console.log("handle clicked");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter Text Here');
    
  return (
    <>
    <div>
        <h1>{props.heading}</h1>
          <div className="mb-3">             
              <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea> 
          </div>
          <button className="btn btn-primary mx-1" onClick={handleUpClick}>convert to UPPERCASE</button>
          <button className="btn btn-primary mx-1" onClick={handleLoClick}>CONVERT TO lowecase</button>
          <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear all text</button>
    </div>
    <div className="container my-4">
    <h1>Your text and character count is updating below.</h1>
    <p>{text.split(" ").length} of words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length}Minutes read</p>
    <h3>Thank you for enter this statement</h3>
    <p>{text}</p>
    </div>
    </>
  )
}
