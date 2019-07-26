import React, { Component } from "react";
import logo from "../logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import * as firebase from "firebase";

export default class Navbar extends Component {
  state = {
    menu: []
  };
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  componentDidMount() {
    const rootRef = firebase
      .database()
      .ref()
      .child("menu");

    rootRef.on("value", snap => {
      //const speedRef = rootRef.child("speed");
      console.log(snap);
      this.setState({
        menu: snap.val()
      });
      console.log(this.state.menu);
    });
  }

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <img
            src={logo}
            className="nav-logo"
            alt="Logo"
            onClick={this.scrollToTop}
          />
          <ul>
            {this.state.menu.map((i, index) => {
              //   console.log("section", index);
              return (
                <li className="nav-item" key={index}>
                  <Link
                    activeClass="active"
                    to={"section" + index}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                  >
                    {i}
                  </Link>
                </li>
              );
            })}
          </ul>
          {/* <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 1
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 2
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 3
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 4
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section5"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 5
              </Link>
            </li>
          </ul> */}
        </div>
      </nav>
    );
  }
}
