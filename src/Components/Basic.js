  import React, { useState } from "react";
  import axios from "axios";
  import './Basic.css';
  
  function Basic() {
      const [error, setError] = useState('');
      const [image, setImage] = useState('');
      const [output, setOutput] = useState('');
  
      const Show = () => {
          const baseURL = `https://prince9559.github.io/JAVA-SCRIPT/image.json`;
  
          axios.get(baseURL).then((response) => {
              //  setImage(response.data["image"]);
              //  setImage(response.data);
              let arr = response.data[0];
              // console.log(arr);
              let mb = arr.menuBar;
              // console.log(mb);
              // console.log(mb[0]);
              let n = mb.length;
              let outputtable = ``;
              for (let i = 0; i <= n - 1; i++) {
              
                  console.log(mb[i].title);
                  outputtable += `<td>${mb[i].title}</td>\n`
  
              }

              outputtable=`<table border="1"><tr>${outputtable}</tr></table>`;
              setOutput(outputtable);
              document.getElementById("dd").innerHTML=outputtable;
          })
  
              .catch(error => {
                  console.error("Error fetching weather:", error);
                  setError("API Call Field.");
  
              });
      };
  
      return (
    <div className="col">
<center>

  <div className="col1" id="dd"></div>
        
    <br></br>
    <button className="fading-border" onClick={Show}>Click Here</button>
  
                  {image && (
  
                      <pre>
                          {JSON.stringify(image, null, 2)}
                      </pre>
  
                  )}
              </center>
          </div>
      );
  }
  
  export default Basic;
  