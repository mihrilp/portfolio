import React from "react";
import "./project.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Code, Circle } from "../icons/";

const Project = ({ projectName, linkUrl, description, language }) => {
  return (
    <Container className="project">
      <Row className="projectName">
        <Col>{projectName}</Col>
      </Row>
      <Row className="description">
        <Col>{description}</Col>
      </Row>
      <Row>
        <Col className="language">
          <Circle className="circle" />
          {language}
        </Col>
        <Col>
          <a className="code" href={linkUrl}>
            <Code />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Project;
