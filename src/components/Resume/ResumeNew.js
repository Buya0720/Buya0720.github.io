import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Buyandelger_Batsuren_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        {/* Conditional Rendering for Mobile and Web */}
        <Row className="resume" style={{ justifyContent: "center" }}>
          <Document file={pdf} className="d-flex justify-content-center">
            {width > 786 ? (
              // Show two pages side-by-side for larger screens
              <>
                <div style={{ margin: "0 5px" }}>
                  <Page pageNumber={1} scale={1.1} />
                </div>
                <div style={{ margin: "0 5px" }}>
                  <Page pageNumber={2} scale={1.1} />
                </div>
              </>
            ) : (
              // Show one page with scrolling for smaller screens
              <div style={{ margin: "0 5px" }}>
                <Page pageNumber={1} scale={0.6} />
              </div>
            )}
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;