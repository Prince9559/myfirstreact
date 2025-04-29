
 import { useLocation } from 'react-router-dom';
 
 function Search(){
     
   const location = useLocation();
 
   const queryParams = new URLSearchParams(location.search);
 
 
   const imgurl = queryParams.get('productname'); 
   console.log(imgurl);
   
   const price=queryParams.get("price");
  
//    const oic =queryParams.get("pic");
 
   return (
    <div>
<img src={imgurl} alt={imgurl}style={{width:"200px",height:"200px",marginLeft:"20px",marginTop:"30px"}}></img>
        
<h2 style={{marginLeft:"20px"}}>Price : ₹{price}</h2>
        
  </div>
   );
 }
 export default Search;
 