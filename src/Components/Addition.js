 // NameForm.js
import { useState } from "react";


function Addition() {


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    if (option == true) {
      setResult(x * 1 + y * 1);
      return;
    }


    else {
      setResult(x * 1 - y * 1);
      return;
    }

  }

  const [
    x, setX] = useState(0);


  const [
    y, setY] = useState(0);
  const [
    sum, setResult] = useState(0);


  const [
    option, setOption] = useState('');

  const OneChange = (e) => {
    let t = e.target.value;
    setX(t);
  }
  const TwoChange = (e) => {
    console.log("Two");
    let t = e.target.value;
    setY(t);
  }
  const optionoChange = (e) => {
    console.log("Option");
    let t = e.target.checked;
    console.log(t);
    setOption(t);

  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Result {sum}</h2>
      <label>N1 <input type="number" value={x} onChange={OneChange} ></input></label>
      <label>N2 <input type="number" value={y} onChange={TwoChange} ></input></label>
      <label>Add/Sub <input name="calculate" onChange={optionoChange} type="checkbox" value="add"  ></input></label>

      <button type="submit">Calculate</button>
    </form>
  );
}
export default Addition;