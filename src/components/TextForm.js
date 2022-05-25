import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const [Result, setResult] = useState("");
    const setChange = (event) => {
        setText(event.target.value);
    }
    const setUpperCase = () => {
        let newText = text.toUpperCase();
        setResult(newText);
        if(text!==''){
            props.alert('info','Successfully converted to UpperCase');   
        }
    }
    const setLowerCase = () => {
        let newText = text.toLowerCase();
        setResult(newText);
        if(text!==''){
        props.alert('info','Successfully converted to lowercase');
        }
    }

    const getEmail = () => {

        let newText = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
        console.log(newText);
        if (newText !== null) {
            newText = newText.join(' ');
            props.alert('info','Email Extracted');
        } else {
            if(text!==''){
            newText = "No email found."
            props.alert('danger','No Email Found');
            }

        }

        setResult(newText);
       
    }
    const clearSpace = () => {
        let newText = text.split(' ').filter(word => word !== '').join(' ');
        setText(newText);
        setResult(newText);
        if(text!==''){
        props.alert('info','Extra Space removed successfully');
        }
    }
    const setClear = () => {
        let newText = '';
        setResult(newText);
        setText(newText);
        if(text!==''){
        props.alert('danger','Text Cleared');
        }
    }
    return (

        <div style={{ color: props.mode === 'light' ? 'black' : 'white' }}>

            <div className="mb-3 mt-3">
                <h1>{props.title}</h1>
                <textarea className="form-control" style={{ color: props.mode === 'light' ? 'black' : 'white', backgroundColor: props.mode === 'light' ? 'white' : 'grey' }} value={text} onChange={setChange} id="exampleFormControlTextarea1" rows="8"></textarea>

            </div>
            <button type="button" id='upper' className="btn btn-dark mx-1 mb-3" onClick={setUpperCase}>Convert to Uppper Case</button>
            <button type="button" id='upper' className="btn btn-dark mx-1 mb-3" onClick={setLowerCase}>Convert to Lower Case</button>
            <button type="button" id='upper' className="btn btn-dark mx-1 mb-3" onClick={getEmail}>Extract Email</button>
            <button type="button" id='upper' className="btn btn-dark mx-1 mb-3" onClick={clearSpace}>Remove Extra Space</button>
            <button type="button" id='upper' className="btn btn-dark mx-1 mb-3" onClick={setClear}>Clear Text</button>


            <h3>Total Characters: <span>{text.trim().length}</span></h3>
            <h3>Total Words: <span>{text.trim().split(' ').filter(word => word !== '').length}</span></h3>

            <h1>Your Result is :</h1>
            <p>
                {Result}
            </p>
        </div>

    )
}
