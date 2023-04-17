import React, {useContext} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './Navbar.css'
import { UserContext } from '../../AppContext/UserContext'
import logo from '../../assets/logo.png'

const Navbar = () => {

  let navigate = useNavigate();

  const userDat = useContext(UserContext)
  const { value, setValue } = useContext(UserContext)

const logoutHandler = (e)=>{
  e.preventDefault();
  setValue(null)
  navigate("/")
}


  let navobjLeft = [
    {
      title: "Home",
      url: "/",
      cName: "nav-links",
    },
    {
      title: "Services",
      url: "/services",
      cName: "nav-links",
    },
    {
      title: "Blog",
      url: "/blog",
      cName: "nav-links",
    },
    {
      title: "About",
      url: "/about",
      cName: "nav-links",
    },
    {
      title: "Contact",
      url: "/contact",
      cName: "nav-links",
    }
  ]
    let navobjRight =[
    
    {
      title: "Register",
      url: "/register",
      cName: "nav-links-mobile"
    },
    {
      title: "Login",
      url: "/login",
      cName: "nav-links-mobile"
    },
    {
      title: "Logout",
      url: "/login",
      cName: "nav-links-mobile"
    }
  
  ];



  return (
    <nav className='head-menu'>
      <ul className='navbar'>
        {navobjLeft?.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                {item.title} 
              </Link>
            </li>
          )
        })}

        </ul>
        < img className='indexlogo' src={logo} alt="Logo"/>

        <ul className='navbar'>
          {userDat && userDat.value === null ?
        <>
            <li>
              <Link className={navobjRight[0].cName} to={navobjRight[0].url}>
                {navobjRight[0].title}
              </Link>
            </li>
            <li>
            <Link className={navobjRight[1].cName} to={navobjRight[1].url}>
              {navobjRight[1].title}
            </Link>
            </li>
          </>:
          <>
          <li>
            <Link className={navobjRight[2].cName} to="/dashboard" >
              {userDat.value.firstname}
            </Link>
          </li>
          <li>
            <Link className={navobjRight[2].cName} to={navobjRight[2].url} onClick={(e)=>logoutHandler(e)} >
              {navobjRight[2].title} 
            </Link>
          </li>
          </>
        }
    

        </ul>
    </nav>
  )
}

export default Navbar