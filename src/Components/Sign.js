import './Sign.css';

function Sign() {
    return(
        
        
        <div className='col'>

        <h2 class="fading-text"><i>😎 Sign up 🌹</i></h2>
        <input type='text' placeholder='Name..' class='col1'></input>
      
        <input type='text' placeholder='Email..' class='col1'></input>

        <input type='text'placeholder='Mobile_No..'class='col1'></input>
        
        <input type='text' placeholder='Password..' class='col1'></input>

        <input type='text' placeholder='Confirm password..' class="col1"></input>

  
       <br></br>
        <button class='col2'>Submit</button>

        </div>
    )
};

export default Sign;