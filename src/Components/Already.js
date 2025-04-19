import { Link } from 'react-router-dom';
import './Already.css';

function Already(){
    return(
        <center><div className='col1'>
        <h1 className='fec'>facebook</h1>
        <h3 className='ppp'>Log in to Facebook</h3>
        <input className='in' type='text'placeholder='Email address or phone number..'></input>
        <input className='pass' type='text'placeholder='Password..'></input>
        <button className='log'>Log in</button>
            

    <Link className='for'to="/forget">Forgotten account?</Link>    
    <Link className='sign' to="/facebook"> Sign up for Facebook</Link>    
    </div>
        </center>

    )
};
export default Already;