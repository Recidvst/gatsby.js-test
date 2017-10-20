import React from 'react'
import Helmet from 'react-helmet'

// export default Template = (data) => {
    
// }
export default function Template({ data }) {

    const post = data.markdownRemark;
    return (
        <div>
            <h1>
                { post.frontmatter.title }
            </h1>
            <p>
                { post }
            </p>
        </div>
    )

}

export const postQuery = graphql`
    query blogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path} } ) {
            html
            frontmatter {
                path
                title
            }
        }
    }
`