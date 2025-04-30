import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Product from './Product';

function Home() {

    return (
        <div className="container">
            {/* <Link to="/search?price=50&productname=Campa">Go to Search</Link> */}
            

            <Product productname="Rose" sname="Rose" pic="pic/rose.jpg"price={30}/>
            
            <Product productname="Sunflower" sname="SunFlower" pic="/pic/sun.jpg"price={20}/>
            
            <Product productname="Kamal" sname="Kamal" pic="/pic/kamal.jpg"price={25}/>

            <Product productname="Flower" sname="Flowers" pic="/pic/ggg.jpg"price={50} />

            <Product productname="Lily" sname="Lily" pic="/pic/li.jpg"price={60} />

            <Product productname="Men's facewash" sname="Men's Facewash" pic="/pic/men.jpg"price={120} />

            <Product productname="Fashwash" sname="Facewash" pic="/pic/nive.jpg"price={150} />

            <Product productname="Pimple free" sname="Pimple Free" pic="/pic/pim.jpg" price={200}/>

            <Product productname="Slipper" sname="Slipper" pic="/pic/chappal.jpg" price={140}/>

            <Product productname="Shoe" sname="Shoe" pic="/pic/shose.jpg"price={350} />

            <Product productname="Coconut" sname="Coconut" pic="/pic/coco.jpg"price={15} />

            <Product productname="Mango" sname="Mango" pic="/pic/mango.jpg"price={80} />

            <Product productname="Book" sname="Book" pic="/pic/book.jpg"price={90} />

            <Product productname="Banana" sname="Banana" pic="/pic/banana.jpg"price={60} />

            <Product productname="Bag" sname="Bag" pic="/pic/bag.jpg"price={400} />

        </div>);

}
export default Home;