import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ProductListItems from "../components/ProductListItems";
import { useNavigate, useParams } from "react-router-dom";
import { useGetDataQuery } from "../service/api";

function Checkout() {
  const { id } = useParams();
  const list = useSelector((state) => state.cart.list);
  const navigate = useNavigate();

  const { data: productData, error, isLoading } = useGetDataQuery(id);
  const [state, setState] = useState([]);

  useEffect(() => {
    if (id) {
      const product = productData ? { ...productData, count: 1 } : null;
      setState(product ? [product] : []);
    } else {
      setState(list);
    }
  }, [id, productData, list]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading product data</div>;

  const incrementItem = (item) => {
    const index = state.findIndex((product) => product.id === item.id);
    setState((state) => [
      ...state.slice(0, index),
      { ...item, count: item.count + 1 },
      ...state.slice(index + 1),
    ]);
  };

  const decrementItem = (item) => {
    if (item.count === 1) {
      removeItemFromCart(item);
    } else {
      const index = state.findIndex((product) => product.id === item.id);
      setState((state) => [
        ...state.slice(0, index),
        { ...item, count: item.count - 1 },
        ...state.slice(index + 1),
      ]);
    }
  };

  const removeItemFromCart = (item) => {
    const index = state.findIndex((product) => product.id === item.id);
    setState((state) => [...state.slice(0, index), ...state.slice(index + 1)]);
  };

  return (
    <>
      {state.length > 0 ? (
        <>
          {state.map((item) => (
            <ProductListItems
              {...item}
              key={item.id}
              incrementItem={() => incrementItem(item)}
              decrementItem={() => decrementItem(item)}
              removeItem={() => removeItemFromCart(item)}
            />
          ))}
          <button
            className="btn btn-success"
            onClick={() => navigate("/success")}
          >
            Place order
          </button>
        </>
      ) : (
        <h3>No items in the checkout</h3>
      )}
    </>
  );
}

export default Checkout;
