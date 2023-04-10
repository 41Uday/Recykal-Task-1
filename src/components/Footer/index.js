import React from "react"

import {BsFacebook,BsTwitter,BsYoutube,BsLinkedin} from 'react-icons/bs'

import {FiInstagram} from 'react-icons/fi'

import './index.css'

const Footer = ()  => {
    return (
        <div>
        <div className="footer-container">
            <div>
                {/* <h4>Products</h4> */}
                <ul className="footer-list-container">
                    <li className="f-list-products">Products</li>
                    <li className="f-list-items">Marketplace</li>
                    <li className="f-list-items">Sustainability</li>
                    <li className="f-list-items">DRS</li>
                    <li className="f-list-items">EPR</li>
                    <li className="f-list-items">Smart Center</li>
                </ul>
            </div>
            <div>
                {/* <h4>Products</h4> */}
                <ul className="footer-list-container">
                    <li className="f-list-products">Company</li>
                    <li className="f-list-para-1">About us</li>
                    <li className="f-list-para-1">Life at Recykal</li>
                    <li className="f-list-para-1">Resources</li>
                    <li className="f-list-para-1">Contact Us</li>
                    <li className="f-list-para-1">
                                Support@recykal.com
                                <br />
                                +91 779 999 6255
                                </li>
                </ul>
            </div>
            <div>
                <p className="f-list-para-3">For the latest deals & </p>
                <p className="f-list-para-2 ">updates, Stay tuned to</p>
                <div className="f-circle-container">
                    <div className="f-circle">
                            <BsFacebook />
                    </div>
                    <div className="f-circle">
                            <FiInstagram />
                    </div>
                    <div className="f-circle">
                            <BsTwitter />
                    </div>
                    <div className="f-circle">
                            <BsYoutube />
                    </div>
                    <div className="f-circle">
                            <BsLinkedin />
                    </div>
                </div>
            </div>
        </div>
        <div className="f-last-container">
                <p className="f-last-para">	Privacy Policy     |     Terms & Conditions © Rapidue Technologies Pvt. Ltd. All rights reserved.</p>
        </div>
        </div>
    )
}

export default Footer