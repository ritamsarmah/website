import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404" />
    <h1>Page not found.</h1>
    <p>Uh oh, we couldn't find the page you're looking for.</p>
    <Link to="/">Return home</Link>
  </Layout>
)

export default NotFoundPage
