import { Link } from 'react-router-dom';
import './Instagram.css';
import Facebook from './Facebook';

function Instagram() {
    return (
        <div className='back'>
            <div className='cool'>

            <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet"></link>
            <h1 className='instagram-style'>Instagram</h1>
            
            <p className='pra'>Sign up to see photos and video</p>

            <p className='prag'>from your friends.</p>

            <button className='faces'><Link className='ff' to="/facebook"><b>Lon in with Facebook</b></Link></button>

            <p className='or'>___________ OR _____________</p>

            <input className='inputs' type='text'placeholder='Mobile Number or Email..'></input>

            <input className='inputss' type='text'placeholder='Password..'></input>

            <input className='input' type='text'placeholder='Full Name..'></input>

            <input className='inpu' type='text'placeholder='Username..'></input>
            
            <p className='design'>People who use our service may have uploaded</p>
            <p className='designer'>your contact information Instagram.</p>

<Link target='ab' className='learn'to="https://www.facebook.com/help/instagram/261704639352628">Learn more</Link>

<p className='pk'>By signing up, you agree to our</p>

<Link target='aa' className='kk'to="https://help.instagram.com/581066165581870/?locale=en_US">Terms</Link>

<Link target='kk' className='kp'to="https://www.facebook.com/privacy/policy">Privacy</Link>

<Link className='policy'to="https://www.facebook.com/privacy/policy">Policy</Link>

<p className='and'>and</p>

<Link className='cookes'to="https://privacycenter.instagram.com/policies/cookies/">Cookies Policy</Link>


<button className='sign'>Sign up</button>        
    </div>
    </div>
    );
}

export default Instagram;
