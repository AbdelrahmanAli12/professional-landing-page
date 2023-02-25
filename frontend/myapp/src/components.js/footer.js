import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <strong>Email:</strong>thestartupcompanyy@gmail.com
              </li>
              <li>
                <strong>Phone:</strong> 555-555-5555
              </li>
              <li>
                <strong>Address:</strong> 123 Main St, Anytown USA
              </li>
            </ul>
          </div>
          <div className="col-sm-6">
            <h3>Connect with Us</h3>
            <ul className="social-icons">
              <li>
                <a href="https://www.example.com" target="_blank">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/thestartupcompany"
                  target="_blank"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/the_startup_consulting/?igshid=NTdlMDg3MTY%3D"
                  target="_blank"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <p>&copy; 2023 My Website. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
