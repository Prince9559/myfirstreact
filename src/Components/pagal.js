 import { useEffect, useState } from "react";
 import Product from "./Product";
 import './Shopping.css';
 
 function Shopping() {
     const [products, setProducts] = useState([]);
 
     useEffect(() => {
         const data = localStorage.getItem("products");
         if (data) 
         {
             setProducts(JSON.parse(data));
         }
     }); 
 
     return (
         <div>
             <h2>Shopping Products</h2>
             <div className="col">
 
                 {products.map((product) => (
                     <Product
                         price={product.price}
                         sname={product.name}
                         pic={product.image}
                         json={JSON.stringify(product)}
                         
                     />
                 ))}
             </div>
         </div>
     );
 }
 
 export default Shopping;
 