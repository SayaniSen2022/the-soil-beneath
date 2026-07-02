import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ImSearch } from "react-icons/im";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search.trim()) return;

    navigate(`/products?search=${encodeURIComponent(search)}`);
  }

  return (
    <form action="/search" className="inline-block relative w-3/5 md:w-1/2" onSubmit={handleSubmit}>
      <div className='flex justify-between items-center border border-amber-600 rounded-3xl bg-white w-full'>
      <div className="nav-left inline-block relative w-full">
        <label htmlFor="searchbar" style={{display: "none"}}>Search</label>
        <input  
          className='border-none rounded-3xl outline-none w-full py-2 px-4 placeholder:text-lg placeholder:text-gray-600' 
          type="text" value={search} onChange={(e) => setSearch(e.target.value)} 
          name="searchbar" id="searchbar" placeholder='Search plants...' 
        />
      </div>
      <div className="nav-right py-2 px-4 bg-yellow-100 border-r rounded-r-3xl cursor-pointer">
        <button type="submit" className="border-none"><ImSearch className="text-xl text-gray-600" /></button>
      </div>      
    </div>
    </form>

  )
}

export default SearchBar