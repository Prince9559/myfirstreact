import { useState } from "react";
import axios from "axios";

function Downloadproduct(){
    // const[products,setProducts]=useState('');
  
    const Picture =()=>{
       const baseURL=`https://prince9559.github.io/jsonproject/Product.json`;

       axios.get(baseURL).then((response)=>{

        localStorage.setItem("products", JSON.stringify(response.data));
        // setImage(response.data);
        console.log("Saved");
        
       })

       .catch(error=>{
        // setError("Error");
       });
    }

    return(
        <div>

            <button onClick={Picture}>Submit</button>

        </div>
    )
};

export default Downloadproduct;