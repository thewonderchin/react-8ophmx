import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div className="containerfluid">
      <div id="nav" className="containerfluid">
         <nav class="navbar navbar-expand-md bg-dark navbar-dark">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
           </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
            </ul>
          </div>
        </nav> 
      </div>
      <div id="heroPage" className="containerfluid text-center">
        <div className="jumbotron">
          <h1 className="display-4">Hello, world!</h1>
          <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-4"></hr>
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
            <a classNmae="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </p>
        </div>
      </div>
      <div id="footer" className="containerfluid">
      </div>
    </div>
  );
}
