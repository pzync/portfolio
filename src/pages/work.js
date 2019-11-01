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
          going strong. I have also collaborated directly with founders on many
          successful fundraising pitches.
        </p>

        <p>
          Currently, a team of 11 awesome designers helps me at Juspay. My daily
          tools of trade include Sketch, Principle, Flinto, Invision, and React.
        </p>
      </section>
      <div>
        <h3 className="SectionHeading CenteredTextContent">Featured Work</h3>

        <section className="CenteredTextContent WorkSection">
          <h5 className="WorkHighlight">
            Led design of a 1mb app that processes INR 5 billion / month{" "}
          </h5>
          <p className="WorkText">
            BHIM is the #08 payments app in the world. Design praised by the
            World Bank. Mary Meeker highlighted BHIM in her '2017 Internet
            Trends Report'.
          </p>
          <img
            className="CardImage ImageBorder"
            src={require("../images/Bhim-app.jpg")}
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
          />
        </section>

        <section className="CenteredTextContent WorkSection">
          <h5 className="WorkHighlight">
            Redesigned a mobile payments flow with 6 million txn / day{" "}
          </h5>
          <p className="WorkText">
            Upto 2% jump in payment success rates with reduced decision burden
            and transaction time. Clients include Zomato, Myntra, Swiggy,
            Flipkart et al.
          </p>
          <div className="ImageHalfGrid">
            <img
              className="CardImage TallImage"
              src={require("../images/Godel-redesign.jpg")}
            />
            <img
              className="CardImage WideImage"
              src={require("../images/Godel-manual.jpg")}
            />
            <img
              className="CardImage WideImage"
              src={require("../images/Godel-otp.jpg")}
            />
          </div>
        </section>

        <section className="CenteredTextContent WorkSection">
          <h5 className="WorkHighlight">
            Designed Juspay Checkout - desktop and mobile.{" "}
          </h5>
          <p className="WorkText">
            Upto 2% jump in payment success rates with reduced decision burden
            and transaction time. Clients include Bigbasket, Vodafone et al.
          </p>
          <img
            className="CardImage"
            src={require("../images/Desktop-checkout.jpg")}
          />
        </section>
        {/* <section className="WorkSection">
          <div className="CenteredTextContent">
            <h5 className="WorkHighlight">
              WhatsApp P2P money transfer & the UPI Common Library{" "}
            </h5>
            <p className="WorkText">
              80 million installs of UPI Common Library. Projected userbase ~
              200 million. WhatsApp transfer beta launched to a million users.
            </p>
          </div>
          <div className="WorkSubSection CenteredTextContent">
            <div className="FirstHalf">
              <img
                className="CardImage"
                src={require("../images/Bhim-app.jpg")}
              />
              <h6>WhatsApp P2P Money Transfer</h6>
            </div>
            <div className="LastHalf">
              <img
                className="CardImage"
                src={require("../images/Bhim-app.jpg")}
              />
              <h6>UPI Common Library</h6>
            </div>
          </div>
        </section> */}
      </div>
    </div>
  </Layout>
)

export default Work
