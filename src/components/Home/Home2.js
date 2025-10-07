import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              My Professional <span className="purple"> Intro </span>
            </h1>
            <p className="home-about-body">
              I am a 
              <b className="purple"> Data Engineer </b> with over <b className="purple"> 3 years </b> of experience in telecommunication and sports data.              <br />
              <br />I have expertise in languages  
                <b className="purple"> SQL</b>,<b className="purple"> Python</b>,<b className="purple"> Shell</b> and <b className="purple"> C++ </b>.
              <br />
                 I have mainly worked
                 on 
                <b className="purple"> building pipeline </b> on 
                <b className="purple"> modelling OLAP warehouses </b> 
                <b className="purple"> orchestrating ETL/ELT workflows </b> and
                <b className="purple"> building interactive BI dashboards </b>.
              <br />
                I have experience with big data tools, and distributed and real-time systems such as
                  <b className="purple"> Spark </b>, 
                  <b className="purple"> Trino </b>, and
                  <b className="purple"> Kafka </b>.
              <br />
                Through my previous jobs and personal projects, I have worked on cloud platforms such as
                <b className="purple"> AWS, Azure, Databricks </b> and <b className="purple"> Snowflake. </b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/buya0720"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/buyandelger/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/buyyyya/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineInstagram />
                </a>
              </li>

            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
