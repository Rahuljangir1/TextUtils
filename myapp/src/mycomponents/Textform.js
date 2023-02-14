import React from 'react'
import { useState } from 'react';

export default function Textform(props) {
    const [text, setText] = useState("")

    const handleonChange = (event) => {
        setText(event.target.value)
    }
    const handleCase = () => {
        let newText = text;
        if(text===text.toUpperCase()){
            newText=text.toLowerCase();
            setText(newText);
        }
       else{
        newText=text.toUpperCase();
        setText(newText);
       }    
       props.showAlert("case has been changed","success");  
    }
  
    const handleClrClick = () => {
        let newText = "";
        setText(newText)
        props.showAlert("text has cleared","success");
    }
    // const handleCopy = () => {
    //     var text = document.getElementById('txtbox')
    //     text.select();
    //     navigator.clipboard.writeText(text.value);
    //    }

    const handleExtraspaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extraa spaces has been removed","success");
    }
    return (
        <>
            <div className="container" style={{color:props.mode==='dark'?'#a5deff':'black'}}>
                <div className="mb-3  my-3 ">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" id="txtbox" style={{backgroundColor:props.mode==='dark'?'rgb(39 104 169 / 63%)':'white',color:props.mode==='dark'?'#a5deff':'black'}} value={text} onChange={handleonChange}  rows="8"></textarea>
                    <button className="btn btn-primary my-3" onClick={handleCase}>change case</button>
                    <button className="btn btn-primary my-3 mx-2" onClick={handleClrClick}>clear text</button>
                    <button className="btn btn-primary my-3 mx-2" onClick={handleExtraspaces}>remove extra spaces</button>
                    {/* <button className="btn btn-primary my-3 mx-2" onClick={handleCopy}>copy text</button> */}
                </div>
            </div>
            <div className="container my-3"style={{color:props.mode==='dark'?'#a5deff':'black'}} >
                <h2>your text summary</h2>
                
                <p>{text.trim().length>0?text.trim().split(" ").length:0} words and {text.trim().length} characters</p>
                <p>{text.trim().length>0>1?0.08 * text.split(" ").length:0} minutes to read</p>
                <h2>preview</h2>
                <p>{text}</p>
            </div>
         
        </>
    )
} 