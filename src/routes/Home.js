import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar.js'
import { HashLink } from 'react-router-hash-link'
// import logo from '../image/logo2.svg'
import base2 from '../image/base 2.svg'
import base8 from '../image/base 8.svg'
import base16 from '../image/base 16.svg'
import baseN from '../image/base N.svg'
import Footer from "../components/Footer.js"
// import question from '../image/question-mark.svg'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
// import CardGroup from 'react-bootstrap/CardGroup'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import '../import/css/default.css'
import ScrollTop from '../components/ScrollTop'



const Home = () => {






  return (
    <>
      <div>

        <Navbar />

        <section className="py-7 first-section">

          <Container>

            <Row className="d-flex align-items-center " >

              <Col lg={6} >
                {/* <div className='questionParent'>
                <Image src={question} className="question q1"></Image>
                <Image src={question} className="question q2"></Image>
                <Image src={question} className="question q3"></Image>
              </div> */}
                <div>

                  <h1>What is a number system?</h1>
                  <p>A number system is a method of representing and expressing numerical values that is organized. It provides a logical foundation for counting, measuring, executing mathematical operations, and communicating numerical data. Throughout history, several number systems have been employed for various reasons and in various cultures, but the two most popular and frequently used number systems are the decimal system and the binary system.</p>
                </div>
              </Col>
              <Col lg={6} >


                {/* <Image src={logo} className="img" fluid></Image> */}
                <div className="baseParent" id="baseParent">
                  <HashLink smooth to="#binary"><Image src={base2} className="base b2" id="b2"></Image></HashLink>
                  <HashLink smooth to="#hexa"><Image src={base16} className="base b16" ></Image></HashLink>
                  <HashLink smooth to="#octal"><Image src={base8} className="base b8" ></Image></HashLink>
                  <HashLink smooth to="#anyBase"><Image src={baseN} className="base bN" ></Image></HashLink>

                </div>

              </Col>
            </Row>


          </Container>
        </section>

        <section className="py-7 second-section" style={{ backgroundColor: "#e9ecef" }} id="binary">
          <Container>
            <Row className="d-flex align-items-center " >

              <Col lg={7}>
                <div>

                  <h1>What is a Binary number?</h1>
                  <p>A binary number is a number expressed in the base-2 numeral system. In the binary system, there are only two possible digits: 0 and 1. Each digit in a binary number represents a power of 2, starting from the right and increasing by one for each position to the left.</p>
                </div>
              </Col>
              <Col lg={5}>
                <div className="parent2">
                  <Image src={base2} className='base2'></Image>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="py-7 third-section" id="octal">
        <Container>
            <Row className="d-flex align-items-center " >
            <Col lg={7}>
                <div className="parent2">
                  <Image src={base8} className='base8'></Image>
                </div>
              </Col>
              <Col lg={5}>
                <div>

                  <h1>What is an Octal number?</h1>
                  <p>An octal number is a number expressed in the base-8 numeral system. In the octal system, there are eight possible digits: 0, 1, 2, 3, 4, 5, 6, and 7. Each digit in an octal number represents a power of 8, starting from the right and increasing by one for each position to the left.</p>
                </div>
              </Col>
              
            </Row>
          </Container>
        </section>

        <section className="py-7 fourth-section" style={{ backgroundColor: "#e9ecef" }} id="hexa">
        <Container>
            <Row className="d-flex align-items-center " >

              <Col lg={7}>
                <div>

                  <h1>What is a Hexadecimal number?</h1>
                  <p>A hexadecimal number is a number expressed in the base-16 numeral system. In the hexadecimal system, there are sixteen possible digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, and F. The first ten digits (0-9) are the same as in the decimal system, while the letters A to F represent the decimal values 10 to 15, respectively.</p>
                </div>
              </Col>
              <Col lg={5}>
                <div className="parent2">
                  <Image src={base16} className='base16'></Image>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="py-7" id="anyBase">
          <Container></Container>
        </section>
        <Footer />

        <ScrollTop />
      </div>

    </>
  )
}

export default Home