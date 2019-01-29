import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <h1>A|R</h1>
          </div>
        </div>

        <div class="row">
          <div
            class="col-sm-3 mr-3 ml-3"
            style={{ background: "rgb(142, 184, 222)" }}
          >
            <h4>Who?</h4>

            <p class="lead">
              <strong>Adam Roe</strong>
              <small> BSc (Hons)</small>
            </p>

            <p class="block-quote">
              I'm a 2:1 graduate in computing from the University of Central
              Lancashire.
            </p>

            <p class="block-quote">
              With a passion for web development, I'm always experimenting with
              new styles and learning modern technologies/practices.
            </p>
          </div>

          <div class="col-sm-3 mr-3 ml-3" style={{ background: "#4cd646" }}>
            <h4>Why?</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
