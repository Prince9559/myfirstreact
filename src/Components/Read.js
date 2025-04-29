import './Read.css';
import { useState } from "react";

function Read(){
    
    const[products,setProducts]=useState([]);

    const showData =()=>{

        const data=localStorage.getItem("products");
        if(data)
        {
            setProducts(JSON.parse(data));
        }
        console.log(data);
    };
    return (
        <div>
            <table border="1" >
            <tbody>
          <tr>  
    
          <td><button onClick={showData}>Show Data</button></td>
    
          </tr>
    
          </tbody>
          </table>
         
      <div className="col">
      
      {products.map((product)=>( 
    
        <li className="styles">
        {product.name}
        <p>Price: ₹{product.price}</p>
        <img src={product.image} width="100"/>
        </li>
    
      ))}
    </div>

    </div>
        
      );
    }
    export default Read;
    