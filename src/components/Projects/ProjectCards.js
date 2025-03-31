import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { SiDevpost } from "react-icons/si";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle style={{ color: "gray", fontSize: "0.9rem" , fontFamily: "Arial"}}>
          {props.subtitle}
        </Card.Subtitle>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button 
          variant="primary" 
          href={props.ghLink} 
          target="_blank">
          <BsGithub /> &nbsp; GitHub 
        </Button>
        {"\n"}
        {"\n"}

        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <SiDevpost /> &nbsp; Devpost
          </Button>
        )}
        {"\n"}
        {"\n"}

        {props.websiteLink && (
          <Button
            variant="primary"
            href={props.websiteLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp; Website
          </Button>
        )}
        {"\n"}
        {"\n"}
        <br />
        {props.isBlog && props.blogLink && (
          <Button
            variant="primary"
            href={props.blogLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp; Blogpost
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
