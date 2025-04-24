import Location from './Location';
import './Pics.css';
function Pics(props){
    return(
        <div>
            <img className="pic" src={props.pic}></img>

            <p>{props.children}</p>

        <Location pic="pic/look.jpg"></Location>

        </div>
    )
};
export default Pics;