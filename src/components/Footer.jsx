import React from "react";
import { Link } from "react-router-dom";

// import Icons
import {
  faAngleDoubleLeft,
  faAngleDoubleUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <footer id="footer">
          <Link to="/" title="Back to home">
            <FontAwesomeIcon icon={faAngleDoubleLeft} /> home
          </Link>
          <a href="#header" title="Go to top">
            top <FontAwesomeIcon icon={faAngleDoubleUp} />
          </a>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
