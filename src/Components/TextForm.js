import React , {useState} from 'react' ;



const TextForm = (props) => {
    const [text , setText ] = useState('');
    
    const handleUpClick = () =>{
        console.log("Uppercase was Clicked") ;
        let newText = text.toUpperCase() ;
        setText(newText);
        props.showAlert("Converted to Upper Case ! " , "success");
       
    }
    const handleDownClick = () =>{
        console.log("Uppercase was Clicked") ;
        let newText = text.toLowerCase() ;
        setText(newText);
        props.showAlert('Converted to Lower Case ! ' , 'success');
    }
    const handleOnChange = (event) =>{
         setText(event.target.value);
         
    }
    const handleClearClick = ()=>{
        setText("");
    }
    const handleExtraSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const handleCopy = ()=>{
        var text  = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges() ;
        props.showAlert('Copied to Clipboard ! ' , 'success');
    }
    let words = text.split(/\s+/).filter((element)=>{ return element.length!==0 }).length ;
  return (
    
    <>
    <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
<div className="mb-3">
<label htmlFor="myBox" className="form-label"> <h1>
        {props.heading} 
    </h1></label>
<textarea className={`form-control bg-${props.mode} text-${props.mode==='light'?'dark':'light'} ` } value={text} id="myBox" rows="5" onChange={handleOnChange} placeholder='Enter Text Here !' ></textarea>
</div>
<button type="button" className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>Convert to Upper Case !</button>
<button type="button" className="btn btn-primary my-3 mx-2" onClick={handleDownClick}>Convert to Lower Case !</button>
<button type="button" className="btn btn-primary my-3 mx-2" onClick={handleClearClick}>Clear Text !</button>
<button type="button" className="btn btn-primary my-3 mx-2" onClick={handleCopy}>Copy Text !</button>
<button type="button" className="btn btn-primary my-3 mx-2" onClick={handleExtraSpace}>Remove Extra Spaces !</button>
</div>

<div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
 <h1>Your Text Summary</h1>
 <p>
  {words} Words & {text.length} characters 
  <p>{0.008 * words } Minutes Read</p>
 </p>
 <h3>Preview</h3>
 <p>{text.length>0?text:"Enter Something to Preview here !"}</p>
</div>
    </>
  )
};

export default TextForm