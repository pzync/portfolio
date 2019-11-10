import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/cabinet.css"

const SecondPage = () => (
  <Layout>
    <SEO title="Cabinet" />
    <div className="CabinetContainer">
      <p className="CabinetDesc">
        An assorted mix of illustrations, posters, and motion prototypes.
      </p>

      <div className="Masonry">
        <div className="Item">
          <img
            className="CardImage"
            src={require("../images/Abstract-calli.jpg")}
          />
          <p className="CardDesc">Abstract Calligraphy</p>
        </div>

        <div className="Item">
          <img
            className="CardImage"
            src={require("../images/generative-machine.jpg")}
          />
          <p className="CardDesc">
            Generative Machine{" "}
            <span style={{ fontWeight: `normal` }}>
              (Ruth Lin's work implemented using composition)
            </span>
          </p>
        </div>

        <div className="Item">
          <video
            controls
            className="CardImage"
            poster={require("../images/Onboarding-poster.jpg")}
            src={require("../videos/Onboarding.mp4")}
          />
          <p className="CardDesc">Onboarding GIF</p>
        </div>

        <div className="Item">
          <img className="CardImage" src={require("../images/girhein.jpg")} />
          <p className="CardDesc">Exploring indic types</p>
        </div>

        <div className="Item">
          <img
            className="CardImage"
            src={require("../images/delivery-illo.jpg")}
          />
          <p className="CardDesc">Pay on delivery illustration</p>
        </div>

        <div className="Item">
          <video
            controls
            className="CardImage"
            poster={require("../images/Mobile-checkout-poster.jpg")}
            src={require("../videos/Mobile-checkout.mp4")}
          />
          <p className="CardDesc">Mobile checkout</p>
        </div>

        <div className="Item">
          <img className="CardImage" src={require("../images/Function.jpg")} />
          <p className="CardDesc">Function definition</p>
        </div>

        <div className="Item">
          <img
            className="CardImage"
            src={require("../images/Decision-tree.jpg")}
          />
          <p className="CardDesc">Decision tree</p>
        </div>

        <div className="Item">
          <video
            controls
            className="CardImage"
            src={require("../videos/framer-motion.mp4")}
          />
          <p className="CardDesc">Mobile-first animation in React</p>
        </div>

        <div className="Item">
          <img className="CardImage" src={require("../images/currying.jpg")} />
          <p className="CardDesc">Currying poster</p>
        </div>

        <div className="Item">
          <video
            controls
            className="CardImage"
            poster={require("../images/Desktop-checkout-poster.jpg")}
            src={require("../videos/Desktop-checkout.mp4")}
          />
          <p className="CardDesc">Desktop checkout</p>
        </div>

        <div className="Item">
          <img
            className="CardImage"
            src={require("../images/Alien-illo.jpg")}
          />
          <p className="CardDesc">Mothership</p>
        </div>

        <div className="Item">
          <img
            className="CardImage"
            src={require("../images/generative-arcs.jpg")}
          />
          <p className="CardDesc">Generative arcs</p>
        </div>

        <div className="Item">
          <img className="CardImage" src={require("../images/isometric.jpg")} />
          <p className="CardDesc">Isometric illustration</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default SecondPage
