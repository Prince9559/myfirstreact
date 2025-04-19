import { Link,NavLink } from "react-router-dom";

function Bhadohi(){
    return(
        <div>

        <center><h1>Welcome to the Bhadohi</h1></center>

        <img style={{width:"300px",height:"300px",marginLeft:"480px"}} src="pic/bhadohi.jpg"></img>

        <br></br>
         
       <center><Link to="/varanasi">Varanasi</Link></center>
        
        </div>
    )
};
export default Bhadohi;