import Person from "./Person";

function Person1(props){
    return(
        <div>
       {props.sname}

      <p>{props.children}</p>

       <Person sname="Gautam Gambhir">I am from Bhadohi.</Person> 

        </div>
    );
}
export default Person1;