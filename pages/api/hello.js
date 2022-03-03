// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// API is the acronym for Application Programming Interface

export default function handler(req, res) {
  // req is an instance of http.IncomingMessage, plus some pre-built middlewares.
  // res is an instance of http.ServerResponse, plus some helper functions.
  res.status(200).json({ name: 'Diksha' })
  // res.status(code) - A function to set the status code. code must be a valid HTTP status code
  // HTTP 200 OK success status response code indicates that the request has succeeded and  and returns a message property with the value as a JSON response.
}
// a good use case for an API Route is:
// Saving incoming data to your database
// Securely communicating with a third-party API
// Previewing draft content from your CMS