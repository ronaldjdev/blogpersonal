export const TimelineItem = ({ title, items, imageUrl }) => (
  <div className="tl-item">
    <div className="tl-bg" style={{ backgroundImage: `url(${imageUrl})` }}></div>
    <div className="tl-year">
      <p className="f2 capitalize font-poppins font-semibold bgText">{title}</p>
    </div>
    <div className="tl-content">
      {items.map((item, index) => (
        <p key={index} className="font-poppins font-semibold capitalize bgText">
          {item}
        </p>
      ))}
    </div>
  </div>
);