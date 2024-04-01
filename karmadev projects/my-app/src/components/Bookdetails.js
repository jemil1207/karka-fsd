import React, { useState } from 'react'
import { json, useLocation, useNavigate } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
// import { IoHandLeft } from 'react-icons/io5';
const Bookdetails = () => {
    let location = useLocation()
    let getitem = location.state.senditem
    let navigate = useNavigate()
    const [cartCount, setCartCount] = useState(0)
    const [cartItems, setCartItems] = useState([])

    // let addtocart = (data) => {
    //     setCartItems(prevItems => [...prevItems, data])
    //     // setCartItems([...cartItems, item]);
    //     setCartCount(prevCount => prevCount + 1)
    //     alert("your item is added in your cart")
    // };

    let addtocart = (data) => {
        if (!cartItems.some(item => item.id === data.id)) {
            
            setCartItems(prevItems => [...prevItems, data])
            setCartCount(prevCount => prevCount + 1)
            alert("Your item is added to the cart")
        } else {
            
            alert("This item is already in your cart")
        }
    };
    

    let handlegoback = () => {
        navigate("/")
    }

    let handlecart = () => {
        navigate("/Cart", { state: { cartItems: cartItems } })
    }
    return (
        <div>
            <div style={{ float: "right" }} onClick={handlegoback}>go back</div>
            <div style={{ height: "100px", display: "flex", alignItems: "center" }} className="bookheader" >
                <div >
                    <h1 style={{ color: "rgb(185, 6, 161)" }}>Welcome to Book Worms!</h1>
                </div>
                <div >
                    <span><FaCartShopping className='carticon' onClick={() => handlecart(getitem)} /></span>
                    <span className='cartnumber'>{cartCount}</span>
                    <span><CgProfile className='profileicon' />   </span>

                </div>
            </div>

            {
                getitem.map((data, index) => (
                    <div key={index} className='row bookdeatails' style={{ marginTop: "100px" }}>
                        <div className='col-lg-1 '></div>
                        <div className='col-lg-4 col-md-12 col-sm-12' ><img src={data.cover_image} className='bookdetailsimage' /></div>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <h1>{data.title}</h1>
                            <p>Written by: {data.author}</p>
                            <div><b className='bookdetailsprice'>Price : ₹{data.price}</b></div>
                            <div className='bookdetailsdescription'>{data.description}</div>
                            <div><button className='addtocart' onClick={() => addtocart(data)}><FaCartShopping />  Add to cart</button></div>
                        </div>


                    </div>

                ))
            }


            <div className="row footer">
                <div className='col-lg-2 col-md-0 col-sm-0'></div>
                <div className='col-lg-3 col-md-4 col-sm-12' >
                    <b>Categories</b>
                    <p>Fiction</p>
                    <p>Mystery</p>
                    <p>Fantacy</p>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-12'>
                    <b>For Kids</b>
                    <p>Comics</p>
                    <p>Games</p>
                    <p>Fantacy</p>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-12'>
                    <b>Helps amd Contact</b>
                    <p><IoCallOutline />  +91 123 456 7898 </p>
                    <p>  <CiClock2 /> Mo-Fri 09 to 12</p>
                    <p><IoMail />  abc@gmail.com</p>
                </div>
                <div className='col-lg-1'></div>
                <div style={{ fontSize: "30px", }}><FaInstagram /> <FaFacebook /> <FaTwitter /></div>
            </div>
        </div >

    )
}

export default Bookdetails
