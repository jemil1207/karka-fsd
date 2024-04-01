import React from 'react'
import { useNavigate } from 'react-router-dom'

const Construction = () => {

    let navigate = useNavigate()
    let handlegoback = () => {
        navigate("/")
    }


    return (
        <>
            <div onClick={handlegoback} style={{ float: "right", cursor: "pointer" }} className='bookdetailsgoback'>Go back </div>

            <div className='consheader'>
                <h1>The About page is under construction!</h1>
            </div>
        </>
    )
}

export default Construction
