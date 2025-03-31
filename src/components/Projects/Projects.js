import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import HobbyQuest from "../../Assets/Projects/HobbyQuest.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HobbyQuest}
              isBlog={false}
              title="HobbyQuest"
              description="HobbyQuest is an application specifically designed for students that creates and hosts events based on shared interests in the same area. The app's intelligent algorithms scan available students in a specific location and automatically generate events tailored to their shared hobbies and time availabilities."
              ghLink="https://github.com/rxsi1920/Hobbyquest"
              demoLink="https://devpost.com/software/hobbyquest"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HobbyQuest}
              isBlog={false}
              title="HobbyQuest"
              description="HobbyQuest is an application specifically designed for students that creates and hosts events based on shared interests in the same area. The app's intelligent algorithms scan available students in a specific location and automatically generate events tailored to their shared hobbies and time availabilities."
              ghLink="https://github.com/rxsi1920/Hobbyquest"
              demoLink="https://devpost.com/software/hobbyquest"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
