import Male2 from "./Male2";

function Male3(props){

    return(
        <div>
            {props.sname}

            <p>{props.children}</p>

            <Male2 sname="Brijesh">I am From Bhadohi</Male2>

        </div>
    );
}

export default Male3;