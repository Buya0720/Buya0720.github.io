import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiApachespark ,
  SiApacheairflow ,
  SiVisualstudiocode,
  SiDatabricks ,
  SiVercel,
  SiTableau,
  SiSplunk,
  SiDocker,
  SiPostgresql,
  SiSnowflake, 
  SiDbt,
  SiTerraform,
  SiMongodb,
  SiOracle
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { FaAws } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiDatabricks />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSnowflake />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDbt />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTerraform />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachespark />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApacheairflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
      </Col>      
      <Col xs={4} md={2} className="tech-icons">
        <VscAzure />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOracle />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSplunk  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau />
      </Col>
    </Row>
  );
}

export default Toolstack;
