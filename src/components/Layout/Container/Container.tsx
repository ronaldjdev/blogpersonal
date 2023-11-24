interface Props {
  children: JSX.Element | JSX.Element[]
  pages: boolean
}
export const Container = ({ children, pages }: Partial<Props>) => {
  const variant = pages
    ? 'mx-0'
    : 'mx-auto  max-w-screen-xl px-4 sm:px-6 lg:px-8'
  return (
    <div className={`${variant} flex flex-col justify-center w-full `}>
      {children}
    </div>
  )
}
