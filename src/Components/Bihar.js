import { Link,NavLink } from "react-router-dom";

function Bihar(){
    return(
    <div>
    <center><h1>Welcome to the Bihar</h1></center>
    
    <center><Link to="/">India</Link></center>
    
    
    <br></br>
    <br></br>

    <center>
    <img style={{width:"300px",height:"300px"}} src="pic/bihar.jpg"></img>
    <br></br>
    <br></br>    
    <Link to="/patna">Patna</Link></center>

    </div>
    )
}
export default Bihar;