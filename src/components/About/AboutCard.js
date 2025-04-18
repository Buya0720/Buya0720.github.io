import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { AiOutlineLike } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I'm <span className="purple">Buya Batu </span>
            from <span className="purple"> Sydney, </span> originally from <span className="purple"> Ulaanbaatar, Mongolia.</span>
            <br />
            I am currently a student at <span className="purple"> University of Technology Sydney (UTS),</span> pursuing my masters in <span className="purple"> Data Science and Innovation.</span>
            <br />
            <br />
            My background is in economics, but endless nights battling statistics and math—along with my long-standing passion for computer science and programming—led me to seek revenge in the field of data.
            <br />
            <br />
            Apart from coding and data engineering, I enjoy ...
          </p>
          <ul>
            <li className="about-activity">
              <AiOutlineLike /> Basketball 🏀
            </li>
            <li className="about-activity">
              <AiOutlineLike /> Music 🎵 and Art 🎨
            </li>
            <li className="about-activity">
              <AiOutlineLike /> Video Games 🎮
            </li>
            <li className="about-activity">
              <AiOutlineLike /> Trying New Things 🌏🚶
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            “Life is either a daring adventure or nothing at all.” {" "}
          </p>
          <footer className="blockquote-footer">Helen Keller</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
