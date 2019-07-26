import React, { Component } from "react";

import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import dummyText from "./DummyText";
import Slider from "./Components/slider/slider";
import WhoWeAre from "./Components/who_we_are/WhoWeAre";
import About from "./Components/aboutUs/AboutUs";
import Development from "./Components/Development/development";
import Fact from "./Components/facts/fact";
import Testimonials from "./Components/testimonials/testimonial";
import ContectUs from "./Components/contectUs/contectUs";

import * as firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyB4v0FA4PYlHORkt6ywAJM-i9Od38VGb0M",
  authDomain: "fir-starter-d3727.firebaseapp.com",
  databaseURL: "https://fir-starter-d3727.firebaseio.com",
  projectId: "fir-starter-d3727",
  storageBucket: "",
  messagingSenderId: "319841544902",
  appId: "1:319841544902:web:ca6b8aa6b3d629df"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
class App extends Component {
  state = {
    speed: 10
  };
  componentDidMount() {
    const rootRef = firebase
      .database()
      .ref()
      .child("speed");

    rootRef.on("value", snap => {
      //const speedRef = rootRef.child("speed");
      console.log(snap);
      this.setState({
        speed: snap.val()
      });
    });
  }
  render() {
    return (
      <div className="App">
        {/* <div>{this.state.speed}</div> */}
        <Navbar />

        <Slider title="Section 1" dark={true} id="section1" />
        <WhoWeAre title="Section 2" dark={false} id="section2" />
        <About title="Section 3" dark={true} id="section3" />

        <Development
          title="Section 4"
          subtitle={dummyText}
          dark={false}
          id="section4"
        />
        <Fact />
        <Testimonials />
        <ContectUs />
        <Section
          title="Section 5"
          subtitle={dummyText}
          dark={true}
          id="section5"
        />
      </div>
    );
  }
}

export default App;

// var firebaseConfig = {
//   apiKey: "AIzaSyB4v0FA4PYlHORkt6ywAJM-i9Od38VGb0M",
//   authDomain: "fir-starter-d3727.firebaseapp.com",
//   databaseURL: "https://fir-starter-d3727.firebaseio.com",
//   projectId: "fir-starter-d3727",
//   storageBucket: "",
//   messagingSenderId: "319841544902",
//   appId: "1:319841544902:web:ca6b8aa6b3d629df"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
