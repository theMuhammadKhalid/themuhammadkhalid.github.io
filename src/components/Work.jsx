/* eslint-disable no-unused-vars */
/* eslint-disable no-eval */
import React from "react";
import { Helmet } from 'react-helmet';

// import Components
import Header from "./Header.jsx";
import Project from "./Project.jsx";
import Footer from "./Footer.jsx";

// import Icons
import { faJs, faPython } from "@fortawesome/free-brands-svg-icons";

// import project Images
import stickyNotesImage from "../images/sticky-notes.png";
import planeImage from "../images/plane.png";
import hgKeyMouseImage from "../images/hand-gesture-key-mouse-logo.png";
var pImages = { hgKeyMouseImage, planeImage, stickyNotesImage };

// import json file of projectInfo
const { projectsInfo } = require("./projectsInfo.json");

// set icons name
// eslint-disable-next-line no-unused-vars
const javascript = faJs;
// eslint-disable-next-line no-unused-vars
const python = faPython;

class Work extends React.Component {
  state = {
    filterValue: "Show All",
  };

  render() {
    let filterValues = ["Show All", "Python", "JavaScript"];
    let { filterValue } = this.state;

    return (
      <React.Fragment>
         <Helmet>
          <title>Work | Muhammad Khalid</title>
        </Helmet>
        <div id="work">
          <Header title="PROJECTS" />
          <div id="filterContainer">
            {filterValues.map((value, index) => (
              <button
                key={index}
                onClick={() => {
                  this.setState({ filterValue: value });
                }}
                className={
                  value === filterValue ? "filterBtn active" : "filterBtn"
                }
                title = {value === "Show All" ? "Show All Projects" : "Show Only "+value+" Projects"}
              >
                {value}
              </button>
            ))}
          </div>
          <div id="projects">
            {projectsInfo
              .filter((cValue) => {
                if (filterValue === "Show All") {
                  return true;
                } else {
                  return (
                    cValue.writtenIn.indexOf(filterValue.toLowerCase()) > -1
                  );
                }
              })
              .map((value, index) => {
                let {
                  projectTitle,
                  projectLink,
                  projectImg,
                  writtenIn,
                  projectDescription,
                } = value;

                return (
                  <Project
                    projectTitle={projectTitle}
                    projectDescription={projectDescription}
                    projectImg={pImages[projectImg]}
                    projectLink={projectLink}
                    writtenIn={writtenIn.map((value) => eval(value))}
                    key={index}
                  />
                );
              })}
          </div>
          <Footer />
        </div>
      </React.Fragment>
    );
  } // end render() method
}

export default Work;
