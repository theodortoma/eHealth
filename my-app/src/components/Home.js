import React from 'react';
import '../App.css';
import {Component} from 'react';
import {Link} from "react-router-dom";
import logo from "../logo.png";

class Home extends Component {

    render() {
        return (
            <div>

                <img className="Logo" src={logo} />
                <div className="MenuBarContainer">
                    <Link className="MenuButtonLeft" to="/pharmacy">
                        Pharmacy Reports
                    </Link>
                    <Link className="MenuButtonMiddle" to="paraclinical">
                        Paraclinical Reports
                    </Link>
                    <Link className="MenuButtonMiddle" to="recovery">
                        Recovery Reports
                    </Link>
                    <Link className="MenuButtonMiddle" to="dental">
                        Dental Medicine Reports
                    </Link>
                </div>
            </div>
        )
    }
}

export default Home;
