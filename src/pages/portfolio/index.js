// Portfolio.js
import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="portfolio-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="portfolio-title mb-4"> Portfolio </h1>{" "}
            <hr className="title-border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="portfolio-items">
          {dataportfolio.map((data, i) => (
            <div key={i} className="portfolio-item">
              <div className="video-wrapper">
                <video width="500" height="500" controls autoPlay loop muted src={data.gif} alt="" />
              </div>
              <div className="item-content">
                <h1>{data.title}</h1>
                <p>{data.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </HelmetProvider>
  );
};
