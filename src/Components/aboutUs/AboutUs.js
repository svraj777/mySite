import React, { Component } from "react";
import * as firebase from "firebase";
export default class AboutUs extends Component {
  state = {
    test: []
  };
  componentDidMount() {
    const rootRef = firebase
      .database()
      .ref()
      .child("about us");

    rootRef.on("value", snap => {
      //const speedRef = rootRef.child("speed");

      this.setState({
        test: snap.val()
      });
    });
  }
  render() {
    {
      console.log(this.state.test, "about_us");
    }
    return (
      <div>
        <div className="container" id="section3">
          <h3>about us</h3>
          <p>
            Dotjs is a Mobile and Web Application Development company that
            offers custom software development services on diverse technology
            platforms, like PHP, NodeJs, React Native, Java, .Net, AngularJs,
            and Mobile. With rich and varied experience of 3 years in software
            development and stringent quality standards, we offer utmost
            qualitative, on-time and cost-effective software solutions. We serve
            clientele across the industries and Development Center in India with
            a workforce of 30+ IT professionals.
          </p>
          {this.state.test.map((i, index) => {
            return (
              <div className="about section" key={index}>
                <h4>{i.title}</h4>
                <p>{i.details}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
