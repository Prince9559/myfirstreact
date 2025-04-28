import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Product from './Product';
function Home() {

    return (
        <div className="container">
            {/* <Link to="/search?price=50&productname=Campa">Go to Search</Link> */}
            

            {/* <Link to="/search?price=10&productname=Rose?pic=pic/rose.jpg">Rose */}
            <Product productname="Rose" sname="Rose" pic="pic/rose.jpg"/>
            {/* </Link> */}

            
            <Product productname="Sunflower" sname="SunFlower" pic="/pic/sun.jpg" />
            

            <Product productname="Kamal" sname="Kamal" pic="/pic/kamal.jpg" />

            <Product productname="Flower" sname="Flowers" pic="/pic/ggg.jpg" />

            <Product productname="Lily" sname="Lily" pic="/pic/li.jpg" />

            <Product productname="Men's facewash" sname="Men's Facewash" pic="/pic/men.jpg" />

            <Product productname="Fashwash" sname="Facewash" pic="/pic/nive.jpg" />

            <Product productname="Pimple free" sname="Pimple Free" pic="/pic/pim.jpg" />

            <Product productname="Slipper" sname="Slipper" pic="/pic/chappal.jpg" />

            <Product productname="Shoe" sname="Shoe" pic="/pic/shose.jpg" />

            <Product productname="Coconut" sname="Coconut" pic="/pic/coco.jpg" />

            <Product productname="Mango" sname="Mango" pic="/pic/mango.jpg" />

            <Product productname="Book" sname="Book" pic="/pic/book.jpg" />

            <Product productname="Banana" sname="Banana" pic="/pic/banana.jpg" />

            <Product productname="Bag" sname="Bag" pic="/pic/bag.jpg" />

        </div>);

}
export default Home;