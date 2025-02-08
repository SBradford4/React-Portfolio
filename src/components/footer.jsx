import React from 'react'
import { FaGithub } from "react-icons/fa";
import { NavLink } from 'react-router';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer">
                    <ul>
                        <li><NavLink to="https://github.com/SBradford4" target='_blank'><FaGithub /></NavLink></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;