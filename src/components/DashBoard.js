import React, { useState, useContext, useEffect} from 'react'
import { UserContext } from '../AppContext/UserContext'
import { Link, useNavigate } from 'react-router'
import dsf from '../assets/Profile/60111.jpg'
import Footer from '../components/footer/Footer'
import Navbar from './navbar/Navbar'

const DashBoard = () => {
    // debugger;
  let navigate = useNavigate()
  // debugger
  const userDat = useContext(UserContext)
  const [user, setUser] = useState('')
  const [userRole, setRole] = useState('')
  const {email, firstname, lastname, role}  = userDat.value
  const changePassHandler = (e) => {
    e.preventDefault()
    navigate('/ChangePassword')
  }

  useEffect(() => {
    return () => {
      if (userDat) {
        setUser(userDat.value.firstname)
        setRole(userDat.value.role)
      }
    }
  }, [user, userRole])
  return (
    <>
    
    <Navbar />
    <section className='mainbody'>
      <div className='bodyWrapper'>
        {userDat && userDat.value.role === 'admin' ? (
          <main>
            <div className='user-details'>
              <figure className='user-img'>
                <img className='rounded-img' src={dsf} alt='profile image' />
              </figure>
              <div className='prof-details'>
                <h1>
                  {'Welcome '} {user || firstname}
                </h1>
                <div className='inf'>
                  <div className='det-group'>
                    <label>Username: </label>
                    <div className='details'>{email}</div>
                  </div>
                  <div className='det-group'>
                    <label>First Name: </label>
                    <div className='details'>{user || firstname}</div>
                  </div>
                  <div className='det-group'>
                    <label>Last Name: </label>
                    <div className='details'>{lastname}</div>
                  </div>
                 
                  <div className='det-group'>
                    <label>Role: </label>
                    <div className='details'>{userRole || role}</div>
                  </div>
                </div>
                <div className='change-info'>
                  <div className='btn-chg'>
                    <input
                      type='button'
                      className='chgpwd-btn'
                      onClick={changePassHandler}
                      value='Change Password'
                    ></input>
                  </div>
                </div>
              </div>
            </div>
            {/*<UserDataAdmin userDat={userDat} />*/}
          </main>
        ) : (
          <main>
            <div className='user-details'>
              <figure className='user-img'>
                <img className='rounded-img' src={dsf} alt='profile image' />
              </figure>
              <div className='prof-details'>
                <h1>
                  {'Welcome '} {user || firstname}
                </h1>
                <div className='inf'>
                  <div className='det-group'>
                    <label>Username: </label>
                    <div className='details'>{email}</div>
                  </div>
                  <div className='det-group'>
                    <label>First Name: </label>
                    <div className='details'>{user || firstname}</div>
                  </div>
                  <div className='det-group'>
                    <label>Last Name: </label>
                    <div className='details'>{lastname}</div>
                  </div>
                  
                  <div className='det-group'>
                    <label>Role: </label>
                    <div className='details'>{userRole || role}</div>
                  </div>
                </div>
                <div className='change-info'>
                  <div className='btn-chg'>
                    <input
                      type='button'
                      className='chgpwd-btn'
                      onClick={changePassHandler}
                      value='Change Password'
                    ></input>
                  </div>
                  
                </div>
              </div>
            </div>

        </main>

        )}

    </div>
    </section>
    <Footer />
    </>
  )
}

export default DashBoard