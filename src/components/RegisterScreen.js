import React, { useState,useEffect } from 'react'
import Footer from './footer/Footer'
import Navbar from './navbar/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const RegisterScreen = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [phone, setPhone] = useState('')

  //const [ancestoremail, setAncestorEmail] = useState('')
  //const [age, setAge] = useState('')
  //const [gender, setGender] = useState('')
  //const [numchild, setNumChild] = useState('')
  const [error, setError] = useState('')
  const [role, setRole] = React.useState('member');
  const navigate = useNavigate()

  const [users, setUsers] = useState([]);

  
  

  const handleChange = (event) => {
      setRole(event.target.value)
    }

  const registerHandle = async (e) => {
      e.preventDefault()
      let config = {method:"POST",email:email,password:password,firstname:firstname,lastname:lastname,role:role,role:role,phone:phone}
      
      //navigate('/dashboard')
      try {
        const { data } = await axios
          .post('http://localhost/Backend/signup.php', config)
          //.post('http://localhost/react-backend/register.php', config)
          .then((response) => {
            //console.log(response.data)
            navigate('/login')
          })
          .catch((error) => {
            console.log(error)
          })
      } catch (error) {
        setTimeout(() => {
          setError('Invalid credentials...')
        }, 10)
      }
  }
  

  // const [userRegistration, setuserRegistration] = useState({

  //   username: "",
  //   email:"",
  //   phone:"",
  //   password:"",

  // });

  // const [records, setRecords] = useState([]);

  // const handleInput = (e) => {

  //   const name = e.target.name;
  //   const value = e.target.value;
  //   console.log(name, value);

  //   setuserRegistration({...userRegistration, [name] : value})


  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const newRecord = {...userRegistration, id: new Date().getTime().toString() }
  //   console.log(records);
  //   setRecords([...records, newRecord]);
  //   console.log(records);

  //   setuserRegistration({ username:"", email:"", phone:"", password:""});

  // }

  return (
    <>
        <Navbar/>
        <form action="" onSubmit={registerHandle}>
            <div>
              <label htmlFor='username'>First Name</label>
              <input type="text" autoComplete='off' 
              onChange={(e) => setFirstName(e.target.value)}
              name='username'  required/>
              
            </div>

            <div>
              <label htmlFor='username'>Last Name</label>
              <input type="text" autoComplete='off' 
              onChange={(e) => setLastName(e.target.value)}
              name='username' required/>
              
            </div>

            <div>
              <label htmlFor='email'>Email</label>
              <input type="text" autoComplete='off'
              onChange={(e) => setEmail(e.target.value)}
              name='email' id='email'/>
              
              
            </div>

            <div>
              <label htmlFor='phone'>Phone</label>
              <input type="text" autoComplete='off'
              onChange={(e) => setPhone(e.target.value)}
              name='phone' id='phone'/>
              
            </div>
            <div>
              <label htmlFor='password'>Password</label>
              <input type="password" autoComplete='off'
              onChange={(e) => setPassword(e.target.value)}
              name='password' id='password'/>
              
            </div>

            <div className="input-group">
                  <label>Role:</label>
                  <div>
                      <input type="radio" checked={role === 'student'} onChange={handleChange} value="student"/>
                      <label for="male">Student</label>
                      <input type="radio" checked={role === 'business_owner'} onChange={handleChange} value="business_owner"/>
                      <label for="female">Business Owners</label>
                      <input type="radio" checked={role === 'school_admin'} onChange={handleChange} value="school_admin"/>
                      <label for="other">School Admin</label>
                  </div>
              </div>

            <button type='submit'>Submit</button>

        </form>

        {/* <div>
          {
            records.map((curElem) => {
              const {id, username, email, phone, password} =curElem;
              return (
                <div className='showDataStyle' key={id}>
                  <p>{username}</p>
                  <p>{email}</p>
                  <p>{phone}</p>
                  <p>{password}</p>
                </div>

              )



            })
          }
        </div> */}


        <Footer/>

    </>
  )
}

export default RegisterScreen