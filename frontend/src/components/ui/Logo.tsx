import {Link} from "react-router-dom"

const Logo = () => {
  return (
    <div className="pb-2">
      <Link to="/">
        <p className="text-4xl md:text-2xl lg:text-2xl md:text-3xl font-bold text-amber-900">
          The Soil Beneath
        </p>
      </Link>
      <p className="text-center md:text-left lg:text-left text-sm md:text-md text-lime-700">Rooted in nature. Delivered to you.</p>
    </div>
  )
}

export default Logo