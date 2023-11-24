interface Props {
  icon: JSX.Element
  title: string
}
export const CardGrid = ({ icon, title }: Partial<Props>) => {
  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <div className="flex text-5xl">
          <span className="">{icon}</span>
        </div>
        <div className="flex">
          <h3 className="font-inter font-bold">
            <span className="bgText">{title}</span>
          </h3>
        </div>
      </div>
    </>
  )
}
