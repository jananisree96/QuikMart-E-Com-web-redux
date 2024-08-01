import React from "react";
import { useGetDataQuery } from "../service/api"; 
import ProductCard from "../components/ProductCard";

function Dashboard() {
  const { data: product, error, isLoading } = useGetDataQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error("Error loading data:", error);
    return <div>Error loading data</div>;
  }

  return (
    <div className="d-flex flex-wrap justify-content-center p-3">
      
        <ProductCard {...product} key={product.id} />
   
    </div>
  );
}

export default Dashboard;
