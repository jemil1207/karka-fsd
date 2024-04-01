import React, { useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { MdDelete } from "react-icons/md";

const Cart = () => {
    const location = useLocation();
    let navigate = useNavigate()
    const cartItems = location.state.cartItems;

    const [cart, setCart] = useState(cartItems.map(item => ({ ...item, quantity: 1 })));

    const increment = (index) => {
        const updatedCart = [...cart];
        updatedCart[index].quantity += 1;
        setCart(updatedCart);
    };

    const decrement = (index) => {
        const updatedCart = [...cart];
        if (updatedCart[index].quantity > 1) {
            updatedCart[index].quantity -= 1;
            setCart(updatedCart);
        }
    }

    const handleDelete = (index) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        setCart(updatedCart);
    };
    let handlebuy = () => {
        alert("Thank you for your purchase! Your order has been placed successfully")
        navigate("/")
    }


    return (
        <div>
            <div className='cartheader'>
                Your shopping cart
            </div>
            <hr />
            <br />
            {cart.map((item, index) => (
                <div key={index} className='row' style={{ marginTop: "20px" }}>
                    <div className='col-lg-1'></div>
                    <div className='col-lg-4 col-md-4 col-sm-12 cartimageheader'>
                        <div><img className='cartimage' src={item.cover_image} alt={item.title} /></div>
                    </div>
                    <div className='col-lg-5 col-md-7 col-sm-10'>
                        <div><b>{item.title}</b> </div>
                        <div><b>Author:</b> {item.author}</div>
                        <div><b>Price:</b> {item.price}</div>
                        <div><b>Description:</b> {item.description}</div>
                        <div><b>Quantity: </b>
                            <button onClick={() => decrement(index)}>-</button> {item.quantity} <button onClick={() => increment(index)}>+</button>
                        </div>
                        <div><b>Total price:</b> {item.price * item.quantity}</div>
                        <div className='col-lg-1 col-md-1 col-sm-2'><button className='addtocart' onClick={() => handleDelete(index)} >Delete</button></div>
                        <div><button className='addtocart' onClick={handlebuy}>Buy now</button></div>

                    </div>
                    {/* <div className='col-lg-1 col-md-1 col-sm-2'><MdDelete className='deleteicon' onClick={() => handleDelete(index)} /></div> */}
                </div>
            ))}
        </div>
    );
};

export default Cart;
