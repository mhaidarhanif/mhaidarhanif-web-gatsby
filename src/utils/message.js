import AirtablePlus from "airtable-plus"

const base = new AirtablePlus({
  apiKey: process.env.GATSBY_AIRTABLE_API_KEY,
  baseID: process.env.GATSBY_AIRTABLE_BASE_ID,
  tableName: process.env.GATSBY_AIRTABLE_TABLE_NAME,
})

const message = {
  createGeneralMessage: async body => {
    try {
      const response = await base.create(body)
      return {
        message: `Thank you ${response.fields.name} for your message!`,
        isSuccess: true,
      }
    } catch (error) {
      console.error(error)
      return {
        message: `There is a problem when sending your message`,
        isError: true,
      }
    }
  },
}

export default message
