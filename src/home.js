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
            <h5>
              Adam Roe
              <small> BSc (Hons)</small>
            </h5>

            <p>
              I'm a 2:1 graduate in computing from the University of Central
              Lancashire.
            </p>

            <p>
              With a passion for web development, I'm always experimenting with
              new styles and learning modern technologies/practices.
            </p>

            <p>
              <small>
                Skills and details can be found from the top-right menu
              </small>
            </p>
          </div>

          <div class="col-sm-3 mr-3 ml-3" style={{ background: "#4cd646" }}>
            <h5>Projects during university:</h5>

            <ul class="list-group">
              <li class="list-group-item">
                <p>Social Network</p>
              </li>

              <li class="list-group-item">
                <p>Shopping Site</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
