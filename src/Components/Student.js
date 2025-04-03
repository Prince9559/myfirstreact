
import './Student.css';
let name="Mukesh";
function Student(props) {
    return (
        <div className='col'>
            <h1>{props.sname}</h1>

            <p>{props.children}</p>
            

        </div>
    )
};
export default Student;