import React from "react";
import { Link } from "react-router";

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <img src={require("assets/img/gts_logo.png")} />
                <h1>Basic Layout</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                {this.props.children}
            </div>
        );
    }
}
export default Layout;
