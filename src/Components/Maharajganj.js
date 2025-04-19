import { Link,NavLink } from "react-router-dom";

function Maharajganj(){
    return(
        <div>

           <center> <h1>Welcome to the Maharajganj</h1>
           <img style={{width:"300px",height:"300px"}} src="pic/maha.jpg"></img>
           <br></br>
            <Link to="/patna">Patna</Link></center>

            <Link to="/signup">Signup</Link>

        </div>
    )
};
export default Maharajganj;
