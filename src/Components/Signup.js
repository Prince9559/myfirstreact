import { Link } from 'react-router-dom';
import './Signup.css';

function Signup(){
    return(
        <div className="col">
            <center>

            <h3>Welcome</h3>
            
            <input className='text' type="text"placeholder="First name.."></input>
            <br></br>
            <br></br>
            <input className='height' type="text"placeholder="Last name.."></input>
            <br></br>
            <br></br>
            <input className='row' type="text"placeholder="Mobile no.."></input>
            <br></br>
            <br></br>
            <input className='tex' type="text"placeholder="DBT.."></input>
            <br></br>
            <br></br>
            <button className='sub'>SUBMIT</button>
            <br></br><br></br>

            <Link to="/">Back</Link>

            </center>

        </div>
    )
};
export default Signup;