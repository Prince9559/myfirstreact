import { Link,NavLink } from "react-router-dom";

function Patna(){
    return(
        <div>
            <center><h1>Welcome to the Patna</h1></center>

           <center><Link to="/bihar">Bihar</Link></center>

        <br></br>
        <br></br>
        <img style={{width:"300px",height:"300px",marginLeft:"480px"}} src="pic/patna.jpg"></img>
        <center><Link to="/maharajganj">Maharajganj</Link></center>

        </div>
    )
};
export default Patna;