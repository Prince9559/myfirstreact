import Language from './Language';
import './Button.css';

function Button(props){
    return(
        <div>

            

       <button className='but'>
        <svg xmlns="http://www.w3.org/2000/svg"fill="none"viewBox="0 0 24 24"stroke="currentColor"
          width="40"
          height="41.2"
        
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>

      <Language></Language>
      
        </div>
    )
};
export default Button;