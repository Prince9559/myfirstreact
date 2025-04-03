
import Person1 from "./Person1";
function Person(props){

    return(
        <div>
            {props.sname}

            <p>{props.children}</p>

            

        </div>
    )
};

export default Person;