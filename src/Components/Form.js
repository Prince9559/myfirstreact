import './Form.css';
import React,{use, useState} from 'react';

function Form(){

    const [number,setNumber]=useState('');
    const [number1,setNumber1]=useState('');
    const [result,setResult]=useState('');

    const handleAdd =(e)=>{
        e.preventDefault();
        const sum=(1*number)+(1*number1);
        setResult(sum);
    }

    return(
        <div>

        <form onSubmit={handleAdd}>
            <input type='number'value={number}onChange={(e)=>setNumber(e.target.value)}></input>
            <br></br>
            <input type='number'value={number1}onChange={(e)=>setNumber1(e.target.value)}></input>
            <br></br>
            <input value={result}></input>
            <br></br>
            <button>Add</button>



        </form>
        </div>
    )
};
export default Form;
