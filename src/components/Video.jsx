import React from 'react'

export default function Video() {
  return (
    <div>

    <video width={400} controls autoPlay>
    <source src='https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4' />
</video>
</div>

  )
}
