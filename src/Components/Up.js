import { Link, NavLink } from "react-router-dom";

function Up()
{
    return(
        <div>
           <center><h1>Welcome to the UP</h1></center>
            <center><Link to="/">India</Link></center>
            <br></br>
            <br></br>
             
            <center>
                
            <img style={{width:"300px",height:"300px"}} src="pic/up.jpg"></img> 
            <br></br>   
            <br></br>
            <Link to="/varanasi">Varanasi</Link></center>

        </div>

    )
};
export default Up;