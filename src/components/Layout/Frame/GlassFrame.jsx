export const GlassFrame = ({ children }) => {
  return (
    <>
      <div className={`glass-frame`}>
        <div className="glass-frame-inner">
          <div className="starlight nth-child(1)"></div>
          {children}
        </div>
      </div>
    </>
  )
}
