import { Link } from 'react-router-dom'

export const Brand = () => {
  return (
    <>
      <div className="flex">
        <Link to="/">
          <h1 className="font-nano text-2xl ">
            <span className="bgText">ronald</span>
          </h1>
        </Link>
      </div>
    </>
  )
}
