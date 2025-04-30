import './Read.css';
import Product from './Product';
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
        <div className='back'>
          <table>
          <tbody>
          <tr>  

          <td><button onClick={showData}>Show Data</button></td>
    
          </tr>
          </tbody>
          </table>
         
      <div className="col">
      
      {products.map((product)=>( 
    
        <li className="styles">
        <Product name={product.name}src={product.image}></Product>

        
        

        {/* <center><h2 className='heading'><b><i>{product.name}</i></b></h2></center>

        <img className='img'src={product.image}/>

        <h3 className='price'><i>Price: ₹{product.price}</i></h3> */}

        </li>
    
      ))}

      {/* <Product></Product> */}

    </div>

    </div>
        
      );
    }
    export default Read;
    