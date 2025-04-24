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
    
<h1>Search Page</h1>

        <img src={imgurl} alt={imgurl}></img>
        
        <h2>Price : {price}</h2>

     </div>
   );
 }

 export default Search;
 