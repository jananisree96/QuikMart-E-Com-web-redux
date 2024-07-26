import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductListItems from '../components/ProductListItems'
import { modifyItem, removeItem } from '../redux/reducer/cart';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const list = useSelector((state) => state.cart.list);
    const dispatch = useDispatch();
    const Navigate = useNavigate();

    const incrementItem = (item) => {
        dispatch(modifyItem({ ...item, count: item.count + 1 }));
    };
    const decrementItem = (item) => {
        if (item.count === 1) {
            dispatch(removeItem(item))
        }
        else {
            dispatch(modifyItem({ ...item, count: item.count - 1 }));
        }
    };
    const removeItemFromCart = (item) => {
        dispatch(removeItem(item))
    }
    return (
        <>
            {list.length > 0 ? (
                <>
                    {list.map((item) => (
                        <ProductListItems
                            {...item}
                            key={item.id}
                            incrementItem={() => incrementItem(item)}
                            decrementItem={() => decrementItem(item)}
                            removeItem={() => removeItemFromCart(item)}
                        />
                    ))}
                    <button className='btn btn-success' onClick={()=> Navigate('/checkout')}>Go to checkout</button>
                </>
            ) : (
                <h3>No items in the cart</h3>
            )}
        </>
    );
}

export default Cart