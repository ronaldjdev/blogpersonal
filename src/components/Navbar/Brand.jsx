import { Link } from 'react-router-dom'

export const Brand = () => {
  return (
    <>
      <div className="flex">
        <Link to="/">
          <a className="font-nano text-2xl ">
            <span className="bgText">ronald</span>
          </a>
        </Link>
      </div>
    </>
  )
}
