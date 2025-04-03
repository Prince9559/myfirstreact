
function Person(props){

    return(
        <div>
            {props.sname}

            <p>{props.children}</p>


        </div>
    )
};

export default Person;