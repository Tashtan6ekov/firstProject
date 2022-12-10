import React from "react";
import "./footer.css";

const Footer = () => (
  <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left bg=black">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text-uppercase proverka">проверяем стили css</h5>
          <h5 className="text-uppercase proverka">текст написан ии</h5>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad dicta
            error, nihil iste recusandae fugiat nemo quia repellendus odio
            corrupti nesciunt impedit ea in cumque voluptates labore
            consequuntur fugit eligendi quos voluptate esse ducimus quisquam
            quae quod? Nobis, magnam quisquam?
          </p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">portal 1</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#!">Link 1</a>
            </li>
            <li>
              <a href="#!">Link 2</a>
            </li>
            <li>
              <a href="#!">Link 3</a>
            </li>
            <li>
              <a href="#!">Link 4</a>
            </li>
          </ul>
        </div>

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">portal 2</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#!">Link 1</a>
            </li>
            <li>
              <a href="#!">Link 2</a>
            </li>
            <li>
              <a href="#!">Link 3</a>
            </li>
            <li>
              <a href="#!">Link 4</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center py-3">
      © 2022 Copyright:
      <a href="https://www.instagram.com/_elmannn/">Elaman.com</a>
    </div>
  </footer>
);

export default Footer;
