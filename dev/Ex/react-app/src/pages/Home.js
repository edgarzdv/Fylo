import React, { Component } from 'react'
import Header from '../cmps/Header'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="home-page">
                    <div className="card flex align-center column text-center">
                        <div className="card-img1"></div>
                        <h2>Access your files, anywhere</h2>
                        <p>The ability to use a smartphone, tablet,
                            or computer to access your account means
                       your files follow you everywhere.</p>
                    </div>

                    <div className="card flex align-center column text-center">
                        <div className="card-img2"></div>
                        <h2>Security you can trust</h2>
                        <p>2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.</p>
                    </div>

                    <div className="card flex align-center column text-center">
                        <div className="card-img3"></div>
                        <h2>Real-time collaboration</h2>
                        <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
                    </div>

                    <div className="card flex align-center column text-center">
                        <div className="card-img4"></div>
                        <h2>Store any type of file</h2>
                        <p>Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.</p>
                    </div>
                </div>
                <div className="productive-section flex justify-center align-center">
                    <div className="section-img"></div>
                    <div>
                        <h2>Stay productive,wherever you are</h2>
                        <p>Never let location be an issue when accessing your files.
                             Fylo has you covered for all of your file storage needs.
                        </p>
                        <p>Securely share files and folders with friends, family
                             and colleagues for live collaboration. No email attachments required.
                        </p>
                        <span>See how Fylo works</span>
                    </div>
                </div>

                <div className="comments-cards flex">
                    <div className="comment-card">
                        <p>
                            Fylo has improved our team productivity
                             by an order of magnitude. Since making
                              the switch our team has become a well-oiled
                               collaboration machine.
                        </p>
                        <div className="user-container">
                            <div className="user-img1"></div>
                                <h2>Satish Patel</h2>
                                <h2>Founder & CEO, Huddle</h2>
                        </div>
                    </div>
                    <div className="comment-card">
                        <p>
                            Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.
                        </p>
                        <div className="user-container">
                            <div className="user-img2"></div>
                                <h2>Bruce McKenzie</h2>
                                <h2>Founder & CEO, Huddle</h2>
                        </div>
                    </div>
                    <div className="comment-card">
                        <p>
                            Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.
                        </p>
                        <div className="user-container">
                            <div className="user-img3"></div>
                                <h2>Iva Boyd</h2>
                                <h2>Founder & CEO, Huddle</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
