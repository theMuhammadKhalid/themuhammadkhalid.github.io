/* eslint-disable jsx-a11y/img-redundant-alt */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Project extends React.Component {
  render() {
    let {
      projectTitle,
      projectDescription,
      projectLink,
      writtenIn,
    } = this.props;

    return (
      <div className="project">
        <p className="projectTitle">{projectTitle}</p>
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
          title={"Show " + projectTitle + " Project"}
        >
          View Project
        </a>
      </div>
    );
  }
}

export default Project;
