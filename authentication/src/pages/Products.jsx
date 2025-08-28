import React from "react";

const Products = () => {
  // Dummy product list
  const productList = [
    {
      id: 1,
      name: "Laptop",
      price: "₹55,000",
      image: "https://via.placeholder.com/250x200?text=Laptop",
    },
    {
      id: 2,
      name: "Smartphone",
      price: "₹25,000",
      image: "https://via.placeholder.com/250x200?text=Smartphone",
    },
    {
      id: 3,
      name: "Headphones",
      price: "₹2,500",
      image: "https://via.placeholder.com/250x200?text=Headphones",
    },
    {
      id: 4,
      name: "Smart Watch",
      price: "₹7,000",
      image: "https://via.placeholder.com/250x200?text=Smart+Watch",
    },
  ];

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4 text-primary fw-bold">Our Products</h1>
      <div className="row">
        {productList.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <div className="card shadow h-100">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text text-success fw-bold">{product.price}</p>
                <button className="btn btn-warning">Add to Cart 🛒</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
