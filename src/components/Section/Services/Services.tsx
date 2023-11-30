import { InfoCard } from 'components/Cards/InfoCard/InfoCard';
import { Title } from 'components/Section/Title/Title';
import portal from 'assets/images/portal.png';
import backImg from 'assets/svg/back-img.svg';
import frontImg from 'assets/svg/front.svg';
import uxUiImg from 'assets/svg/ux_ui.svg';


export const Services = () => {

  const dataSevice = [
    {
      title: 'Diseño UI / UX',
      description: "Destaca la importancia del diseño de interfaz (UI) y cómo puede atraer y cautivar a los usuarios",
      image: uxUiImg,
      svg: uxUiImg,
      revert: false
    },
    {
      title: 'Front-end',
      description: 'Potencia tu presencia en línea con un desarrollo frontend excepcional, creando interfaces de usuario atractivas y funcionales',
      image: frontImg,
      svg: frontImg,
      revert: true
    },
    {
      title: 'Back-end',
      description: 'Desarrolla aplicaciones web y APIs robustas, optimizando el rendimiento y el tiempo de respuesta de tus aplicaciones',
      image: backImg,
      svg: backImg,
      revert: false
    }
  ];
  return (
    <>

      {/* Info services */}

      <div className="relative flex flex-col items-center">
        <img className="w-[800px]" src={portal} />
        <div className="absolute inset-40 mt-20 mb-40">
          <Title
            title="Impulsa tus proyectos"
            subtitle="Desarrollo web completo para potenciar tu presencia en linea." />
        </div>
      </div>
      <div className="">
        {dataSevice.map(({ title, description, image, svg, revert }) => (
          <InfoCard
            key={title}
            title={title}
            description={description}
            image={image}
            svg={svg}
            imageOnRight={revert} />
        ))}
      </div>

    </>
  );
};
