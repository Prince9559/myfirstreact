
import './Product.css';
import React, { useState } from 'react';

function Product(props) {
    
    const [count, setCount] = useState(0); 

    const add = (() =>{
    setCount(count*1 + 1)
    });

    const negative = (() =>{         
        if (count > 0) 
        {
            setCount(count*1 - 1);
        }
    });

    return (
        <div className='col1'>

            <img className="col3"src={props.pic}></img>

           <center><h2> {props.sname}</h2></center>

            <div className='col2'>

                <div className="text">

                <button onClick={negative}>−</button>
                <span>{count}</span>
                <button onClick={add}>+</button>

                </div>

            </div>

            <p>{props.children}</p>

        </div>
    )
};
export default Product;