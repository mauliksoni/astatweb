import React from 'react';
import { Link, graphql } from 'gatsby';

export default({data})=>(
    <React.Fragment>
        <div>{data.site.siteMetadata.title}</div>
        <div>{data.site.siteMetadata.description}</div>
        <Link to="/">Back</Link>
    </React.Fragment>
)

export const query = graphql`
  {
    site {
      siteMetadata {
        author
        description
        title
      }
    }
  }
`
