 import './Forget.css';
 
 function Forget(){
    return(
        <center><div className='co'>

            <h2 className='find'>Find Your Account</h2>
            <p className='li'>____________________________________________________</p>

            <p className='row'>Please enter your email addresss or month number to search</p>
            <p className='rows'>for your account.</p>

            <input className='coll' type='text'placeholder='Email address or mobile number..'></input>
            <p className='ios'>____________________________________________________</p>

            <button className='cancel'>Cancel</button>

            <button className='search'>Search</button>

        </div></center>


    )
 };
 export default Forget;