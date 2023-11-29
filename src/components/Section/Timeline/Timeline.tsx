import radar2 from 'assets/images/radar2.png'
export const Timeline = () => {
  return (
    <>
      <div
        className="flex justify-center items-center mb-40 pb-5 w-full"
        style={{ background: `url(${radar2})`, backgroundPosition: 'center' }}
      >
        <section id="timeline" className="w-full">

          <div className="tl-item">
            <div className="tl-bg" style={{ backgroundImage: "url(https://placeimg.com/801/801/nature)" }}></div>
            <div className="tl-year">
              <p className="f2 first-letter:uppercase font-poppins font-semibold bgText">lenguajes</p>
            </div>
            <div className="tl-content">
              <p className="font-poppins font-semibold  first-letter:uppercase bgText " >python</p>
              <p className="font-poppins font-semibold  first-letter:uppercase bgText " >Javascript</p>
              <p className="font-poppins font-semibold  first-letter:uppercase bgText " >typescript</p>
              <p className="font-poppins font-semibold  first-letter:uppercase bgText " >css3</p>
              <p className="font-poppins font-semibold  first-letter:uppercase bgText " >htlm5</p>
            </div>
          </div>

          <div className="tl-item">
            <div className="tl-bg" style={{ backgroundImage: "url(https://placeimg.com/802/802/nature)" }}></div>
            <div className="tl-year">
              <p className="f2 first-letter:uppercase font-poppins font-semibold bgText">frameworks</p>
            </div>
            <div className="tl-content">
              <p className="font-poppins font-semibold first-letter:uppercase bgText " >django</p>
              <p className="font-poppins font-semibold first-letter:uppercase bgText " >express.js</p>
              <p className="font-poppins font-semibold first-letter:uppercase bgText " >react.js</p>
              <p className="font-poppins font-semibold first-letter:uppercase bgText " >next.js</p>
              <p className="font-poppins font-semibold first-letter:uppercase bgText " ></p>
            </div>
          </div>

          <div className="tl-item">
            <div className="tl-bg" style={{ backgroundImage: "url(https://placeimg.com/803/803/nature)" }}></div>
            <div className="tl-year">
              <p className="f2 first-letter:uppercase font-poppins font-semibold bgText">librerias</p>
            </div>
            <div className="tl-content">
              <p className="font-poppins font-semibold first-letter:uppercase bgText " >bootstrap</p>
              <p className="font-poppins font-semibold first-letter:uppercase bgText " >redux / Redux Toolkit</p>
              <p className="font-poppins font-semibold first-letter:uppercase bgText " >prisma ORM</p>
              <p className="font-poppins font-semibold first-letter:uppercase bgText " >sequelize ORM</p>
              <p className="font-poppins font-semibold first-letter:uppercase bgText " >tailwind CSS</p>
              <p className="font-poppins font-semibold first-letter:uppercase bgText " >SASS</p>
              <p className="font-poppins font-semibold first-letter:uppercase bgText " >LESS</p>

            </div>
          </div>

          <div className="tl-item">
            <div className="tl-bg" style={{ backgroundImage: "url(https://placeimg.com/800/800/nature)" }}></div>
            <div className="tl-year">
              <p className="f2 first-letter:uppercase font-poppins font-semibold bgText">herramientas</p>
            </div>
            <div className="tl-content">
              <p className="font-poppins font-semibold first-letter:uppercase bgText " >adobe Photoshop</p>
              <p className="font-poppins font-semibold first-letter:uppercase bgText " >adobe Illustrator</p>
              <p className="font-poppins font-semibold first-letter:uppercase bgText " >adobe XD</p>
              <p className="font-poppins font-semibold first-letter:uppercase bgText " >figma</p>
              <p className="font-poppins font-semibold first-letter:uppercase bgText " >figma</p>
            </div>
          </div>

          <div className="tl-item">
            <div className="tl-bg" style={{ backgroundImage: "url(https://placeimg.com/800/800/nature)" }}></div>
            <div className="tl-year">
              <p className="f2 first-letter:uppercase font-poppins font-semibold bgText">otros</p>
            </div>
            <div className="tl-content">
              <p className="font-poppins font-semibold first-letter:uppercase bgText " >git</p>
              <p className="font-poppins font-semibold first-letter:uppercase bgText " >github</p>
              <p className="font-poppins font-semibold first-letter:uppercase bgText " >jira</p>
              <p className="font-poppins font-semibold first-letter:uppercase bgText " >trello</p>
              <p className="font-poppins font-semibold first-letter:uppercase bgText " >slack</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}