export const Loader = () => {
  return (

    <>
      <div>
        <h1>BLACK-HOLE</h1>
        <svg width="0" height="0">
          <filter id="gooey-black-hole">
            <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 50 -16" result="goo" />
          </filter>
        </svg>
        <div className="black-hole">
          <ul className="gooey-container">
            <li className="bubble"></li>
            <li className="bubble"></li>
            <li className="bubble"></li>
            <li className="bubble"></li>
            <li className="bubble"></li>
            <li className="bubble"></li>
          </ul>
        </div>
      </div>
    </>

  )
}