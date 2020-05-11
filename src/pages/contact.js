import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import SectionContent from "../components/SectionContent"

const ContactPage = () => {
  const placeholders = {
    name: `Tim Berners-Lee`,
    subject: `The Next Web`,
    message: `20 years ago, I invented the World Wide Web. For my next project, I'm building a web for open, linked data that could do for numbers what the Web did for words, pictures, video. So we can unlock our data and reframe the way we use it together.`,
  }

  return (
    <Layout>
      <SEO title="Contact" />

      <SectionContent title="Contact Haidar">
        <form>
          <fieldset>
            <label htmlFor="name">Your Full Name:</label>
            <input name="name" type="text" placeholder={placeholders.name} />
          </fieldset>
          <fieldset>
            <label htmlFor="subject">Subject Title:</label>
            <input
              name="subject"
              type="text"
              placeholder={placeholders.subject}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder={placeholders.message}
            ></textarea>
          </fieldset>
        </form>
      </SectionContent>
    </Layout>
  )
}

export default ContactPage
