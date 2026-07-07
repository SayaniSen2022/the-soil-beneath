import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import MobileBottomNav from "./MobileBottomNav"

const SharedLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <main className="flex-1 pb-20 md:pb-0">
        <Outlet/>
      </main>
      <Footer/>
      <MobileBottomNav/>
    </div>
  )
}

export default SharedLayout