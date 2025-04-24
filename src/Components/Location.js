import Options from './Options';
import './Location.css';

function Location(props){
    return(
        <div>
            <img className='local' src={props.pic}></img>

            <p>{props.children}</p>

           <Options></Options>
           
        </div>
    )
};
export default Location;