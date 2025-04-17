import React,{useState} from "react";
import axios from "axios";

function Store()
{
    const [error,setError]=useState('');
    const [image,setImage]=useState('');
    const [output,setOutput]=useState('');

    const Sky =()=>{
        const baseURL=`https://prince9559.github.io/JAVA-SCRIPT/image.json`;

        axios.get(baseURL).then((response)=>{
            // setImage(response.data);
            let arr=response.data[0];
            // console.log(arr);
            let mb=arr.menuBar;
            // console.log(mb);
            // console.log(mb[0]);

            let n=mb.length;

            let outputtable=``;

            for(let i=0;i<=n-1;i++)
            {
                console.log(mb[i].title);
                outputtable +=`<td>${mb[i].title}</td>\n`;
            }

            outputtable=`<table border="2"><tr>${outputtable}</tr></table>`;
            setOutput(outputtable);
            document.getElementById("dd").innerHTML=outputtable;

        })
        .catch(error =>{
            console.log("Error",error);
            setError("API Called Field");
        })
    }
    return(
        <div>
            <div id="dd"></div>
<button onClick={Sky}>SUBMIT</button>

{image &&
<pre>
    {JSON.stringify(image,null,2)};
</pre>

}
        </div>
        
    )
};
export default Store;