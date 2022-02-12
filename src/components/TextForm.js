import React, { useState } from 'react';

function TextForm(props) {
    const [text, setText] = useState('');
    const clickUpperHandler = () => {
        setText(text.toUpperCase());

        props.showAlert("Texts are uppercase ", 'success');

    }
    const clickLowerHandler = () => {
        setText(text.toLowerCase());
        props.showAlert("Texts are lowercase ", 'success');

    }
    const clickCapitalHandler = () => {
        const words = text.split(" ");
        for (let i = 0; i < words.length; i++) {
            //const r1 = typeof word === 'string' ? str.toUpperCase() : '';
            words[i] = typeof words[i][0] === 'string' ? words[i][0].toUpperCase() + words[i].substring(1).toLowerCase() : '';
        }

        setText(words.join(" "));
        props.showAlert("Texts are capitalixed ", 'success');
    }
    const textHandler = (event) => {
        setText(event.target.value);
    }

    //'rgb(0 14 64)'
    return (
        <div style={{ backgroundColor: (props.mode === 'light') ? 'white' : props.colors.clrs, color: (props.mode === 'light') ? 'black' : props.colors.textColor }}>
            <div className=" container">
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={textHandler} id="exampleFormControlTextarea1" rows="10"></textarea>
                <button className="btn btn-primary mx-2 my-2" onClick={clickUpperHandler}>UpperCase</button>
                <button className="btn btn-primary mx-1 my-2" onClick={clickLowerHandler}>LowerCase</button>
                <button className="btn btn-primary mx-1 my-2" onClick={clickCapitalHandler}>Capitalize</button>
            </div>
            <div className="container">
                <h2>Details</h2>
                <p>Number of Word : {text.split(" ").length}</p>
                <p>Number of characters : {text.length}</p>
                <p>Time Required To Read : {0.008 * text.split(" ").length} minutes  </p>

                <h2> Preview </h2>
                <h4 style={{ marginBottom: '0px' }}> {text.length > 0 ? text : 'Enter Some text in textbox '}</h4>
            </div>
        </div >
    );
}

export default TextForm;