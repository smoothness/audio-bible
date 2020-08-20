import React from 'react'

const Audio = ({ audioSrcURL, audioTitle, ...props }) => (
  <div className="video">
    <audio
      src={audioSrcURL}
      title={audioTitle}
      // frameBorder="0"
      // webkitallowfullscreen="true"
      // mozallowfullscreen="true"
      // allowFullScreen
    />
  </div>
)
export default Audio