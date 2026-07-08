import Logo from "../ui/Logo";
import SearchBar from "../search/SearchBar";

const MobileHeader = () => {
  return (
    <div className="md:hidden fixed top-0 left-0 right-0 z-30 bg-stone-100 shadow-sm">

      {/* Logo */}
      <div className="h-20 flex items-center justify-center">
        <Logo />
      </div>

      {/* Search */}
      <div className="px-3 pb-3 h-14 flex items-center justify-center">
        <SearchBar />
      </div>

    </div>
  );
};

export default MobileHeader;