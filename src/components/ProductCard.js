import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetDataQuery } from "../service/api";

function ProductList() {
  const navigate = useNavigate();
  const { data: products, error, isLoading } = useGetDataQuery();

  if (isLoading) {
    console.log("Loading data...");
    return <div>Loading...</div>;
  }

  if (error) {
    console.error("Error loading data:", error);
    return <div>Error loading data</div>;
  }

  console.log("Fetched data:", products);

  return (
    <div className="product-list d-flex flex-wrap justify-content-center p-3">
      {products.map((product) => (
        <div
          key={product.id}
          className="card m-2 cursor-pointer"
          style={{ width: 300 }}
          role="button"
        //   onClick={() => navigate(`/product/${product.id}`)}
        >
          <div className="mt-2">
            <img
              src={product.thumbnail}
              height={150}
              width={180}
              alt={product.title}
              className="border-radius"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <h6 className="mt-2">Price: ${product.price}</h6>
            <h6 className="mt-2">Discount: {product.discountPercentage}%</h6>
          </div>
          <div className="mt-4">
            {product.stock > 0 ? (
              <button className="btn btn-success mb-2">Available</button>
            ) : (
              <button className="btn btn-outline-danger mb-2">
                Out of Stock
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
