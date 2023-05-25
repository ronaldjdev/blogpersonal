// @ts-nocheck
import { useState } from 'react'
import { Button } from 'components/Button/Button/Button'
import { GlassFrame } from 'components/Layout/Frame/GlassFrame'
import portal2 from 'assets/images/portal2.png'

export const ContactForm = () => {
  const Input = ({ name, type, pattern = false }) => (
    <>
      <div className="flex flex-col">
        <label className="capitalize font-inter font-light m-3" htmlFor={name}>
          {name}:
        </label>
        <div className="relative w-full">
          <div className="starlight "> </div>
          <input
            className={`bg-inherit border border-white-08 text-center w-full rounded-3xl focus:outline outline-1 outline-purple-600 outline-offset-2 p-2`}
            type={type}
            name={name}
            id={name}
            pattern={pattern && '[0-9]{10}'}
          />
        </div>
      </div>
    </>
  )
  const TextArea = ({ name }) => (
    <>
      <div className="flex flex-col ">
        <label className="capitalize font-inter font-light m-3" htmlFor={name}>
          {name}:
        </label>
        <div className="relative ">
          <div className="starlight "> </div>
          <textarea
            className="bg-inherit border border-white-08 text-justify w-full rounded-3xl focus:outline outline-1 outline-purple-600 outline-offset-2 p-4"
            name={name}
            id={name}
            cols={30}
            rows={10}
          ></textarea>
        </div>
      </div>
    </>
  )
  return (
    <>
      <div
        className="rounded-3xl"
        style={{
          background: `url(${portal2})`,
          backgroundPosition: 'bottom',
          backgroundSize: 'cover',
        }}
      >
        <GlassFrame>
          <div className="flex">
            <div className="flex w-1/2"></div>
            <form className="flex flex-col w-1/2">
              <div className="flex gap-4 w-full">
                <div className="w-full">
                  <Input name="nombre" type="text" />
                </div>
                <div className="w-full">
                  <Input name="Apellido" type="text" />
                </div>
              </div>
              <div className="w-full">
                <Input name="asunto" type="text" />
              </div>
              <div className="flex gap-4 w-full">
                <div className="w-full">
                  <Input name="email" type="email" />
                </div>
                <div className="w-full">
                  <Input name="telefono" type="tel" pattern={true} />
                </div>
              </div>
              <div>
                <TextArea name="mensaje" />
              </div>
              <div>
                <Button text="enviar" />
              </div>
            </form>
          </div>
        </GlassFrame>
      </div>
    </>
  )
}
