import React from 'react'
import FullContainer from '../common/FullContainer'
import Container from '../common/Container'

export default function Video() {
  return (
    <FullContainer>
      <Container className='h-screen'>
        <iframe
        src="https://www.youtube.com/embed/TuJXG9841tc"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-[625px]"
        />

      </Container>
    </FullContainer>
  )
}
