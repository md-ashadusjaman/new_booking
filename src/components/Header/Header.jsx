
// import { useEffect, useRef, useContext } from 'react';
// import logo from '../../assets/images/logo.png';
// import userImg from '../../assets/images/avatar-icon.png';
// import { NavLink, Link } from 'react-router-dom';
// import { BiMenu } from 'react-icons/bi';
// import { authContext } from '../../context/AuthContext.jsx';

// const navLinks = [
//   { path: '/home', display: 'Home' },
//   { path: '/doctors', display: 'Find a Doctor' },
//   { path: '/services', display: 'Services' },
//   { path: '/contact', display: 'Contact' },
// ];

// const Header = () => {
//   const headerRef = useRef(null);
//   const menuRef = useRef(null);
//   const { user, role, token } = useContext(authContext);

//   const handleScroll = () => {
//     if (window.scrollY > 80) {
//       headerRef.current.classList.add('sticky_header');
//     } else {
//       headerRef.current.classList.remove('sticky_header');
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const toggleMenu = () => {
//     menuRef.current.classList.toggle('show_menu');
//   };

//   return (
//     <header className="header flex items-center" ref={headerRef}>
//       <div className="container">
//         <div className="flex items-center justify-between">
//           <div>
//             <img src={logo} alt="Logo" style={{ width: '50px', height: '50px' }} />
//           </div>

//           {/* Navigation menu */}
//           <div className="navigation" ref={menuRef}>
//             <ul className="menu flex items-center gap-[2.7rem]">
//               {navLinks.map((link, index) => (
//                 <li key={index}>
//                   <NavLink
//                     to={link.path}
//                     className={(navClass) =>
//                       navClass.isActive
//                         ? 'text-primaryColor text-[16px] leading-7 font-[600]'
//                         : 'text-textColor text-[16px] leading-7 font-[500] hover:text-red-800'
//                     }
//                   >
//                     {link.display}
//                   </NavLink>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="flex items-center gap-4">
//             {token && user ? (
//               <div>
//                 <Link to={role === 'doctor' ? '/doctors/profile/me' : '/users/profile/me'}>
//                   <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
//                     <img src={user.photo || userImg} className="w-full rounded-full" alt="User" />
//                   </figure>
//                   <h2>{user.name}</h2>
//                 </Link>
//               </div>
//             ) : (
//               <Link to="/login">
//                 <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
//                   Login
//                 </button>
//               </Link>
//             )}

//             <span className="md:hidden" onClick={toggleMenu}>
//               <BiMenu className="w-6 h-6 cursor-pointer" />
//             </span>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;











import { useEffect, useRef, useContext } from 'react';
import logo from '../../assets/images/logo.png';
import userImg from '../../assets/images/avatar-icon.png';
import { NavLink, Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import { authContext } from '../../context/AuthContext.jsx';

const navLinks = [
  { path: '/home', display: 'Home' },
  { path: '/doctors', display: 'Find a Doctor' },
  { path: '/services', display: 'Services' },
  { path: '/contact', display: 'Contact' },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { user, role, token } = useContext(authContext);

  const handleScroll = () => {
    if (window.scrollY > 80) {
      headerRef.current.classList.add('sticky_header');
    } else {
      headerRef.current.classList.remove('sticky_header');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    menuRef.current.classList.toggle('show_menu');
  };

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <img src={logo} alt="Logo" style={{ width: '50px', height: '50px' }} />
          </div>

          {/* Navigation menu */}
          <div className="navigation" ref={menuRef}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? 'text-primaryColor text-[16px] leading-7 font-[600]'
                        : 'text-textColor text-[16px] leading-7 font-[500] hover:text-red-800'
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4">
            {token && user ? (
              <div className="flex items-center gap-2 user-info">
                <Link to={role === 'doctor' ? '/doctors/profile/me' : '/users/profile/me'} className="flex items-center">
                  <figure className="w-[35px] h-[35px] rounded-full overflow-hidden">
                    <img src={user.photo || userImg} className="w-full h-full object-cover" alt="User" />
                  </figure>
                  <h2 className="ml-2 text-sm md:text-base font-semibold text-textColor">{user.name}</h2>
                </Link>
              </div>
            ) : (
              <Link to="/login">
                <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                  Login
                </button>
              </Link>
            )}

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;












{/* // import { useEffect, useRef, useContext } from 'react';
// import logo from '../../assets/images/logo.png';
// import { NavLink, Link } from 'react-router-dom';
// import { BiMenu } from 'react-icons/bi';
// import { authContext } from '../../context/AuthContext.jsx';

// const navLinks = [
//   { path: '/home', display: 'Home' },
//   { path: '/doctors', display: 'Find a Doctor' },
//   { path: '/services', display: 'Services' },
//   { path: '/contact', display: 'Contact' },
// ]; */}

// const Header = () => {
//   const headerRef = useRef(null);
//   const menuRef = useRef(null);
//   const { user, role, token } = useContext(authContext); // Using authContext correctly

//   // Effect to handle sticky header
//   useEffect(() => {
//     const handleStickyHeader = () => {
//       if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//         headerRef.current.classList.add('sticky_header');
//       } else {
//         headerRef.current.classList.remove('sticky_header');
//       }
//     };

//     window.addEventListener('scroll', handleStickyHeader);

//     return () => {
//       window.removeEventListener('scroll', handleStickyHeader); // Correctly removing event listener
//     };
//   }, []); // Empty dependency array to run only once on mount

//   const toggleMenu = () => {
//     menuRef.current.classList.toggle('show_menu');
//   };

//   return (
//     <header className="header flex items-center" ref={headerRef}>
//       <div className="container">
//         <div className="flex items-center justify-between">
//           <div>
//             <img src={logo} alt="Logo" style={{ width: '50px', height: '50px' }} />
//           </div>

//           {/* Menu */}
//           <div className="navigation" ref={menuRef} onClick={toggleMenu}>
//             <ul className="menu flex items-center gap-[2.7rem]">
//               {navLinks.map((link, index) => (
//                 <li key={index}>
//                   <NavLink
//                     to={link.path}
//                     className={navClass =>
//                       navClass.isActive
//                         ? 'text-primaryColor text-[16px] leading-7 font-[600]'
//                         : 'text-textColor text-[16px] leading-7 font-[500] hover:text-red-800'
//                     }
//                   >
//                     {link.display}
//                   </NavLink>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="flex items-center gap-4">
//             {token && user ? (
//               <Link to={`${role === 'doctor' ? '/doctors/profile/me' : '/users/profile/me'}`}>
//                 <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
//                   <img src={user?.photo || '../../assets/images/avatar-icon.png'} className="w-full rounded-full" alt="User" />
//                 </figure>
//                 <h2>{user?.name}</h2>
//               </Link>
//             ) : (
//               <Link to="/login">
//                 <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
//                   Login
//                 </button>
//               </Link>
//             )}
//             <span className="md:hidden" onClick={toggleMenu}>
//               <BiMenu className="w-6 h-6 cursor-pointer" />
//             </span>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
