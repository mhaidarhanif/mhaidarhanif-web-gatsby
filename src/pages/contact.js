import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import SectionContent from "../components/SectionContent"
import ContactForm from "../components/ContactForm"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />

      <SectionContent title="Contact Haidar">
        <p>
          You can contact Haidar through this form whenever you need help, have
          a question, or offering something. Haidar will get back to you soon
          after you sent a message with clear details (name, email, intention,
          and content).
        </p>

        <ContactForm />
      </SectionContent>
    </Layout>
  )
}

export default ContactPage
