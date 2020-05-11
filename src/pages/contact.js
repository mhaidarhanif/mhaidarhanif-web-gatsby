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
          Whenever you need help or have a question, you can contact Haidar with
          this form. Haidar will get back to you soon after that.
        </p>

        <ContactForm />
      </SectionContent>
    </Layout>
  )
}

export default ContactPage
