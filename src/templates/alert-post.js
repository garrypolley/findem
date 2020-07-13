import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'


function mydrive() {
    navigator.geolocation.getCurrentPosition(doDrivingDirections);
}

function mywalk() {
    navigator.geolocation.getCurrentPosition(doWalkingDirections);
}

function doDrivingDirections(position) {
    var lat = position.coords.latitude
    var long = position.coords.longitude
    if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/Mac/i))) {
        var sites = [
            "http://maps.apple.com/?daddr=" + (lat + (-.03 * (Math.random()))) + "," + (long + (-.03 * (Math.random()))) + "&dirflg=d",
            "http://maps.apple.com/?daddr=" + (lat + (.03 * (Math.random()))) + "," + (long + (.03 * (Math.random()))) + "&dirflg=d",
            "http://maps.apple.com/?daddr=" + (lat + (-.03 * (Math.random()))) + "," + (long + (.03 * (Math.random()))) + "&dirflg=d",
            "http://maps.apple.com/?daddr=" + (lat + (.03 * (Math.random()))) + "," + (long + (-.03 * (Math.random()))) + "&dirflg=d",
            "http://maps.apple.com/?daddr=gas+station&dirflg=d"];
        window.location.assign(sites[Math.floor(Math.random() * sites.length)])
    }
    else {
        var sites = [
            "https://www.google.com/maps/dir/?api=1&destination=" + lat + "," + long + "&travelmode=driving&dir_action=navigate&waypoints=" + (lat + (-.01 * (Math.random()))) + "," + (long + (.01 * (Math.random()))) + "%7C" + (lat + (.01 * (Math.random()))) + "," + (long + (-.01 * (Math.random()))),
            "https://www.google.com/maps/dir/?api=1&destination=" + lat + "," + long + "&travelmode=driving&dir_action=navigate&waypoints=" + (lat + (.01 * (Math.random()))) + "," + (long + (-.01 * (Math.random()))) + "%7C" + (lat + (-.01 * (Math.random()))) + "," + (long + (.01 * (Math.random()))),
            "https://www.google.com/maps/dir/?api=1&destination=" + lat + "," + long + "&travelmode=driving&dir_action=navigate&waypoints=" + (lat + (-.01 * (Math.random()))) + "," + (long + (-.01 * (Math.random()))) + "%7C" + (lat + (.01 * (Math.random()))) + "," + (long + (.01 * (Math.random()))),
            "https://www.google.com/maps/dir/?api=1&destination=" + lat + "," + long + "&travelmode=driving&dir_action=navigate&waypoints=" + (lat + (.01 * (Math.random()))) + "," + (long + (.01 * (Math.random()))) + "%7C" + (lat + (-.01 * (Math.random()))) + "," + (long + (-.01 * (Math.random()))),
            "https://www.google.com/maps/dir/?api=1&destination=" + lat + "," + long + "&travelmode=driving&dir_action=navigate&waypoints=gas+station%7C" + (lat + (.01 * (Math.random()))) + "," + (long + (-.01 * (Math.random())))
        ];
        window.open(sites[Math.floor(Math.random() * sites.length)])
    }
}

function doWalkingDirections(position) {
    var lat = position.coords.latitude
    var long = position.coords.longitude
    if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/Mac/i))) {
        var sites = [
            "http://maps.apple.com/?dirflg=w&daddr=" + (lat + (-.004 * (Math.random()))) + "," + (long + (-.004 * (Math.random()))),
            "http://maps.apple.com/?dirflg=w&daddr=" + (lat + (.004 * (Math.random()))) + "," + (long + (.004 * (Math.random()))),
            "http://maps.apple.com/?dirflg=w&daddr=" + (lat + (-.004 * (Math.random()))) + "," + (long + (.004 * (Math.random()))),
            "http://maps.apple.com/?dirflg=w&daddr=" + (lat + (.004 * (Math.random()))) + "," + (long + (-.004 * (Math.random())))]
        window.location.assign(sites[Math.floor(Math.random() * sites.length)])
    }
    else {
        var sites = [
            "https://www.google.com/maps/dir/?api=1&destination=" + lat + "," + long + "&travelmode=walking&dir_action=navigate&waypoints=" + (lat + (-.004 * (Math.random()))) + "," + (long + (.004 * (Math.random()))) + "%7C" + (lat + (.004 * (Math.random()))) + "," + (long + (-.004 * (Math.random()))),
            "https://www.google.com/maps/dir/?api=1&destination=" + lat + "," + long + "&travelmode=walking&dir_action=navigate&waypoints=" + (lat + (.004 * (Math.random()))) + "," + (long + (-.004 * (Math.random()))) + "%7C" + (lat + (-.004 * (Math.random()))) + "," + (long + (.004 * (Math.random()))),
            "https://www.google.com/maps/dir/?api=1&destination=" + lat + "," + long + "&travelmode=walking&dir_action=navigate&waypoints=" + (lat + (-.004 * (Math.random()))) + "," + (long + (-.004 * (Math.random()))) + "%7C" + (lat + (.004 * (Math.random()))) + "," + (long + (.004 * (Math.random()))),
            "https://www.google.com/maps/dir/?api=1&destination=" + lat + "," + long + "&travelmode=walking&dir_action=navigate&waypoints=" + (lat + (.004 * (Math.random()))) + "," + (long + (.004 * (Math.random()))) + "%7C" + (lat + (-.004 * (Math.random()))) + "," + (long + (-.004 * (Math.random())))
        ];
        window.open(sites[Math.floor(Math.random() * sites.length)])
    }
}

function showTransPosition(position) {
    var lat = position.coords.latitude
    var long = position.coords.longitude
    if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPad/i))) {
        var sites = [
            "http://maps.apple.com/?daddr=" + (lat + (-.1 * (Math.random()))) + "," + (long + (-.05 * (Math.random()))) + "&dirflg=r",
            "http://maps.apple.com/?daddr=" + (lat + (.1 * (Math.random()))) + "," + (long + (.05 * (Math.random()))) + "&dirflg=r",
            "http://maps.apple.com/?daddr=" + (lat + (-.1 * (Math.random()))) + "," + (long + (.05 * (Math.random()))) + "&dirflg=r",
            "http://maps.apple.com/?daddr=" + (lat + (.1 * (Math.random()))) + "," + (long + (-.05 * (Math.random()))) + "&dirflg=r"];
        window.location.assign(sites[Math.floor(Math.random() * sites.length)])
    }
    else {
        var sites = [
            "https://www.google.com/maps/dir/?api=1&origin=" + lat + "," + long + "&destination=" + (lat + (-.1 * (Math.random()))) + "," + (long + (-.05 * (Math.random()))) + "&travelmode=transit",
            "https://www.google.com/maps/dir/?api=1&origin=" + lat + "," + long + "&destination=" + (lat + (-.1 * (Math.random()))) + "," + (long + (-.05 * (Math.random()))) + "&travelmode=transit",
            "https://www.google.com/maps/dir/?api=1&origin=" + lat + "," + long + "&destination=" + (lat + (-.1 * (Math.random()))) + "," + (long + (-.05 * (Math.random()))) + "&travelmode=transit",
            "https://www.google.com/maps/dir/?api=1&origin=" + lat + "," + long + "&destination=" + (lat + (-.1 * (Math.random()))) + "," + (long + (-.05 * (Math.random()))) + "&travelmode=transit",
        ];
        window.open(sites[Math.floor(Math.random() * sites.length)])
    }
}




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
            <button onClick={mydrive}>Drive</button>
            <button onClick={mywalk}>Walk</button>
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
