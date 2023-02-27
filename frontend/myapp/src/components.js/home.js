import React from "react";
import { Link } from "react-router-dom";
import App from "../App";
function Home() {
  return (
    <App>
      <div id="home" className="active-section section">
        <section class="banner"></section>

        <section class="homeservice">
          <h1>Experienced Engineers Delivering Quality Solutions</h1>
          <div class="homeservice">
            <h2>Our Services</h2>
            <ul>
              <li>
                <h3>Web Development</h3>
                <p>
                  We offer custom web development services using various
                  frameworks such as React, Angular, and Vue.
                </p>
              </li>
              <li>
                <h3>Database Design</h3>
                <p>
                  We provide database design and development services using
                  various platforms such as MySQL and MongoDB.
                </p>
              </li>
              <li>
                <h3>Other Services</h3>
                <p>
                  We provide alot of more <Link to="/services">services</Link>
                </p>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </App>
  );
}

export default Home;
