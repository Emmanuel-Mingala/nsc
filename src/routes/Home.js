import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar.js'
import logo from '../image/logo2.svg'
import base2 from '../image/base 2.svg'
import base8 from '../image/base 8.svg'
import base16 from '../image/base 16.svg'
import baseN from '../image/base N.svg'
import Footer from "../components/Footer.js"
import question from '../image/question-mark.svg'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import '../import/css/default.css'


const Home = () => {
  





  return (
    <>
      <div>

        <Navbar />

        <section className="py-7 first-section headerPlace">
          <Image src={base2} className="base2"  id="headerB2"></Image>
          <Container>

            <Row className="d-flex align-items-center " >

              <Col lg={6} >
                {/* <div className='questionParent'>
                <Image src={question} className="question q1"></Image>
                <Image src={question} className="question q2"></Image>
                <Image src={question} className="question q3"></Image>
              </div> */}
                <div>

                  <h1>Number System Converter</h1>
                  <p>A number system is a method of representing and expressing numerical values that is organized. It provides a logical foundation for counting, measuring, executing mathematical operations, and communicating numerical data. Throughout history, several number systems have been employed for various reasons and in various cultures, but the two most popular and frequently used number systems are the decimal system and the binary system.</p>
                </div>
              </Col>
              <Col lg={6} >


                {/* <Image src={logo} className="img" fluid></Image> */}
                <div className="baseParent" id="baseParent">
                  <Image src={base2} className="base b2"  id="b2"></Image>
                  <Image src={base16} className="base b16" ></Image>
                  <Image src={base8} className="base b8" ></Image>
                  <Image src={baseN} className="base bN" ></Image>

                </div>

              </Col>
            </Row>


          </Container>
        </section>
        <section className="py-7" style={{ backgroundColor: "#e9ecef" }}>
          <Container>
            <Row xs={1} md={2} className="g-4">
              {Array.from({ length: 4 }).map((_, idx) => (
                <Col key={idx}>
                  <Card className="border border-info">
                    {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
        <section className="py-7">
          <Container></Container>
        </section>
        <Footer />
      </div>

    </>
  )
}

export default Home