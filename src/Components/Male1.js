import Male from "./Male";

function Male1(props)
{
    return(

        <div>
            {props.sname}

            <p>{props.children}</p>

            <Male sname="Prince">I am From Bhadohi</Male>
        </div>
    );
}

export default Male1;