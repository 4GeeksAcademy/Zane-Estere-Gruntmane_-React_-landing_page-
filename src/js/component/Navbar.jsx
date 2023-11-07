import React from "react";

const Navbar = () => {

    return (

        <nav className="navbar navbar-expand-lg container-fluid bg-dark bg-gradient text-light bg-opacity-25 ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Start to Marvel</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home Coming</a>
                        </li>
                        <li clclassNameass="nav-item">
                            <a className="nav-link" href="#">Learn-About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Take-Away</a>
                        </li>
                        <li clclassNameass="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Talk-through</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
};

export default Navbar;

