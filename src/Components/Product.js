import React, { useState } from 'react';
import './Product.css';


function Product(props) {
    const [count, setCount] = useState(0);
    const [addedToCart, setAddedToCart] = useState(false);

    const handleAddToCart = () => {
        setAddedToCart(true);
        setCount(1); 
    };

    const add = () => {
        setCount(count + 1);
    };

    const negative = () => {
        if (count > 1) {
            setCount(count - 1);
        } 
        else 
        {
            setAddedToCart(false); 
            setCount(0);
        }
    };

    // Prepare link with productname and price as query parameters
    let productlink = `/?productname=${props.sname}`;
    const jsonproduct = JSON.parse(props.json);
    console.log(props.json);

    return (
        <div className="col1">
             
            <a href={productlink} target="_blank" rel="noopener noreferrer">
                <img className="col3" alt={jsonproduct.name} src={props.pic} />
            </a>

            <center><h2 className="name">{jsonproduct.name}</h2></center>
            <h3 className='price'><i>Price ₹{props.price}</i></h3>
            <div className="col2">

        <div>

    {!addedToCart ?(<button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>) : (
                <div className="text">
                    <button onClick={negative}>−</button>
                    <span>{count}</span>
                    <button onClick={add}>+</button>
                </div>
            )}
        </div>
                
            </div>

            <p>{props.children}</p>
            
        </div>
    );
}

export default Product;
