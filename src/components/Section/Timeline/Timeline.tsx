import radar2 from 'assets/images/radar2.png'
import { TimelineItem } from './TimelineItems'

export const Timeline = () => {
  const timelineData = [
    { title: 'lenguajes', items: ['python', 'Javascript', 'typescript', 'css3', 'htlm5'], imageUrl: '' },
    { title: 'frameworks', items: ['django', 'express.js', 'react.js', 'next.js'], imageUrl: '' },
    { title: 'librerias', items: ['bootstrap', 'redux / Redux Toolkit', 'prisma ORM', 'sequelize ORM', 'tailwind CSS', 'SASS', 'LESS'], imageUrl: '' },
    { title: 'herramientas', items: ['adobe Photoshop', 'adobe Illustrator', 'adobe XD', 'figma', 'figma'], imageUrl: '' },
    { title: 'otros', items: ['git', 'github', 'jira', 'trello', 'slack'], imageUrl: '' },
  ];

  return (
    <div className="flex justify-center items-center mb-40 pb-5 w-full" style={{ background: `url(${radar2})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <section id="timeline" className="w-full">
        {timelineData.map((data, index) => (
          <TimelineItem key={index} {...data} />
        ))}
      </section>
    </div>
  );
}