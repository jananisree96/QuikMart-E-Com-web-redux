import React from "react";
import { useGetDataQuery } from "../service/api"; 
import ProductListItems from "./ProductListItems";

function ProductList() {
  const { data: product, error, isLoading } = useGetDataQuery();


  return (
    <div className="d-flex flex-wrap justify-content-center p-3">
   
        <ProductListItems
          key={product.id}
          thumbnail={product.thumbnail}
          title={product.title}
          price={product.price}
          discountPercentage={product.discountPercentage}
          count={product.count} 
          incrementItem={() => console.log(`Increment ${product.id}`)}
          decrementItem={() => console.log(`Decrement ${product.id}`)}
          removeItem={() => console.log(`Remove ${product.id}`)} 
        />
 
    </div>
  );
}

export default ProductList;
