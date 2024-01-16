import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";

const Home = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  // const api = process.env.REACT_APP_API_URL;
  const api = "http://localhost:8000/api";

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get("http://localhost:8000/api/product/get-products", {
          timeout: 5000,
        })
        .then((response) => {
          // Handle successful response
          setProductList(response.data);
          console.log(response.data)
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            // Handle cancellation
          } else {
            // Handle other errors
            console.error("Error:", error.message);
          }
        });
    
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="p-3">
      {/* sample banner section */}
      <div className="banner">
        <div className="banner-text">
          <h1>Sample Banner</h1>
          <p>Sample Banner Description</p>
        </div>
      </div>
      {/* all product listing */}
      <div className="product-listing">
        <div className="product-listing-text">
          <h1>Sample Product Listing</h1>
          <p>Sample Product Listing Description</p>
        </div>
        <div className="list p-2 d-flex flex-wrap gap-2">
          {productList.length > 0 &&
            productList.map((product, index) => {
                console.log(product)
              return (
                <Card style={{width:"300px"}}>
                  <Card.Body>
                    <h5 className="card-title">{product.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {product.price}
                    </h6>
                    <p className="card-text">{product.description}</p>
                  </Card.Body>
                </Card>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
