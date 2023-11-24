import { useState } from 'react'
import { Input } from './Input'
import { TextArea } from './TextArea'
import { Button } from 'components/Button/Button/Button'

export const Form = () => {
  const [formValues, setFormValues] = useState({
    nombre: '',
    apellido: '',
    asunto: '',
    email: '',
    telefono: '',
    mensaje: '',
  })

  const handleChange = e => {
    const { name, value } = e.target
    setFormValues(prevState => ({
      ...prevState,
      [name]: value,
    }))
    console.log(formValues)
  }

  const handleSubmit = e => {
    e.preventDefault()
    // Aquí puedes hacer algo con los valores capturados del formulario
    console.log('Valores del formulario:', formValues)
  }

  return (
    <>
      <form
        id="formContact"
        className="flex flex-col w-full"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-y-3">
          <div className="flex gap-4 w-full">
            <div className="w-full">
              <Input name="nombre" type="text" onChange={handleChange} />
            </div>
            <div className="w-full">
              <Input name="apellido" type="text" onChange={handleChange} />
            </div>
          </div>
          <div className="w-full">
            <Input name="asunto" type="text" onChange={handleChange} />
          </div>
          <div className="flex gap-4 w-full">
            <div className="w-full">
              <Input name="email" type="email" onChange={handleChange} />
            </div>
            <div className="w-full">
              <Input
                name="telefono"
                type="tel"
                pat={true}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <TextArea name="mensaje" onChange={handleChange} />
          </div>
          <div>
            <Button
              text="enviar"
              custom="w-full justify-center"
              type="submit"
              onClick={handleSubmit}
            />
          </div>
        </div>
      </form>
    </>
  )
}
