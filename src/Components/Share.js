import { useLocation } from 'react-router-dom';

function Share(){
    
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
//   const imgurl ="pic/"+ queryParams.get('picture'); 

  const imgurl = queryParams.get('picture'); 

  return (
    <div>
      {/* <h1>Query Params {queryParams }</h1> */}
      <h1>{queryParams.get("city")}</h1>
      {/* <h2>Search Page</h2> */}
         <h1>{imgurl}</h1>
       <img src={imgurl} alt={imgurl}></img>
    </div>
  );
}
export default Share;
