// @ts-nocheck
import React from 'react'
import { Input } from './Input'
import { TextArea } from './TextArea'
import { Button } from 'components/Button/Button/Button'

export const Form = () => {
  return (
    <>
      <form className="flex flex-col w-full">
        <div className="flex flex-col gap-y-3">
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
              <Input name="telefono" type="tel" pat={true} />
            </div>
          </div>
          <div>
            <TextArea name="mensaje" />
          </div>
          <div>
            <Button text="enviar" custom="w-full justify-center" />
          </div>
        </div>
      </form>
    </>
  )
}
