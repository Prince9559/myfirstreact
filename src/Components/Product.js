import React, { useState } from 'react';
import './Product.css';

function Product(props) {
    const [count, setCount] = useState(0);

    const add = () => {
        setCount(count + 1);
    };

    const negative = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    // Prepare link with productname and price as query parameters
    let productlink = `/search?productname=${props.pic}&price=${props.price}`;

    return (
        <div className="col1">
            <a href={productlink} target="_blank"rel="noopener noreferrer">
                <img className="col3" alt={props.sname} src={props.pic} />
            </a>

            <center><h2 className="name">{props.sname}</h2></center>

            <div className="col2">
                <div className="text">
                    <button onClick={negative}>−</button>
                    <span>{count}</span>
                    <button onClick={add}>+</button>
                </div>
            </div>

            <p>{props.children}</p>
        </div>
    );
}

export default Product;
