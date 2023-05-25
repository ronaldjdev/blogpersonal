// @ts-nocheck
import { Button } from 'components/Button/Button/Button'
import cvPdf from "assets/CV.pdf"

export const AboutMe = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cvPdf;
    link.download = 'ronaldjdev.pdf'; // Opcional: especifica un nombre de archivo para la descarga
    link.click();
  };
  return (
    <>
      <div className="grid place-items-center font-poppins mx-auto ">
        <div className="flex ">
          Hola, Soy&nbsp;{' '}
          <span className="flex textFlux font-poppins font-bold">Ronald j Echeverry</span>
        </div>
        <div className="flex font-poppins textFlux">Desarrollador Web Full Stack</div>
        <div className="flex text-center  font-inter mb-5">
          Un apasionado por el codigo con años de experiencia en la creación de
          soluciones digitales de vanguardia. Si buscas un profesional
          comprometido con la excelencia y capaz de convertir tus ideas en
          realidad, has llegado al lugar correcto.
        </div>
        <div className="flex gap-10">
          <Button text="Contactame" />
          <Button text="Descargar CV" onClick={handleDownload}/>
        </div>
      </div>
    </>
  )
}
