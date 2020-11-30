/* eslint-disable jsx-a11y/img-redundant-alt */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Project extends React.Component {
  render() {
    let {
      projectTitle,
      projectDescription,
      projectImg,
      projectLink,
      writtenIn,
    } = this.props;

    return (
      <div className="project">
        <img
          src={projectImg}
          alt={projectTitle + " Picture"}
          className="projectImg leftSide"
        />

        <div className="rightSide">
          <h2 className="projectTitle">{projectTitle}</h2>
          <p className="projectDescription">{projectDescription}</p>
          <div className="writtenIn">
            <span>Written in</span>
            {writtenIn.map((value, index) => (
              <FontAwesomeIcon
                icon={value}
                key={index}
                className="writtenInIcons"
              />
            ))}
          </div>
          <a
            className="viewProject"
            href={projectLink}
            target="_blank"
            rel="noreferrer"
          >
            View Project
          </a>
        </div>
      </div>
    );
  }
}

export default Project;