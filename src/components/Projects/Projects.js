import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import HobbyQuest from "../../Assets/Projects/HobbyQuest.png";
import mindcapsule from "../../Assets/Projects/mindcapsule.jpg";
import AWSlakehouse from "../../Assets/Projects/Building_AWS_Lakehouse.png";

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
              imgPath={AWSlakehouse}
              isBlog={false}
              title="Building AWS Lakehouse"
              subtitle="Personal Project"
              
              description="Personal project to build a data lakehouse on AWS using EC2, S3, Airflow, DBT and Medallion Architecture.
              Initially raw data is ingested into PostgreSQL database on EC2 instance using Airflow before being transformed as parquet files
              and stored in S3 bucket. DBT is then used to create bronze, silver and gold tables and transform the data for analysis and reporting.
              Cataloging and governance is done using AWS Glue and Athena is used to query the data."
              ghLink="https://github.com/Buya0720/buya_capstone"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mindcapsule}
              isBlog={false}
              title="Mind Capsule"
              subtitle = "UNIHACK 2025"
              description="Mind Capsule is a web application designed to help individuals better understand and manage their emotions, using principles from Cognitive Behavioral Therapy (CBT). 
              It uses JavaScript and React in the front end, and Node.js and Express in the backend. It also uses MongoDB for the database."
              ghLink="https://github.com/Buya0720/sirius_app"
              demoLink="https://devpost.com/software/sirius-gqlych"
              websiteLink="https://mindcapsule-sirius.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HobbyQuest}
              isBlog={false}
              title="HobbyQuest"
              subtitle="SYNCS HACK 2024 - Best Technical Feature"
              
              description="HobbyQuest is an application designed for students to create and host events based on shared interests in the same area. 
              The app uses K-nearest Neighbors algorithm, flask and Python for the backend, and basic HTML and CSS for the frontend.
              it "
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
