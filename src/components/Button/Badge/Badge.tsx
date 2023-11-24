interface Props {
  icon: JSX.Element
}

export const Badge = ({ icon }: Partial<Props>) => {
  return (
    <>
      <a className={`bgGradient textFlux font-inter text-sm rounded-2xl `}>
        {icon} New: Language
      </a>
    </>
  )
}
