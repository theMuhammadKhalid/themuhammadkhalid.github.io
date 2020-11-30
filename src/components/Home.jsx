import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.professionRef = React.createRef();
    this.state = {
      professions: ["Computer Engineer", "Animator", "Programmer"],
    };
  } // end constructor()

  render() {
    let { professions } = this.state;

    return (
      <React.Fragment>
         <Helmet>
          <title>Home | Muhammad Khalid</title>
        </Helmet>
        <main id="homeMain">
          <p>
            Hi there, I'm{" "}
            <span id="name" title="Muhammad Khalid">
              Muhammad Khalid
            </span>
          </p>
          <p>
            I'm a{" "}
            <span
              id="profession"
              title={professions[0]}
              ref={this.professionRef}
            >
              {professions[0]}
            </span>
          </p>
          <p>
            <Link
              to="/work"
              className="homeA"
              title="Click this for view my work"
            >
              View my work
            </Link>{" "}
            and you can contact me via{" "}
            <a href="mailto:themuhammadkhalid@gmail.com" className="homeA">
              mail
            </a>{" "}
            and you can also follow me by checking my{" "}
            <a
              href="https://linktr.ee/muhammadkhalid"
              className="homeA"
              title="Click this or go to https://linktr.ee/muhammadkhalid"
              target="_blank"
              rel="noreferrer"
            >
              linktree
            </a>
          </p>
        </main>
      </React.Fragment>
    );
  } // end render() method

  addAnimation(professionWidth) {
    return `
    #profession{
      display: inline-flex;
      overflow: hidden;
      white-space: nowrap;
      border-right: 3px solid #333333;
      animation: animateProfession 10s; 
    }

    @keyframes animateProfession {
      0%{width: 0px;}
      20%{width: ${professionWidth + 5}px;}
      70%{width: ${professionWidth + 5}px;}
      85%{width: 0px;}
      100%{width: 0px;}}
   `;
  } // end addAnimation() method

  changeProfessionListener(styleElement, professionNode) {
    let { professions } = this.state;
    // rotate array (i.e. remove item from last and put in beginning)
    professions.unshift(professions.pop());

    styleElement.innerHTML = "";

    this.setState({ professions: professions });

    styleElement.innerHTML = this.addAnimation(professionNode.offsetWidth);
  } // end changeProfessionListener() method

  componentDidMount() {
    const professionNode = this.professionRef.current;

    // Inject CSS using <style> element in Head
    var styleElement = document.createElement("style");
    styleElement.setAttribute("id", "professionStyle");
    professionNode.parentNode.parentNode.appendChild(styleElement);

    styleElement.innerHTML = this.addAnimation(professionNode.offsetWidth);

    professionNode.addEventListener(
      "animationend",
      this.changeProfessionListener.bind(this, styleElement, professionNode)
    );
    window.addEventListener(
      "resize",
      this.changeProfessionListener.bind(this, styleElement, professionNode)
    );
  } // end componentDidMount() method

  componentWillUnmount() {
    const professionNode = this.professionRef.current;
    var styleElement = document.getElementById("professionStyle");

    professionNode.removeEventListener(
      "animationend",
      this.changeProfessionListener.bind(this, styleElement, professionNode)
    );
    window.removeEventListener(
      "resize",
      this.changeProfessionListener.bind(this, styleElement, professionNode)
    );
  } // end componentWillUnmount() method
} // end class

export default Home;
