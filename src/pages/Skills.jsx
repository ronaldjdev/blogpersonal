// @ts-nocheck
import React from "react"

import {
  Container,
  Grids,
  Title,
} from 'components'
import radar2 from 'assets/images/radar2.png'
import ring from 'assets/images/ring.png'

export const Skills = () => {
  return (
    <>
      <Container>
        <div className="relative mb-40 flex flex-col items-center">
          <img className="w-[800px]" src={ring} />
          <div className="absolute inset-60 mt-20 mb-40">
            <Title
              title="Skills"
              subtitle="Potenciando mi trayectoria con un cojunto versatil de habilidades."
            />
          </div>
        </div>

        <div
          className="flex justify-center items-center mb-40 pb-5"
          style={{ background: `url(${radar2})`, backgroundPosition: 'center' }}
        >
          <div className="grid place-items-center place-content-center grid-rows-2 grid-cols-2 gap-x-6">
            <div className="flex flex-col items-center ">
              <div>
                <Title title="Lenguajes" size="text-2xl" />
              </div>
              <Grids />
            </div>
            <div className="flex flex-col items-center ">
              <div>
                <Title title="Frameworks" size="text-2xl" />
              </div>
              <Grids />
            </div>
            <div className="flex flex-col items-center ">
              <div>
                <Title title="Librerias" size="text-2xl" />
              </div>
              <Grids />
            </div>
            <div className="flex flex-col items-center ">
              <div>
                <Title title="Herramientas" size="text-2xl" />
              </div>
              <Grids />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
