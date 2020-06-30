import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'


export const AlertPostTemplate = ({
  name,
  description,
  mainImage,
  helmet,
  date,
  active
}) => {
  function header(name) {
    if (active) {
      return `${name} -- ${date}`
    }
    return `SEARCH ENDED -- ${name} -- ${date}`
  }

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {header(name)}
            </h1>
            <img src={!!mainImage.childImageSharp ? mainImage.childImageSharp.fluid.src : mainImage}></img>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

AlertPostTemplate.propTypes = {
  name: PropTypes.string,
  mainImage: PropTypes.object,
  date: PropTypes.string,
  active: PropTypes.bool,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const AlertPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AlertPostTemplate
        name={post.frontmatter.subjectName}
        description={post.frontmatter.description}
        mainImage={post.frontmatter.mainImage}
        date={post.frontmatter.date}
        active={post.frontmatter.active}
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate="%s | Alert">
            <title>{`Find: ${post.frontmatter.subjectName}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
      />
    </Layout>
  )
}

AlertPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default AlertPost

export const pageQuery = graphql`
  query AlertPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        date(formatString: "MMMM DD, YYYY HH:MM")
        department
        subjectName
        mainImage {
          childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
          }
        }
        description
        zipcode
        lat
        long
        radius
        active
      }
    }
  }
`
