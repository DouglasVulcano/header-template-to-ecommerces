import "./App.css";
import ProductCard from "./components/ProductCard";
import Header from "./components/Header";

function App() {
  const products = [
    {
      id: 1,
      name: "Produto 1",
      description: "Descrição do Produto 1",
      image: "https://i.zst.com.br/thumbs/12/10/33/1952322327.jpg",
    },
    {
      id: 2,
      name: "Produto 2",
      description: "Descrição do Produto 2",
      image: "https://i.zst.com.br/thumbs/12/10/33/1952322327.jpg",
    },
    {
      id: 3,
      name: "Produto 3",
      description: "Descrição do Produto 3",
      image: "https://i.zst.com.br/thumbs/12/10/33/1952322327.jpg",
    },
    {
      id: 4,
      name: "Produto 4",
      description: "Descrição do Produto 4",
      image: "https://i.zst.com.br/thumbs/12/10/33/1952322327.jpg",
    },
    {
      id: 5,
      name: "Produto 5",
      description: "Descrição do Produto 5",
      image: "https://i.zst.com.br/thumbs/12/10/33/1952322327.jpg",
    },
  ];

  return (
    <div className="App">
      <Header />
      <div className="page-title">
        <h1>Hello! Welcome to the test page!</h1>
      </div>
      <div className="container">
        <div className="grid-container">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
