import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Success() {
    const [count,setCount] = useState(15);
    const Navigate = useNavigate();

    useEffect(() =>{
        setInterval(()=>setCount((count) => count-1),1000)
        setTimeout(() => Navigate('/'),15000)
    },[Navigate])
  return (
    <h5 className='mt-5'>Your order have been placed successfully.You will be redirected in{" "} {count} seconds</h5>
  );
}

export default Success;