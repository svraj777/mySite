import React, { Component } from "react";
import * as firebase from "firebase";

export default class fact extends Component {
  state = {
    fact: []
  };
  componentDidMount() {
    const rootRef = firebase
      .database()
      .ref()
      .child("facts");

    rootRef.on("value", snap => {
      this.setState({
        fact: snap.val()
      });
      console.log(snap.val());
    });
  }
  render() {
    return (
      <div className="fact">
        <div className="container">
          <h3>Facts</h3>
          <p>
            We have worked with mid-to-large enterprises including fortune 100
            companies Globally.
          </p>

          {this.state.fact.map((i, index) => {
            return (
              <div className="fact_box" key={index}>
                <div className="child_box">
                  <p className="fact_number">{i.Clients}</p>
                  <p className="fact_title">Clients</p>
                </div>
                <div className="child_box">
                  <p className="fact_number">{i.employee}</p>
                  <p className="fact_title">Hard Workers</p>
                </div>
                <div className="child_box">
                  <p className="fact_number">{i.Projects}</p>
                  <p className="fact_title">Projects</p>
                </div>{" "}
                <div className="child_box">
                  <p className="fact_number">{i.support_hours}</p>
                  <p className="fact_title">Hours Of Support</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
