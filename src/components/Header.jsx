import React from "react";

class Header extends React.Component {
  render() {
    let { title } = this.props;

    return (
      <React.Fragment>
        <header id="header">
          <h1>{title}</h1>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
