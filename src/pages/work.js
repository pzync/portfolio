import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/work.css"

const Work = () => (
  <Layout>
    <SEO title="Work" />
    <div className="WorkContainer">
      <div className="LastTwoThirdCol">
        <p>
          I have an education in Management (from IIM Bangalore) and
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
      <div className="FirstOneThirdCol">
        <h4>Featured Work</h4>
      </div>
      <div className="LastTwoThirdCol WorkCard">
        <img src={require("../images/DecisionTree.jpg")} />
        <p>
          <span className="CardTitle">Lorem Ipsum Dolos Irres.</span>{" "}
          <span className="CardDesc">
            This is the most awesome work anyone has done. Let's do some more
            goodies.
          </span>
        </p>
      </div>
      <div className="FullWidthCol WorkCard">
        <img src={require("../images/BHIM-hero.jpg")} />
        <p>
          <span className="CardTitle">BHIM Payments App for India.</span>{" "}
          <span className="CardDesc">
            This is the most awesome work anyone has done. Let's do some more
            goodies. India is my country and people here are very harrd-working.
          </span>
        </p>
      </div>
      <div className="FirstHalfCol WorkCard">
        <img src={require("../images/Types.jpg")} />
        <p>
          <span className="CardTitle">Hello from functional programming.</span>{" "}
          <span className="CardDesc">
            It is the true liberator of our coding horrors.
          </span>
        </p>
      </div>
      <div className="LastHalfCol WorkCard">
        <img src={require("../images/FunctionDef.jpg")} />
        <p>
          <span className="CardTitle">Designing for the billion Indians.</span>{" "}
          <span className="CardDesc">
            Could there be a more pure job? This is the best.
          </span>
        </p>
      </div>
      <div className="FirstTwoThirdCol WorkCard">
        <img src={require("../images/Purity.jpg")} />
        <p>
          <span className="CardTitle">Lorem Ipsum Dolos Irres.</span>{" "}
          <span className="CardDesc">
            This is the most awesome work anyone has done. Let's do some more
            goodies.
          </span>
        </p>
      </div>
      <div className="LastOneThirdCol WorkCard">
        <img src={require("../images/poster.jpg")} />
      </div>
    </div>
  </Layout>
)

export default Work
