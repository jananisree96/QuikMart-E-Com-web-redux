import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetDataQuery } from "../service/api";

function ProductCard(props) {
    const navigate = useNavigate();
     const { data, error, isLoading } = useGetDataQuery();

      if (isLoading) {
        console.log("Loading data...");
        return <div>Loading...</div>;
      }

      if (error) {
        console.error("Error loading data:", error);
        return <div>Error loading data</div>;
      }

     
      console.log("Fetched data:", data);
  return (
    <div className='card m-2 cursor-pointer' style={{width:300}} role='button' onClick={() => navigate(`/product/${props.id}`)}  >
        <div className='mt-2'>
            <img src={props.thumbnail} height={150} width={180} alt={props.title} className='border-radius' />
        </div>
        <div className='card-body'>
            <h5 className='cart-title'>{props.title}</h5>
            <h6 className='mt-2'>price:{`$${props.price}`}</h6>
            <h6 className='mt-2'>Discount:{props.discountPercentage}%</h6>
        </div>
        <div className='mt-4'>
            {props.stock > 0?<button className='btn btn-success mb-2'>Available</button>:<button className='btn btn-outline-danger mb-2'>Out of Stock</button>}
        </div>
    </div>
  )
}

export default ProductCard