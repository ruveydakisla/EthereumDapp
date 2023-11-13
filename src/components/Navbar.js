import React from "react";
import { Link, Router } from "react-router-dom";

const Navbar=()=>{
    return(
        <div>
            <Router>
                <nav className="nav">
                    <ul>
                        <Link to='/SignIn'>
                            <li>
                                SignIn
                            </li>
                        </Link>
                        <Link to='/SignUp'>
                            <li>
                                SignUp
                            </li>
                        </Link>
                    </ul>
                </nav>
            </Router>
        </div>
    )
}