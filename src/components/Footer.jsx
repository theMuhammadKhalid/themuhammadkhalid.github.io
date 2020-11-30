import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <footer id="footer">
          <Link to="/">{"<< "}home</Link>
          <a
            href="https://linktr.ee/muhammadkhalid"
            title="Click this or go to https://linktr.ee/muhammadkhalid"
            target="_blank"
            rel="noreferrer"
          >
            linktree{" >>"}
          </a>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;