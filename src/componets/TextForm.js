import React, {useState} from 'react'

export default function TextForm(props) {
  
  const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success")
  }

  const handleLowClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!","success")
}
  const handleOnChange = (event)=>{
    setText(event.target.value);
    navigator.clipboard.writeText(event.target.value)

}
  const handleClearClick = ()=>{
    let newText = '';
    setText(newText);
    props.showAlert("Text has been Cleared!","success")
  
}

  const [text, setText] = useState('');

  return (
    <>
     <div className="container my-3" style={{ color : props.mode ==='dark'?'white':'black' }}>
        <h2>{props.title}</h2>
        <div className="texta my-2">
        <textarea value = {text} 
            onChange = {handleOnChange} 
            className="form-control" id="textbox" rows="7"
            style={{ backgroundColor : props.mode ==='dark'?'#82878A':'white',
                     color : props.mode ==='dark'?'white':'black' }}>
        </textarea>
        </div>
        <button className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleClearClick}>Clear Text</button>
     </div>
     <div className="container" style={{ color : props.mode ==='dark'?'white':'black' }}>
        <h2>Text Summary:</h2>
         <p>Number of Words in the Text: {text.split(' ').length}</p>
         <p>Number of Characters in the Text: {text.length}</p>
         <p>it will take {0.008 * text.split(' ').length} mins to read the above text</p>
        <h2>Preview:</h2>
         <p>{text.length>0?text:"Enter Some text above"}</p>
     </div>
    </>
  )
}
