import { Link } from 'react-router-dom';
import './Facebook.css';

function Facebook(){
    return(
        
        <center>
            <div className='col'>
            <h1 className='facebook'>Facebook</h1>
            <h2 className='p'>Create a new account</h2>
            <p className='pra'>It's quick and easy.</p>
            <p className='line'>_______________________________________________________</p>

            <input className='input' type='text'placeholder='Name..'></input>
            <input className='int' type='text'placeholder='Surname..'></input>

            <p className='date'><b>Date of birth ❓</b></p>
            
            <select className='day'>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
                <option>31</option>
            </select>

            <select className='month'>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
            </select>

            <select className='year'>
                <option>2001</option>
                <option>2002</option>
                <option>2003</option>
                <option>2004</option>
                <option>2005</option>
                <option>2006</option>
                <option>2007</option>
                <option>2008</option>
                <option>2009</option>
                <option>2010</option>
                <option>2011</option>
                <option>2012</option>
                <option>2012</option>
                <option>2013</option>
                <option>2014</option>
                <option>2015</option>
                <option>2016</option>
                <option>2017</option>
                <option>2018</option>
                <option>2019</option>
                <option>2019</option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
            </select>
            <p className='gender'><b>Gender ❓</b></p>

            


    <div class="gender-container">
    <label class="gender-box">Female<input type="radio" name="gender" value="female"></input></label>

    <label class="gender-box">Male<input type="radio" name="gender" value="male"></input></label>

    <label class="gender-box">Custom<input type="radio" name="gender" value="custom"></input></label>
  </div>


        <input className='mobile' type='text'placeholder='Mobile number or email address..'></input> 

        <input className='password' type='text'placeholder='New password..'></input>  

        <p className='peo'>People who use our service may have uploaded your contact information to</p> 
        <p className='pp'>Facebook</p>
        
    <Link target='fb' className='learn' to="https://www.facebook.com/help/637205020878504">Learn more</Link>

    <p className='detail'>By clicking Sign Up,you agree to our</p>

    <Link target='_' className='trem' to="https://www.facebook.com/legal/terms/update">Terms </Link>
        
    <Link target='ab' className='privacy' to='https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0'>Privacy Policy</Link>

    <p className='an'>and</p>

    <Link target='aa'className='policy'to='https://www.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0'>Cookies Policy</Link>

    <p className='data'>You may receive SMS notification from us from us and can opt out at any time.</p>
    
    <button className='butt'>Sign Up</button>

    <Link className='fine' to="/already">Already have an account</Link>
    </div>
    </center>
    )
};
export default Facebook;