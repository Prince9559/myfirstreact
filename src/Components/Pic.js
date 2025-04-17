import Pictures from "./Pictures";

function Pic(props){
    return(
        <div>
             {props.sname}

            <p>{props.children}</p>

            <Pictures pic={props.src}></Pictures>

        </div>
    );
}
export default Pic;