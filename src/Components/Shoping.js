import './Shoping.css';

function Shoping()
{
    return(
      <div className='col'>

      <div className="col-item"><b>Fashion</b>
      <select>  
      <option>Choose</option>
        
      <option>Men footwear</option>
      <option>Women footwear</option>
      <option>Men's T-Shirts</option>
      <option>Kids footwear</option>
      <option>Kids T-shirts</option>
      <option>Men's Shirts</option>
      <option>Men's Jeans</option>
      </select>
    </div>

    <div className="col-item"><b>Electronic</b>
      <select>
        <option>Choose</option>
        <option>Laptop</option>
        <option>KeyBoard</option>
        <option>Watch</option>
        <option>Fan</option>
        <option>Mause</option>
        <option>Mobile</option>
        <option>Bluetooth</option>
        <option>Manitor</option>
      </select>
    </div>

    <div className="col-item"><b>Home & Furniture</b>
      <select>
          <option>Choose</option>
          <option>Choose</option>
          <option>Sofa</option>
          <option>Beds</option>
          <option>Chair</option>
          <option>Pans</option>
          <option>Tawas</option>
      </select>
    </div>

    <div className="col-item"><b>Toy</b>
      <select>
        <option>Choose</option>
        <option>Ball</option>
        <option>Car</option>
        <option>Teddy bear</option>
      </select>
    </div>

    <div className="col-item"><b>Sports</b>
      <select>
         <option>Choose</option>
        <option>Football</option>
        <option>Balls</option>
        <option>Sports Bags</option>
        <option>Skating</option>
      </select>
    </div>

      <div className="col-item"><b>Kids</b>
      <select>
            <option>Choose</option>
             <option>Shirts</option>
            <option>footwear</option>
            <option>toy</option>
            <option>bags</option>
      </select>
    </div>
  </div>
)
};

export default Shoping;