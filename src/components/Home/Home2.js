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
              <b className="purple"> Data Practitioner </b> with <b className="purple"> 2 years </b> of <b className="purple"> Data Analysis </b> experience in telecommunication industry.              <br />
              <br />I have expertise in languages such as 
                <b className="purple"> SQL, Python, JavaScript </b> and <b className="purple"> C </b>, and I have mainly worked
                 with 
                <b className="purple"> structured data </b> on 
                <b className="purple"> warehouses </b> and
                <b className="purple"> OLAP systems </b>.
              <br />
              <br />
                I have familiriased myself with data querying, processing and orchestration tools such as
                  <b className="purple"> Airflow, PySpark </b> and 
                  <b className="purple"> Trino </b> and table formats like
                  <b className="purple"> Apache Iceberg </b> and
                  <b className="purple"> Delta </b>
                on cloud platforms including
                <b className="purple"> AWS, Azure </b> and <b className="purple"> Databricks. </b>
              <br />
              <br />
              Besides my main pursuit, I'm also honing my skills in 
              <b className="purple"> machine learning</b> and 
              <b className="purple"> web development</b> while competing in 
              <b className="purple"> hackathons</b> to challenge myself and make memories. 
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
