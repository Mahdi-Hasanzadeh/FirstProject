import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./components/counter.jsx";
import Counters from "./components/counters.jsx";
import FirstProject from "./components/project1.jsx";

// ReactDOM.render(<Counters />, document.getElementById("root"));

function Header() {
  return (
      <div className="headerContainer">
        <img src="./logo192.png" alt="react-logo" className="img"/>
        <ul className="li">
            <li>Pricing</li>
          <li>Menu</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
  );
}
function MainContent() {
  return (
    <div className="Main">
         <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>I want to learn react to get a job in foriegn country</li>
        <li>It is easy to learn by working hard</li>
        <li>It's a popular library in javascript</li>
      </ol>
    </div>
  );
}
function Footer() {
  return (
    <footer className="footer">
      <p>"c 2022 "Hasanzadeh" development. All rights reserved."</p>
    </footer>
  );
}
function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
