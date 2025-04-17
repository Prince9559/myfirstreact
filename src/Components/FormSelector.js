import React,{useState} from "react";

function FormSelector(){
    const [number,setNumber]=useState('');
    const [number1,setNumber1]=useState('');
    const [option,setOption]=useState('');
    const [result,setResult]=useState('');

    const handleSubmit =(e)=>{
        e.preventDefault();

        if(option==true)
        {
         setResult=number+number1;
         return;
        }

       else

        {
        setResult=number-number1;
        return;
        }
    };

    const OneChange =(e)=>{
        let t=e.target.value;
        setNumber(t);
    }

    const TwoChange =(e)=>{
        let t=e.target.value;
        setNumber1(t);
    }

    
    const optionoChange = (e) => {
        
        let t = e.target.checked;
        setOption(t);
    
      }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Result {result}</h2>

            <label>N1 <input type="number" value={number} onChange={OneChange} ></input></label>
      <label>N2 <input type="number" value={number1} onChange={TwoChange} ></input></label>
      <label>Add/Sub <input name="calculate" onChange={optionoChange} type="checkbox" value="add"  ></input></label>

<button type="submit">submit</button>
        </form>
        
    )
}
export default FormSelector;