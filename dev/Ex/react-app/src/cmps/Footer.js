import React from 'react'

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="logo"></div>
            <div className="footer-contact flex justify-center align-baseline">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                     </p>
                <ul>
                    <li>+1-543-123-4567</li>
                    <li>example@fylo.com</li>
                </ul>

                <ul>
                    <li>About Us</li>
                    <li>Jobs</li>
                    <li>Press</li>
                    <li>Blog</li>
                </ul>
                <ul>
                    <li>Contact Us</li>
                    <li>Terms</li>
                    <li>Privacy</li>
                </ul>
                <ul className="social-icones">
                    <li className="facebook"></li>
                    <li className="twitter"></li>
                    <li className="instagram"></li>
                </ul>
            </div>
        </div>
    )
}
