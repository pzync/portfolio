import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Writing from "../components/writing"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="BodyContainer">
      <div className="TextContent">
        <h3>
          Hello! I’m a Designer and Product Manager with 8+ years of experience
          across Product Creation, User Experience (UI/UX) & Creative Direction.
          Currently, I head Design at Juspay.
        </h3>
        <p>
          At Juspay, I’ve led the design of BHIM app which sees transaction
          volume of ~ INR 5 billion every month. I also worked on designing the
          UPI Common Library. This library is currently installed on 80 million
          devices; which would become 200 million with inclusion in WhatsApp
          soon. Various other Juspay products process 7 million+ transactions
          every single day and have Amazon, Uber, Visa, Myntra, Flipkart, Ola
          etc as customers.
        </p>
        <p>
          Previously, I worked as Head of Product at{" "}
          <a href="https://www.nestaway.com" target="_blank">
            Nestaway
          </a>
          , a 1200-people company funded over USD 105 million by Tiger Global,
          Yuri Milner & Tata. I also founded The Playce, one of the largest
          coworking spaces in India that's still growing.
        </p>
        <p>
          Overall, I have built and led teams both large n' small, shipped
          massive-scale products on challenging timelines and founded a
          successful business.
        </p>
        <p>
          I also dabble in Generative Art (using Processing), prototype using
          code and sometimes{" "}
          <a href="https://twitter.com/themeanstartup" target="_blank">
            {" "}
            draw
          </a>{" "}
          as well.
        </p>
        <p>
          Feel free to reach out on{" "}
          <a href="http://twitter.com/ShekharGurav" target="_blank">
            twitter
          </a>{" "}
          &{" "}
          <a href="http://in.linkedin.com/in/ShekharGurav" target="_blank">
            linkedIn
          </a>
          .
        </p>
      </div>
      <div className="WritingSection">
        <h6 className="SectionTitle" name="writing">
          Select Writing
        </h6>
        <Writing
          title="Imperfect, Organic Design Is The Next Step"
          desc="On the current obsession over Pixel Perfect products. And how
      ‘imperfections’ can make our designs more human."
          link="https://uxdesign.cc/imperfect-organic-design-is-the-next-step-f16942ca79b2"
        />
        <Writing
          title="How We Designed To Onboard 10 Million Users In 10 Days"
          desc="Behind the screens of one of the most successful product launches in India."
          link="https://medium.com/p/95c7221c1512"
        />
        <Writing
          title="Studio Ghibli And Good Product Design"
          desc="Because great animated movies have a lot to teach."
          link="https://medium.com/white-space/5-learnings-every-product-designer-should-absolutely-steal-from-studio-ghibli-movies-6c3971fffa0?source=your_stories_page---------------------------"
        />
      </div>
    </div>
  </Layout>
)

export default IndexPage
