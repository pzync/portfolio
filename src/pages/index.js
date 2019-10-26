import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Writing from "../components/writing"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="TextContent">
      <h3>
        Hello! I’m a Designer and Product Manager with 8+ years of experience
        across Product Creation, User Experience (UI/UX) & Design Systems.
        Currently, I head Design at Juspay.
      </h3>
      <p>
        At Juspay, I’ve led the design of BHIM app which saw transaction volume
        worth INR 4.8 billion in Mar ’18. I also worked on designing the UPI
        Common Library. This library is currently installed on ~80 million
        devices; which would become 300 million with inclusion in WhatsApp soon.
        Various other Juspay products process 7 million+ transactions every
        single day.
      </p>
      <p>
        Previously, I worked as Head of Product at{" "}
        <a href="https://www.nestaway.com" target="_blank">
          Nestaway
        </a>
        , a startup funded over USD 100 million by Yuri Milner, Tiger Global and
        Tata.
      </p>
      <p>
        I recently wrote an essay titled{" "}
        <a
          href="https://uxdesign.cc/imperfect-organic-design-is-the-next-step-f16942ca79b2"
          target="_blank"
        >
          Imperfect, organic design is the next step
        </a>
        , which you may find interesting. I also dabble in Generative Design
        (using Processing) and sometimes{" "}
        <a href="https://twitter.com/themeanstartup" target="_blank">
          {" "}
          draw comics
        </a>{" "}
        as well.
      </p>
      <p>
        You can reach out to me on twitter at{" "}
        <a href="http://twitter.com/ShekharGurav" target="_blank">
          @ShekharGurav
        </a>
        .
      </p>
    </div>
    <div className="WritingSection">
      <h6 className="SectionTitle">Select Writing</h6>
      <Writing
        title="Imperfect, Organic Design Is The Next Step"
        desc="On the current obsession over Pixel Perfect products. And how
      ‘imperfections’ can make our designs more human."
        link="https://uxdesign.cc/imperfect-organic-design-is-the-next-step-f16942ca79b2"
      />
      <Writing
        title="How We Designed To Onboard 10 Million Users In 10 Days"
        desc="And actually did it! (Behind the launch of BHIM UPI app)."
        link="https://medium.com/p/95c7221c1512"
      />
      <Writing
        title="Studio Ghibli And Great Product Design"
        desc="Because great animation has a lot to teach."
        link="https://medium.com/white-space/5-learnings-every-product-designer-should-absolutely-steal-from-studio-ghibli-movies-6c3971fffa0?source=your_stories_page---------------------------"
      />
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
