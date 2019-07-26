import React, { Component } from "react";
import "./WhoWeAre.css";
import * as firebase from "firebase";

export default class WhoWeAre extends Component {
  state = {
    details: []
  };
  componentDidMount() {
    const rootRef = firebase
      .database()
      .ref()
      .child("WhoWeAre")
      .child("discription");

    rootRef.on("value", snap => {
      //const speedRef = rootRef.child("speed");
      console.log(snap.val());
      this.setState({
        details: snap.val()
      });
    });
  }

  render() {
    return (
      <section className="Who_we_are" id="section2">
        <div className="container">
          {/* <img src="" alt="" /> */}
<h2>who we are</h2>
          {this.state.details.map((i, index) => {
            console.log(i);
            return (
              <div className="box" key={index}>
                <i
                  className="fa fa-diamond"
                  aria-hidden="true"
                  style={{ fontSize: 26 }}
                />
                <h3>{i.title}</h3> <p>{i.discription}</p>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}
