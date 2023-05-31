// @ts-nocheck
import React from 'react'
import { Container, FeatureCard, GridSwiper, Title } from 'components'

import halo from 'assets/images/halo.png'

export const Project = () => {
  return (
    <>
      <Container>
        <div className="relative flex flex-col items-center">
          <img className="w-[800px]" src={halo} />
          <div className="absolute inset-80 mt-20 mb-40">
            <Title
              title="Proyectos"
              subtitle="Transformando Ideas en Realidad."
            />
          </div>
        </div>
        <div className="flex mb-40">
          {/* <GridSwiper />
           */}
          <FeatureCard />
          <FeatureCard />
        </div>
      </Container>
    </>
  )
}
