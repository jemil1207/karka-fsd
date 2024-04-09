import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { MdLocalShipping } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import Pro from "./Products.json"
import "./First.css"
const First = () => {

    let Products = Pro.Pro
    return (
        <>

            <div className='row'>
                <div className='col-lg-1'></div>
                <div className='col-lg-10'>
                    <nav class="navbar navbar-expand-lg ">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#">icon</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ width: "500px" }} />
                            <apan><button class="btn btn-outline-success" type="submit"><FaSearch /></button></apan>
                            <div class="collapse navbar-collapse" id="navbarScroll">
                                <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
                                    <li class="nav-item">
                                        <a class="nav-link " style={{ marginLeft: '70px' }} >Privacy policy</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" style={{ marginLeft: '20px' }}>Warranty</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" style={{ marginLeft: '20px' }}>Shipping</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" style={{ marginLeft: '20px' }}>Returns</a>
                                    </li>
                                    <div style={{ marginLeft: '150px', fontSize: "20px" }}><FaShoppingCart /> </div>
                                    <div style={{ marginLeft: '20px', fontSize: "20px" }}> | <IoPersonSharp /></div>
                                    <div style={{ marginLeft: '20px', fontSize: "20px" }}> |  <FaHeart /></div>


                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className='col-lg-1'></div>
            </div>

            <hr />
            <div className='row'>
                <div className='col-lg-1'></div>
                <div className='col-lg-1'>The must Read</div>
                <div className='col-lg-1'>News</div>
                <div className='col-lg-2'>Promotion of the mount</div>
                <div className='col-lg-1'>Publish</div>
                <div className='col-lg-2'>Subsscribe to the newletter</div>
                <div className='col-lg-3'><IoCallOutline /> +91 123 456 7890 <button>Request a call</button></div>
                <div className='col-lg-1'></div>

            </div>

            <hr></hr>
            <div className=' row'>
                <div className='col-lg-1'></div>
                <div className='col-lg-5' style={{ marginTop: "150px" }}>
                    <button style={{ padding: "10px" }}>Author of the book</button>
                    <h1 style={{ marginTop: "40px", fontSize: "50px" }}>Eric - Emmanuel Schmitt</h1>
                    <p style={{ marginTop: "40px", fontSize: "20px" }}>Eric-Emmanuel Schmitt's parents were teachers of physical education and sport, and his father later became a physiotherapist and masseur in paediatric hospitals. He was also a French boxing champion while his mother was a medal-winning runner. His grandfather was an artisan jeweller

                    </p>
                    <button style={{ marginTop: "30px", padding: "10px 30px" }}>View his Book</button>
                </div>
                <div className='col-lg-4'>
                    <div className='row'>
                        <div className='col-lg-4'></div>
                        <div className='col-lg-7' style={{ float: "" }}>
                            <img src="/images/emmanuel.jpeg" style={{ height: "600px", width: "400px" }} />

                        </div>
                        <div className='col-lg-1'></div>
                    </div>
                </div>
                <div className='col-lg-1'></div>

            </div>


            <div className='container'>
                <div className='row' style={{ marginTop: "100px" }}>
                    <div className='col-lg-4'>
                        <div style={{ fontSize: "30px", borderRight: "solid 1px black", padding: "20px" }}><MdLocalShipping /> Free shipping Over 50$</div>
                    </div>
                    <div className='col-lg-4'>
                        <div style={{ fontSize: "30px", borderRight: "solid 1px black", padding: "20px" }}><AiFillStar />  Save with loyalty points</div>
                    </div>
                    <div className='col-lg-4'>
                        <div style={{ fontSize: "30px", padding: "20px" }}><BsBook />  Read a few pages</div>
                    </div>
                </div>
            </div>

            <div className='container '>
                <h2 style={{ marginTop: "100px" }}>Selected for you</h2>
                <div className='row '>

                    {Products.map((item, index) => (
                        <div className='col-lg-2 firstall'>
                            <div className=' mx-auto' style={{ display:"flex",textAlign:"center" }}><img className='firstimage mx-auto' style={{width:""}} src={item.cover_image} alt={item.title} /></div>
                            <div className='firsttitle'>{item.title}</div>
                            <div className='firstauthor'>{item.author}</div>
                            <div className='firstprice'> Rs {item.price}</div>
                            <div ><button className='firstadd'>Add to cart</button></div>
                        </div>

                    ))}
                </div>
            </div>


            <div className='conatainer'>
                <div className='row'>
                    <div className='col-lg-1'></div>
                    <div className='col-lg-5'>
                        <h1>Did You Know us?</h1>
                        <p>we are about books and our purpose is to show you the book who can change your life or distract from you in the real world in a better one world works with the much popular just for your delight. if you are about the book , you must subscribe to our newsletter</p>
                        <input placeholder='your name' style={{border:"none", borderBottom:"1px solid black"}} /><br></br>
                        <input placeholder='your name' style={{border:"none", borderBottom:"1px solid black"}} />

                    </div>
                    <div className='col-lg-5'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.0331343332728!2d77.30131742484879!3d8.199416491832457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f95c99dff0af%3A0xe29b031ca0be74bf!2sThingal%20Nagar%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1712568989117!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{width:"100%", height:"500px"}}></iframe>
                    
                    </div>  
                    <div className='col-lg-1'></div>

 
                </div>

            </div>
        </>
    )
}

export default First
