import React from 'react'
import "./FlightOffer.css"
import { useNavigate } from 'react-router-dom'
import Footer from '../../Footer/Footer'

function FlightOffer() {

    const images = [
        "data:image/avif;base64,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",
        "data:image/avif;base64,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",
        "data:image/avif;base64,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",
        "data:image/avif;base64,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",

    ]
    const navigate = useNavigate()
    function handleSpanDiv() {
        navigate("justsomething")
    }
    return (
        <>
            <div className='parentUni'>
                <div className='ComponentUni'>
                    <div className="makeFlex blackText appendBottom20">
                        <h2>Offers</h2>

                        <div className="makeFlex perfectContainer">
                            <ul id='YesNoShow' className='makeFlex nrlText superOffersTab appendLeft30'>
                                <li>ALL</li>
                                <li>FLIGHTS</li>
                                <li>HOTELS</li>
                                <li>HOLIDAYS</li>
                                <li>RAILS</li>
                                <li>CABS</li>
                                <li>BANKOFFERS</li>
                            </ul>
                        </div>
                        <div className="pushRight"><span>VIEW ALL</span></div>
                    </div>
                    <div className="superOffers">
                        {images.map((details) => (
                            <div className="childSuperOffer">
                                <img src={details} alt="" />
                                <div className='insidechildsuperoffer'>
                                    <h2>Book Super Cool Stays</h2>
                                    <span onClick={handleSpanDiv} className='grabOffer'>Grab Offer Now</span>
                                </div>
                            </div>
                        ))
                        }

                    </div>



                </div>

            </div >
        </>

    )
}

export default FlightOffer
