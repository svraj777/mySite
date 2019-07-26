import React, { Component } from "react";
import * as firebase from "firebase";

export default class development extends Component {
  state = {
    devlopment: []
  };
  componentDidMount() {
    const rootRef = firebase
      .database()
      .ref()
      .child("Development");

    rootRef.on("value", snap => {
      this.setState({
        devlopment: snap.val()
      });
      console.log(snap.val(), this.state.devlopment);
    });
  }

  render() {
    {
      console.log(this.state.devlopment);
    }
    return (
      <div>
        <div className="container" id="section4">
          <h3>SOFTWARE DEVELOPMENT SERVICES</h3>
          <p>
            We deliver customized solutions across the globe for a variety of
            clients belonging from start-up levels to big enterprises. With vast
            domain knowledge and in-depth technological expertise, we are
            capable enough to cater needs of our valuable clientele across the
            globe. We offer services, but aren’t limited to:
          </p>
          {this.state.devlopment.map((i, index) => {
            return (
              <div className="development_box" key={index}>
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
