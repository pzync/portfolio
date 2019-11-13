import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/work.css"

const Work = () => (
  <Layout>
    <SEO title="Work" />
    <div className="WorkContainer">
      <section className="CenteredTextContent">
        <p>
          I have an education in management (MBA from IIM Bangalore) and
          engineering. This, combined with a rather unbridled love for design,
          has given me many unique work opportunities.
        </p>

        <p>
          Together, with some amazing teams, we have developed products that
          millions use every day and crafted stories & brands which are still
          going strong. I've also collaborated directly with founders on many
          successful fundraising pitches.
        </p>

        <p>
          My daily tools of trade include Sketch, Principle, Flinto, Invision,
          and React.
        </p>
      </section>
      <div>
        <h3 className="SectionHeading CenteredTextContent">Featured Work</h3>

        <section className="CenteredTextContent WorkSection">
          <h5 className="WorkHighlight">
            Led design of a 1Mb app that processes INR 5 billion / month{" "}
          </h5>
          <p className="WorkText">
            BHIM is the #08 payments app in the world. Design praised by the
            World Bank. Mary Meeker highlighted BHIM in her '2017 Internet
            Trends Report'.
          </p>
          <img
            className="CardImage ImageBorder"
            src={require("../images/Bhim-app.jpg")}
            alt="BHIM App"
          />
        </section>

        <section className="CenteredTextContent WorkSection">
          <h5 className="WorkHighlight">
            Wrote & designed Juspay website for clearer brand recall{" "}
          </h5>
          <p className="WorkText">
            With the aim of communicating Juspay's market positioning to
            merchants and scale to investors more effectively.
          </p>
          <img
            className="CardImage ImageBorder"
            src={require("../images/Juspay-website.jpg")}
            alt="Juspay Website"
          />
        </section>

        <section className="CenteredTextContent WorkSection">
          <h5 className="WorkHighlight">
            Redesigned a payment flow that does 6 million txn per day{" "}
          </h5>
          <p className="WorkText">
            Upto 2% jump in success rates with less decision burden and
            transaction time. Clients include Zomato, Myntra, Swiggy, Flipkart
            et al.
          </p>
          <div className="ImageHalfGrid">
            <img
              className="CardImage TallImage"
              src={require("../images/Godel-redesign.jpg")}
              alt="Godel Redesign"
            />
            <img
              className="CardImage TopRightImage"
              src={require("../images/Godel-manual.jpg")}
              alt="Godel manual entry"
            />
            <img
              className="CardImage BottomRightImage"
              src={require("../images/Godel-otp.jpg")}
              alt="Godel OTP"
            />
          </div>
        </section>

        <section className="CenteredTextContent WorkSection">
          <h5 className="WorkHighlight">
            Reimagined the Session Log to visualize user journeys{" "}
          </h5>
          <p className="WorkText">
            An experiment in collaboration with product managers evolved into
            this internal tooling. Focused on pro users. Designed for larger
            displays.
          </p>
          <img
            className="CardImage"
            src={require("../images/Session-log.jpg")}
            alt="Session log dashboard"
          />
        </section>

        <section className="CenteredTextContent WorkSection">
          <h5 className="WorkHighlight">
            Conceptualized the first-ever UI for UPI onboarding{" "}
          </h5>
          <p className="WorkText">
            This flow has now become a standard for millions of users and all
            banks across India. Also 80 million+ installs of UPI Auth Library we
            designed.
          </p>
          <img
            className="CardImage"
            src={require("../images/UPI-onboarding.jpg")}
            alt="UPI onboarding"
          />
        </section>

        <section className="CenteredTextContent WorkSection">
          <h5 className="WorkHighlight">
            Crafted a webapp for book quotes and annotations{" "}
          </h5>
          <p className="WorkText">
            To offer an undistracted reading environment and a better discovery
            experience. Done using only websafe fonts.
          </p>
          <img
            className="CardImage"
            src={require("../images/Xook.jpg")}
            alt="Book quotes webapp"
          />
        </section>

        <section className="CenteredTextContent WorkSection">
          <h5 className="WorkHighlight">
            Directed Juspay's Checkout ecosystem of products{" "}
          </h5>
          <p className="WorkText">
            An adaptive design system of flows & components. Clients include
            some of India's largest grocery e-tailers, telecom firms and food
            delivery apps.
          </p>
          <img
            className="CardImage"
            src={require("../images/Desktop-checkout.jpg")}
            alt="Juspay's Checkout ecosystem of products"
          />
        </section>

        <section className="CenteredTextContent WorkSection">
          <h5 className="WorkHighlight">
            Led product + creative at a $100-million funded company{" "}
          </h5>
          <p className="WorkText">
            Worked on developing products for tenants, house-owners, and agents
            at Nestaway. Directed design and content for PR and marketing
            campaigns.
          </p>
          <img
            className="CardImage"
            src={require("../images/Nestaway.jpg")}
            alt="Nestaway work"
          />
        </section>

        <section className="CenteredTextContent WorkSection">
          <h5 className="WorkHighlight">
            Consulted on design for a Gates Foundation project{" "}
          </h5>
          <p className="WorkText">
            This will be the largest learning management platform for teachers
            across India and Southeast Asia. I consulted on the initial product
            designs for web & mobile.
          </p>
        </section>

        <section className="CenteredTextContent WorkSection">
          <h5 className="WorkHighlight">
            Crafted an early prototype of Consent Architecture for India{" "}
          </h5>
          <p className="WorkText">
            It's a nation-wide system which would place users firmly in control
            of their data. Upon request from service providers (insurance,
            credit etc), the user can grant access to only the required data.
            And that too for a restricted period.
          </p>
        </section>

        <section className="CenteredTextContent WorkSection">
          <h5 className="WorkHighlight">
            Currently leading the design of a product for one of the major
            international card networks{" "}
          </h5>
          <p className="WorkText">To be launched across India and Europe.</p>
        </section>
      </div>
    </div>
  </Layout>
)

export default Work
