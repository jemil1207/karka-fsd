import { useLocation, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import Book from "./Book.json";
import { IoCallOutline } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Homepage = () => {
    let data = Book.Book;
    let navigate = useNavigate()


    let handlebookclik = (item) => {
        let snditem = [item]
        navigate("/Bookdetails", { state: { senditem: snditem } })

    }


    const [value, setValue] = useState("")

    let handleabout = () => {
        navigate("/Construction")
    }


    let handlecategory1 = () => {
        setValue("Fiction")
    }

    let handlecategory2 = () => {
        setValue("Mystery")
    }
    let handlecategory3 = () => {
        setValue("Fantasy")
    }
    const handlecategory4 = () => {
        setValue(["Fiction", "Mystery", "Fantasy", "Thriller"]);
    };

    const fil = value === "" ? data : data.filter((item) => value.includes(item.category));

    return (

        <>


            <div >

                <nav class="navbar navbar-expand-lg " style={{ color: "rgb(185, 6, 161)", }}>
                    <div class="container-fluid">
                        <h1 class="text-rgb(185, 6, 161)" href="#">Book Worms!</h1>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link text-rgb(185, 6, 161) home " aria-current="page" onClick={handlecategory4}>Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link   text-rgb(185, 6, 161)  about" onClick={handleabout} >About Us</a>
                                </li>
                                {/* <li class="nav-item">
                                    <a class="nav-link text-rgb(185, 6, 161)" onClick={handlecontact}>Contact</a>
                                </li> */}
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle text-rgb(185, 6, 161)  category" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Categories
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" onClick={handlecategory1}>Fiction</a></li>
                                        <li><a class="dropdown-item" onClick={handlecategory2}>Mystery</a></li>
                                        <li><a class="dropdown-item" onClick={handlecategory3}>fantacy</a></li>
                                        <li><a class="dropdown-item" onClick={handlecategory4}>All</a></li>

                                        {/* <li><a class="dropdown-item" href="#">Something else here</a></li> */}
                                    </ul>
                                </li>
                                {/* <li class="nav-item">
                                    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                                </li> */}
                            </ul>
                            <form class="d-flex" role="search">
                                <input class="form-control me-4 search" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-rgb(185, 6, 161) text-rgb(185, 6, 161) searchbtn" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div><hr></hr>

            {/* <div className='book'> */}

            <div className="row homeitem">
                {fil.map((item, index) => (
                    <div className='col-lg-2 col-md-4 col-sm-6 allbook' key={index}>
                        <img src={item.cover_image} alt={item.title} className="homeimage" onClick={() => handlebookclik(item)} />
                        <div className='hometitle'><b>{item.title}</b> </div>
                        <div className='homeauthor'> {item.author}</div>
                        <div className='homeprice'> <b> Rs {item.price}</b></div>
                    </div>
                ))}
            </div>
            {/* </div > */}

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
                    <p> <CiClock2 />  Mon-Fri 09Am to 12Pm </p>
                    <p><IoMail />  abc@gmail.com</p>
                </div>
                <div className='col-lg-1'></div>
                <div style={{ fontSize: "30px", }}><FaInstagram /> <FaFacebook /> <FaTwitter /></div>
            </div>

        </>
    );
}

export default Homepage;

