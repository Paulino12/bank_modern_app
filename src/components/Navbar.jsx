import React, { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../contants'
// import react scroll
import { Link as LinkScroll } from 'react-scroll'
import { useEffect } from 'react'

const Navbar = () => {

  const [activeLink, setActiveLink] = useState('')
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    console.log(activeLink)
  }, [activeLink])

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar fixed top-0 right-0 px-10 z-10'>
      <img src={logo} alt="hoobank" className='w-[124px] h-[32px]' />
      <ul className='list-none sm:flex hidden justify-end items-center'>
        {navLinks.map((nav, index) => (
          <LinkScroll 
          activeClass='active'
          to={nav.id}
          spy={true}
          smooth={true}
          duration={500}
          onSetActive={() => {
              setActiveLink(nav.id);
          }}
          >
            <li key={nav.id} 
            className={`${activeLink === nav.id ? `text-white relative before:absolute 
            font-poppins font-normal cursor-pointer text-[16px]
            before:bottom-0 before:left-0 before:w-full before:h-1 before:bg-gradient-to-r before:from-blue-300` 
            : 
            'font-poppins font-normal cursor-pointer text-[16px] text-dimWhite hover:text-white'} 
            ${index === navLinks.length - 1 ? 'mr-0' : 'mr-4'}`}>
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>
          </LinkScroll>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev)}/>
          <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
            <ul className='list-none flex-col justify-end items-center'>
              {navLinks.map((nav, index) => (
                <LinkScroll 
                activeClass='active'
                to={nav.id}
                spy={true}
                smooth={true}
                duration={500}
                onSetActive={() => {
                    setActiveLink(nav.id);
                }}
                >
                    <li key={nav.id} 
                    className={`${activeLink === 'features' ? 'text-dimBlue' : 'font-poppins font-normal cursor-pointer text-[16px] text-dimBlue'} 
                    ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}>
                      {/* <a href={`#${nav.id}`}> */}
                        {nav.title}
                      {/* </a> */}
                    </li>
                </LinkScroll>
                
              ))}
            </ul>
          </div>
      </div>
    </nav>
  )
}

export default Navbar