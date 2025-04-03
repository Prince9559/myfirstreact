import Picture from "./Picture";

function Student(props){

    return(
        <div>
            {props.sname}
            
            <p>{props.children}</p>

            <Picture pic="pic/1.jpg"></Picture>
<Picture pic="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/MS_Dhoni_%28Prabhav_%2723_-_RiGI_2023%29.jpg/330px-MS_Dhoni_%28Prabhav_%2723_-_RiGI_2023%29.jpg"></Picture>
        </div>
    );
}

export default Student;