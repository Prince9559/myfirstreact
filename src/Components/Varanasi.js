import { Link,NavLink } from "react-router-dom";

function Varanasi(){
    return(
        <div>

        <center><h1>Welcome to the Varanasi</h1></center>

            <center><Link to="/up">UP</Link></center>
            <br></br>
            <img style={{width:"300px",height:"300px",marginLeft:"480px"}} src="pic/kashi.jpg"></img>
            <br></br>

            <center><Link to="/bhadohi">Bhadohi</Link></center>

        </div>
    );
};
export default Varanasi;