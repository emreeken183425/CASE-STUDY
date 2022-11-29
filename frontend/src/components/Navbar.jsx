import React from 'react'
import {useNavigate} from 'react-router-dom'
function Navbar() {

const navigate=useNavigate()
  return (
    <nav className="navbar navbar-expand bg-primary ">
      <div className="container-fluid  ">
    <h3 onClick={()=>navigate('/')} >CASE STUDY</h3>
      <form className="d-flex  justify-content-center " role="search">
        <input className="form-control m-1 w-100   " type="search" placeholder="Search a Book ..."  />
        <button class="btn btn-outline btn-success" type="submit">Search</button>
      </form>
      <button class="btn btn-outline btn-warning" onClick={()=>navigate('/form')} type="submit">Add new record</button>
   
  </div>
</nav>
  )
}

export default Navbar