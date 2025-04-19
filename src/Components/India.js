import { Link,NavLink } from "react-router-dom";

function India(){
    return(
        <div>
            <center><h1>Welcome to the India</h1></center>

           <center><Link to="/up">UP</Link></center>
            <br></br>
            <br></br>

           <center><NavLink 
            
            to="Bihar"
            className={({isActive})=>isActive ? "active":""}>
            Bihar

            </NavLink></center> 

        </div>
    )
}
export default India;