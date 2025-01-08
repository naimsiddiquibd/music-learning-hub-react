import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer  text-base-content mt-24">
                <aside>
                    <img src="/logo.svg" alt="" />
                    <p>
                        Music Learning Hub
                        <br />
                        Providing reliable music learning service
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Guitar</a>
                    <a className="link link-hover">Piano</a>
                    <a className="link link-hover">Drums</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Instructors</a>
                    <a className="link link-hover">Lesson</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>

            </footer>
            <aside className='text-center mt-10 py-10'>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Music Learning</p>
            </aside>
        </div>
    );
};

export default Footer;