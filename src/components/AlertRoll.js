import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class AlertRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-6" key={post.id}>
              <article
                className={`Alert-list-item tile is-child box notification ${
                  post.frontmatter.active ? 'active' : ''
                }`}
              >
                <header>
                    <div className="featured-thumbnail">
                    <img src={!!post.frontmatter.mainImage.childImageSharp ? post.frontmatter.mainImage.childImageSharp.fluid.src : post.frontmatter.mainImage}></img>
                    </div>
                  <p className="post-meta">
                    <Link
                      className="title has-text-primary is-size-4"
                      to={post.fields.slug}
                    >
                      {post.frontmatter.subjectName} - {post.frontmatter.date}
                    </Link>
                  </p>
                </header>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

AlertRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query AlertRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "alert-post" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                active
                templateKey
                date(formatString: "MMMM DD, YYYY")
                subjectName
                mainImage {
                    childImageSharp {
                        fluid(maxWidth: 2048, quality: 100) {
                          ...GatsbyImageSharpFluid
                        }
                    }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <AlertRoll data={data} count={count} />}
  />
)
