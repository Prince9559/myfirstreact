import Search from './Search';
import './Options.css';
function Options(){
    return(
        <div>
            <select className='option'>

                <option>All</option>
                <option>Alexa Skills</option>
                <option>Bady</option>
                <option>Beauty</option>
                <option>Books</option>
                <option>Deals</option>
                <option>Electronic</option>
                <option>Furniture</option>
                <option>Appliance</option>
                <option>Apps & Game</option>
                
            </select>
          
          <Search></Search>
        
        
        </div>
    )
};
export default Options;