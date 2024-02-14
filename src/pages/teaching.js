import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SearchEngineOptimisation from "../components/searchengineoptimisation"

const TeachingBioPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SearchEngineOptimisation title="Teaching Bio" location={location} />
      <h1>
        I've helped over 60 people level-up their tech literacy. Now I'm looking
        to reach more people.
      </h1>
      <section>
        <p>
          Here's a shortlist of relevant recent work experiences that give me
          the confidence to know I can help people boost their tech literacy:
        </p>
        <ul>
          <li>
            I've conceptualised curriculums and taught several iterations of an
            internal programming bootcamp to 15 colleagues from sales, customer
            support, customer success, business development, marketing, and
            product management. 2 of them transitioned into technical roles,
            another 2 into product roles, and 1 got hired at Google as a
            Solutions Engineer a year later
          </li>
          <li>
            I've taught 3 in-person cohorts web development with 100% graduation
            rate, which helped 45 graduates get jobs as full-stack web
            developers and product managers
          </li>
          <li>
            I've hired and mentored a team of 7 software engineers and I was a
            senior software engineer at Shopify
          </li>
        </ul>
        <p>But don't take my word for it. Here's what ex-students say:</p>
        <blockquote>
          <p>
            "I had the privilege of being taught by Nick during my time at
            General Assembly. Nick was one of my teaching assistants in the
            course and he was one of the better educators I ever had in my
            learning journey thus far. Nick is patient, logical, and approaches
            every single challenge with a zealous attitude. I am really honoured
            to have been taught by such a marvellous educator."
          </p>
          <cite>Zhao Loong, Software Engineer at GovTech Singapore</cite>
        </blockquote>
        <blockquote>
          <p>
            "I thoroughly enjoyed having Nick as a teacher. He is very
            knowledgeable yet able to explain difficult concepts clearly. He
            made the course exciting and interactive, keeping us all engaged.
            Nick was always approachable and went out of his way to help the
            class understand concepts, making himself available outside office
            hours to solve queries, providing guidance to debugging code and
            even keep our spirits up!"
          </p>
          <cite>Laura Gil, Publications Manager at Knight Frank</cite>
        </blockquote>
        <blockquote>
          <p>
            "Nick is an inspiring and dedicated instructor who provides close
            guidance to his students to the best of his ability. It was a
            pleasant and rewarding experience to be taught by Nick as he
            consistently motivates his students to push beyond their limits.
            Moreover, Nick is patient in breaking down complicated concepts into
            simpler terms so as to reinforce his students' understanding. The
            passion he has towards programming further influences me to dive
            deeper into this field."
          </p>
          <cite>Feyn Mai, Data Scientist at CARRO</cite>
        </blockquote>
        <blockquote>
          <p>
            "Nick was a good mentor when I was working with him in my placement.
            We worked closely together for a product recommendation engine
            Metisa. I have learnt a lot about software engineering and work
            ethics from him. He is the one who brought me on board, he didn't
            mind spending time teaching me and explain things to me, which makes
            me feel comfortable working with him. He is very conscientious to
            his work, at the same time delivering high quality work very fast."
          </p>
          <cite>Ka Ho, Fullstack Engineer at Vortexa</cite>
        </blockquote>
        <blockquote>
          <p>
            "Nick generously shared his experience and his time after hours,
            offering insightful views on app design, productivity hacks, and
            debugging our code. With his great sense of humour and positive
            attitude, Nick encouraged everyone through their respective
            challenges. Nick was definitely a multiplier in our learning
            efforts, and I have no doubt he will have the same effect in any
            team fortunate to have him."
          </p>
          <cite>Melvin Mok, Sr. Software Engineer at ShopBack</cite>
        </blockquote>
        <blockquote>
          <p>
            "Nick is a patient and encouraging Teaching Assistant who explains
            programming concepts in a way that even non programmers can
            understand!"
          </p>
          <cite>Wan Shan, Product Owner at Dyson</cite>
        </blockquote>
        <blockquote>
          <p>
            "I had the privilege of having Nick as my TA at General Assembly.
            He's a patient and highly competent programmer who was committed to
            each student's success since day 1. As a newbie to programming, the
            rapid pace of the course was really a challenge but Nick always
            showed unbelievable patience and kindness. He would methodically
            understanding your problem before offering solutions that takes into
            account your progress and ability. He was a friend as much as he was
            our TA, offering insights about the tech industry that was foreign
            to many of us."
          </p>
          <cite>Olivia Chung, Product Support Manager at YouTube</cite>
        </blockquote>
        <p>
          If you happen to be reading this without having context, and you're
          interested to level up your technical literacy,{" "}
          <Link to="/contact">email me</Link> now.
        </p>
      </section>
    </Layout>
  )
}

export default TeachingBioPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
