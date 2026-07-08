import Logo from "../ui/Logo";
import SearchBar from "../search/SearchBar";
import DesktopActions from "../ui/DesktopActions";

const DesktopNavbar = () => {
  return (
    <div className="hidden md:flex
                fixed top-0 left-0 right-0
                h-20
                items-center
                justify-around
                bg-stone-100
                z-30">

    <Logo />

    <SearchBar />

    <DesktopActions />
</div>
  )
}

export default DesktopNavbar