import React from "react";
import "../../App.css";
import logo from '../../assets/img/logo5.png'

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <p>Clarusway Web Design, Copyright &copy; 2020</p>
        <br />
        <a href="http://www.clarusway.com" target="_blank">
          <img
            src={logo}
            width="200"
            height="40"
            alt=""
          />
        </a>
      </footer>
    </div>
  );
};

export default Footer;
