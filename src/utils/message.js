import Airtable from "airtable"

const AIRTABLE_URL = process.env.GATSBY_AIRTABLE_URL
const AIRTABLE_API_KEY = process.env.GATSBY_AIRTABLE_API_KEY
const AIRTABLE_BASE = process.env.GATSBY_AIRTABLE_BASE

const airtableConfig = {
  endpointUrl: AIRTABLE_URL,
  apiKey: AIRTABLE_API_KEY,
}

Airtable.configure(airtableConfig)

const base = Airtable.base(AIRTABLE_BASE)

const message = {
  getGeneralMessages: tableName => {
    base(tableName)
      .select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 3,
        view: "Grid view",
      })
      .eachPage(
        function page(records, fetchNextPage) {
          // This function (`page`) will get called for each page of records.
          records.forEach(function (record) {
            const text = record.get("title")
            alert(text)
          })
          // To fetch the next page of records, call `fetchNextPage`.
          // If there are more records, `page` will get called again.
          // If there are no more records, `done` will get called.
          fetchNextPage()
        },
        function done(err) {
          if (err) {
            console.error(err)
            return
          }
        }
      )
  },

  createGeneralMessage: (tableName, body) => {
    base(tableName).create(body, (err, record) => {
      if (err) {
        console.error(err)
        return
      }
      const text = record.get("title")
      alert(text)
    })
  },
}

export default message
