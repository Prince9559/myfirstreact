import Product from "./Components/Product";

function App() {
  const products = [
    {
      name: "Samsung S24",
      price: 140000,
      image: "pic/samsung.jpg"
    },
    {
      name: "Laptop",
      price: 90000,
      image: "pic/laptop.jpg"
    },
    {
      name: "Mause",
      price: 250,
      image: "pic/mause.jpg"
    },
    {
      name: "Watch",
      price: 1000,
      image: "pic/watch.jpg"
    },
    {
      name: "Table",
      price: 2000,
      image: "pic/table.jpg"
    },
    {
      name: "Rose",
      price: 30,
      image: "pic/rose.jpg"
    },
    {
      name: "Sunflower",
      price: 90,
      image: "pic/sun.jpg"
    },
    {
      name: "Kamal",
      price: 50,
      image: "pic/kamal.jpg"
    },
    {
      name: "Flower",
      price: 80,
      image: "pic/ggg.jpg"
    },
    {
      name: "Lily",
      price: 65,
      image: "pic/li.jpg"
    },
    {
      name: "Men's Facewash",
      price: 120,
      image: "pic/men.jpg"
    },
    {
      name: "Facewash",
      price: 150,
      image: "pic/nive.jpg"
    },
    {
      name: "Pimple Free",
      price: 190,
      image: "pic/pim.jpg"
    },
    {
      name: "Slipper",
      price: 200,
      image: "pic/chappal.jpg"
    },
    {
      name: "Shoe",
      price: 250,
      image: "pic/shose.jpg"
    },
    {
      name: "Coconut",
      price: 25,
      image: "pic/coco.jpg"
    },
    {
      name: "Mango",
      price: 300,
      image: "pic/mango.jpg"
    },
    {
      name: "Book",
      price: 99,
      image: "pic/book.jpg"
    },
    {
      name: "Banana",
      price: 50,
      image: "pic/banana.jpg"
    },
    {
      name: "Bag",
      price: 199,
      image: "pic/bag.jpg"
    }
  ];

  return (
    <div>
      {products.map((item, index) => (
        <Product key={index} json={JSON.stringify(item)} />
      ))}
    </div>
  );
}

export default App;
