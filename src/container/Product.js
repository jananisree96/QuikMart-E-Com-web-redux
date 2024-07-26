import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ProductList } from '../data/ProductList';
import { useDispatch, useSelector } from 'react-redux';
import { addItems } from '../redux/reducer/cart';

function Product() {
    const params = useParams();
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const props = ProductList.find((element) => element.id === parseInt(params.id));
    const [alert,setAlert] = useState(false);

    const list = useSelector((state) => state.cart.list);

    const element = list.find((item) => item.id === props.id);
    const addToCart = () => {
        setAlert(true);
        setTimeout(() => setAlert(false),3000)
        dispatch(addItems(props));
    };
    return (
        <div className='card m-2' >
                {alert && <span className='alert alert-success'>Item added to cart</span>}
            <div className='mt-2'>
                <img src={props.thumbnail} height={350} width={400} alt={props.title} className='border-radius' />
            </div>
            <div className='mt-3 card-body'>
                <h5 className='cart-title'>{props.title}</h5>
                <h6 className='mt-2'>price:{`$${props.price}`}</h6>
                <h6 className='mt-2'>Discount:{props.discountPercentage}%</h6>
            </div>
            <div className='mt-4'>
                {props.stock > 0 ? (
                    <>
                        <button className='btn btn-success' onClick={() =>Navigate(`/checkout/${props.id}`)}>Buy Now</button>
                        {element?.count > 0 ? (
                            <button className='ms-3 btn btn-outline-warning' onClick={()=> Navigate('/cart')}>Go to Cart</button>
                        ) : (
                            <button className='ms-3 btn btn-success' onClick={addToCart}>Add to Cart</button>
                        )}
                    </>
                ) : (
                    <button className='btn btn-outline-danger'>Out of Stock</button>
                )}
            </div>
        </div>
    )
}

export default Product