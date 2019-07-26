import React, { Component } from "react";
import * as firebase from "firebase";
export default class contectUs extends Component {
  state = {
    name: "",
    email: "",
    contect: "",
    skype: "",
    location: "",
    massage: "",
    contry: ""
  };
  componentDidMount() {
    const db = firebase.firestore();

    function storeData() {
      db.collection("facts")
        .doc("speed")
        .set({
          name: "test",
          data: "yes"
        })
        .than(function() {
          console.log("added");
        })
        .catch(function() {
          console.error("nop");
        });
    }
  }
  handleUsernameChange = e => {
    this.setState({
      name: e.target.value
    });
  };
  handleEmailChange = e => {
    this.setState({
      email: e.target.value
    });
  };
  handleContectChange = e => {
    this.setState({
      contect: e.target.value
    });
  };
  handleSkypeChange = e => {
    this.setState({
      skype: e.target.value
    });
  };
  handlelocationChange = e => {
    this.setState({
      location: e.target.value
    });
  };
  handleMassageChange = e => {
    this.setState({
      massage: e.target.value
    });
  };

  handleContryChange = e => {
    this.setState({
      contry: e.target.value
    });
  };
  HandleSubmit = e => {
    console.log("submit");
    console.log(`${this.state.name} ${this.state.email} `);
    e.preventDefault();
  };
  render() {
    return (
      <div className="contect_us">
        <div className="container">
          <h3>CONTACT US</h3>
          <form onSubmit={this.HandleSubmit}>
            <div>
              <label>name </label>
              <input
                type="text"
                value={this.state.name}
                onChange={this.handleUsernameChange}
              />
            </div>
            <div>
              <label>email address </label>
              <input
                type="text"
                value={this.state.email}
                onChange={this.handleEmailChange}
              />
            </div>
            <div>
              <label>contect number </label>
              <input
                type="text"
                value={this.state.contect}
                onChange={this.handleContectChange}
              />
            </div>
            <div>
              <label>skype </label>
              <input
                type="text"
                value={this.state.skype}
                onChange={this.handleSkypeChange}
              />
            </div>
            <div>
              <label>location/address </label>
              <input
                type="text"
                value={this.state.location}
                onChange={this.handlelocationChange}
              />
            </div>
            <div>
              <label>massage </label>
              <textarea
                type="text"
                value={this.state.massage}
                onChange={this.handleMassageChange}
              />
            </div>
            <div>
              <label>contry </label>
              <select
                value={this.state.contry}
                onChange={this.handleContryChange}
              >
                <option value="india">india</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </select>
            </div>

            <button value="Submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
