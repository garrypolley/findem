import React from 'react'
import PropTypes from 'prop-types'
import { AlertPostTemplate } from '../../templates/alert-post'

const AlertPostPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <AlertPostTemplate
      mainImage={getAsset(data.mainImage)}
      department={data.department}
      subjectName={data.subjectName}
      suppo={data.subheading}
      description={data.description}
      date={data.date}
      zipcode={data.zipcode}
      lat={data.lat}
      long={data.long}
      radius={data.radius}
      active={data.active}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

AlertPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default AlertPostPreview
