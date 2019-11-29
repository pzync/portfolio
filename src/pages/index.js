import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Writing from "../components/writing"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <main className="BodyContainer">
      <section className="TextContent">
        <p className="HeroItalic">Designer & PM who crafts</p>
        <p className="HeroMassive">massive scale products.</p>
        <div className="HeroSeparator"></div>
        <p>
          Hello! I’m a designer and product manager with 8+ years of experience
          across product creation, user experience (UI/UX) & creative direction.
          Currently, I head design at Juspay.
        </p>
        <p>
          At Juspay, I’ve led the design of BHIM app which processes
          transactions worth INR 5 billion+ per month. I also worked on
          designing the UPI Common Library. This library is currently installed
          on 80 million devices; which would become 200 million with inclusion
          in WhatsApp soon. Various other Juspay products process 6 million+
          transactions per day and count Amazon, Uber, Visa, Myntra, Flipkart,
          Vodafone and Ola as customers.
        </p>
        <p>
          Earlier, I worked as Head of Product at{" "}
          <a
            href="https://www.nestaway.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nestaway
          </a>
          , a 1200-people company with USD 105 million investment from Tiger
          Global, Yuri Milner & Tata. I also founded The Playce, one of the
          largest coworking spaces in India that's still growing.
        </p>
        <p className="SummaryBlock">
          Overall, I have built and led teams both large and small, shipped
          billions-scale products on challenging timelines and founded a
          successful business.
        </p>
        <p>
          I also dabble in generative art using Processing, prototype using code
          and sometimes{" "}
          <a
            href="https://twitter.com/themeanstartup"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            draw
          </a>{" "}
          as well.
        </p>
        <p>
          Feel free to reach out on{" "}
          <a
            href="http://twitter.com/ShekharGurav"
            target="_blank"
            rel="noopener noreferrer"
          >
            twitter
          </a>{" "}
          &{" "}
          <a
            href="http://in.linkedin.com/in/ShekharGurav"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedIn
          </a>
          .
        </p>
      </section>
      <section className="WritingSection">
        <h6 className="SectionTitle" name="writing">
          Select Writing
        </h6>
        <Writing
          title="Imperfect, Organic Design Is The Next Step"
          desc="On the current obsession over pixel-perfect products. And how
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
      </section>
    </main>
  </Layout>
)

export default IndexPage
