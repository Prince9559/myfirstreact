import Male1 from "./Male1";

function Male2(props){

    return(

        <div>
            {props.sname}

            <p>{props.children}</p>

            <Male1 sname="Rohit">I am From Bhadohi</Male1>
        </div>
    );
}
export default Male2;