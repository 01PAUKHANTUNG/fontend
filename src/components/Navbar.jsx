import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router'
import logo from '../assets/logo.jpg'
import cart from '../assets/cart.png'
import search from '../assets/icon/search.png'
import account from '../assets/icon/account.png'
import trolley from '../assets/icon/trolley.png'
import shop from '../assets/icon/shop.png'
import { ShopContext } from '../context/GoshenContext'
import humbagar from '../assets/icon/menu.png'
import dropdown from '../assets/icon/dropdown.png'

const Navbar = () => {
  const {getItemCount, getCartTotal, currency, products} = useContext(ShopContext)
  const [subMenu, setSubmenu] = useState();
  const [searchText, setSearchText] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const wrapperRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);


  const handleSearch = (value) => {
    setSearchText(value);
    if (value.trim() === "") {
      setFiltered([]);
      setShowDropdown(false);
      return;
    }

    // Filter by product name OR category
    const result = products.filter((item) =>
      item.category.toLowerCase().includes(value.toLowerCase()) ||
      item.description.toLowerCase().includes(value.toLowerCase()) ||
      item.subCategory.toLowerCase().includes(value.toLowerCase())
    );
    setFiltered(result);
    setShowDropdown(true);
  };

  const handleSelect = (item) => {
    setSearchText(item.description);   // show selected name in input
    setShowDropdown(false);     // hide dropdown
    console.log("Selected Product ID:", item.id); // <-- You use this ID as needed
  };

  useEffect(() => {
  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setShowDropdown(false);
      setFiltered([]);
      setSearchText("");
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);


  return (
    <div className='w-full mx-auto'>
       <div className='w-full flex justify-between border-gray-300 border-b-2 items-center px-5 py-2'>
        <Link to='/'> 
            <img className='w-[90px] md:w-[110px] cursor-pointer hover:scale-105 ' src={logo} alt=''/>
        </Link>

         <div className='flex items-center gap-6 justify-between'>
          <div ref={wrapperRef} className='flex gap-2 w-[200px] md:w-[600px] rounded-full outline-none border-2 border-gray-300 py-3 px-6 hover:border-gray-500'>
             <img src={search} className='w-[30px]' alt='search icon' /> 

          <div className="relative w-64">
            <input
              type="text"
              value={searchText}
              onChange={(e) => handleSearch(e.target.value)}
              onClick={() => searchText && setShowDropdown(true)}
              placeholder="Search product..."
              className="w-[120px] md:w-[400px] border-none outline-none"
            />

            {/* DROPDOWN LIST */}
            {showDropdown && filtered.length > 0 && (
              <ul className="w-[300px] absolute top-12 left-[-150px]  md:top-full md:left-0 sm:w-[500px] bg-white border mt-1 rounded shadow max-h-96 overflow-y-auto z-50">
                {filtered.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => handleSelect(item)}
                    className="p-2 hover:bg-gray-100 cursor-pointer">
                      <Link to={`/product/${item.id}`} className="flex gap-2 font-semibold items-center">
                       <img src={item.image} className="w-[80px] h-[80px]" alt=' ' />
                       <div className='flex flex-col gap-2'>
                           <p>{item.category}</p> 
                           <span className="text-sm text-gray-500">{item.subCategory}</span>
                      </div>
                      </Link>
                      <span className="flex text-sm text-gray-500">{item.description}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          </div>                       
               <Link to='/login' className='hidden md:flex gap-4 items-center font-semibold justify-center w-[150px] py-2 px-2 border-2 border-black rounded-full hover:bg-amber-500 hover:border-none'>
               <img src={account} className='w-[30px]' alt='' /> 
                Account </Link>
            <Link to='/cart' className='hidden md:flex gap-2 justify-center w-[150px] py-3 px-2 rounded-full bg-black text-white font-bold hover:bg-gray-400 hover:text-black'><img src={trolley} className='w-[25px]' /> {currency}{`${getCartTotal()}.00`} {`(${getItemCount()})`} </Link>     
         </div>
       </div>

       <div className="flex sm:border-b-2 border-gray-300 py-2 px-4 justify-between items-center">
          <div className='flex sm:hidden justify-between relative group w-full'>
              <img  onClick={()=>setShowMenu(!showMenu)} src={humbagar} className='sm:hidden cursor-pointer hover:scale-105' alt=''/> 
              <div className='flex gap-6 items-center px-6'>     
                  <a href='https://www.google.co.in/maps/place/Goshen+Store/@-37.8170503,145.2273995,21z/data=!4m15!1m8!3m7!1s0x6ad63bd793ab0c59:0x420149c429426364!2s2C+Station+St,+Ringwood+VIC+3134,+Australia!3b1!8m2!3d-37.8170323!4d145.2274898!16s%2Fg%2F11pvcv6wh6!3m5!1s0x6ad63bdaadcdca65:0x12868807cd00adac!8m2!3d-37.8169151!4d145.2274987!16s%2Fg%2F11rsny231p?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D' 
                   className='flex flex-col gap-3 hover:text-gray-500 active:text-gray-400'>
                  <img src={shop} className='hidden hover:scale-105 w-[30px]' alt='' /> My Store | Closing at 5 pm</a>
             </div>   

            <div className={`${showMenu ? 'absolute top-14 w-full h-auto py-4 px-4 bg-gray-200 ': 'hidden '}`}>
              <ul className='flex-col gap-4'> 
                 <NavLink onClick={()=>setShowMenu(!showMenu)} className='flex py-2 px-4  font-semibold text-xl  hover:text-amber-500 ' to='/'> Home </NavLink>     
                 <NavLink onClick={()=>setShowMenu(!showMenu)} className='flex py-2 px-4  font-semibold text-xl  hover:text-amber-500' to='/about-us'> About Us </NavLink>      
                 <div>
                     <li onClick={()=>setSubmenu(!subMenu)} className='cursor-pointer flex py-2 px-4  font-semibold text-xl  hover:text-amber-500 justify-between'> 
                       <p> Products </p>
                       <img className={`${subMenu ? 'rotate-180': ''} w-[25px]`} src={dropdown} alt='' />
                     </li>
                    {subMenu ? 
                    <div onClick={()=>setSubmenu(!subMenu)}  className='grid grid-cols-2 py-2 px-4 gap-3 '>  
                       <NavLink onClick={()=>setShowMenu(!showMenu)} to='/groceries' className='hover:text-amber-500 active:text-amber-700'> Groceries</NavLink>
                       <NavLink onClick={()=>setShowMenu(!showMenu)} to='/beauti&cosmetics' className='hover:text-amber-500 active:text-amber-700'> Beauti & Cosmetics </NavLink>
                       <NavLink onClick={()=>setShowMenu(!showMenu)} to='/vegetables&fruits'className='hover:text-amber-500 active:text-amber-700'> Vegetables & Fruits </NavLink>
                       <NavLink onClick={()=>setShowMenu(!showMenu)} to='/snacks&drinks' className='hover:text-amber-500 active:text-amber-700'> Snacks & Drinks </NavLink>
                       <NavLink onClick={()=>setShowMenu(!showMenu)} to='/homewares' className='hover:text-amber-500 active:text-amber-700'> Homewares </NavLink>
                       <NavLink onClick={()=>setShowMenu(!showMenu)} to='/books&stationery' className='hover:text-amber-500 active:text-amber-700'> Books & Stationery </NavLink>     
                    </div> :'' } 
                     
                  </div>     
                 <NavLink onClick={()=>setShowMenu(!showMenu)} className='flex py-2 px-4 font-semibold text-xl  hover:text-amber-500' to='/contact-us'> Contact Us </NavLink>
                 <Link onClick={()=>setShowMenu(!showMenu)} to='/login' className='flex py-2 px-4 font-semibold text-xl  hover:text-amber-500'> Account </Link>
                 <Link onClick={()=>setShowMenu(!showMenu)} to='/cart' className='flex gap-2 justify-center w-[150px] py-3 px-2 rounded-full bg-black text-white font-bold hover:bg-gray-400 hover:text-black'><img src={trolley} className='w-[25px]' /> {currency}{`${getCartTotal()}.00`} {`(${getItemCount()})`} </Link>     
             </ul>            
           </div>   
        </div>

          <ul className='hidden sm:flex gap-4'> 
             <NavLink className='py-2 px-4  font-semibold text-xl  hover:text-amber-500 ' to='/'> Home </NavLink>     
             <NavLink className='py-2 px-4   font-semibold text-xl  hover:text-amber-500' to='/about-us'> About Us </NavLink>      
             <ul className=''>       
               <li className='relative'
               onMouseEnter={()=>setSubmenu(true)}
               onMouseLeave={()=>setSubmenu(false)}
               >

               <button className='hover:text-amber-500 py-2 px-4 font-semibold text-xl'> Products </button>
               {subMenu && (<div className='absolute left-0 top-full text-xl grid grid-cols-4 gap-6 bg-white shadow-lg border rounded-md p-6 w-[1000px] z-50'>
                   <NavLink to='/groceries' className='hover:text-amber-500 active:text-amber-700'> Groceries</NavLink>
                   <NavLink to='/beauti&cosmetics' className='hover:text-amber-500 active:text-amber-700'> Beauti & Cosmetics </NavLink>
                   <NavLink to='/vegetables&fruits'className='hover:text-amber-500 active:text-amber-700'> Vegetables & Fruits </NavLink>
                   <NavLink to='/snacks&drinks' className='hover:text-amber-500 active:text-amber-700'> Snacks & Drinks </NavLink>
                   <NavLink to='/homewares' className='hover:text-amber-500 active:text-amber-700'> Homewares </NavLink>
                   <NavLink to='/books&stationery' className='hover:text-amber-500 active:text-amber-700'> Books & Stationery </NavLink>                 
               </div>
                )}
               </li>
             </ul>          
             <NavLink className='py-2 px-4   font-semibold text-xl  hover:text-amber-500' to='/contact-us'> Contact Us </NavLink>    
          </ul>
        

          <div className='hidden sm:flex gap-6 items-center px-6'>     
             <a href='https://www.google.co.in/maps/place/Goshen+Store/@-37.8170503,145.2273995,21z/data=!4m15!1m8!3m7!1s0x6ad63bd793ab0c59:0x420149c429426364!2s2C+Station+St,+Ringwood+VIC+3134,+Australia!3b1!8m2!3d-37.8170323!4d145.2274898!16s%2Fg%2F11pvcv6wh6!3m5!1s0x6ad63bdaadcdca65:0x12868807cd00adac!8m2!3d-37.8169151!4d145.2274987!16s%2Fg%2F11rsny231p?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D' 
             className='flex gap-3 hover:text-gray-500 active:text-gray-400'>
             <img src={shop} className='hover:scale-105 w-[30px]' alt='' /> My Store | Closing at 5 pm</a>
          </div>

       </div>

    </div>
  )
}

export default Navbar
