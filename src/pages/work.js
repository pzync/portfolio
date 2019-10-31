import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/work.css"

const Work = () => (
  <Layout>
    <SEO title="Work" />
    <div className="WorkContainer">
      <div className="CenteredTextContent">
        <p>
          I have an education in Management (MBA from IIM Bangalore) and
          Engineering. This, combined with a rather unbridled love for Design,
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
      </div>
      <div className="CenteredTextContent">
        <h3 className="SectionHeading">Featured Work</h3>
      </div>
      <div className="WorkContainer">
        <img
          className="FullWidthCardImage"
          src={require("../images/Bhim-app.jpg")}
        />
      </div>
    </div>
  </Layout>
)

export default Work
