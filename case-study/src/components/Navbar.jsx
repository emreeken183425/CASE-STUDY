import React from 'react'

function Navbar() {
  return (
    <nav className="navbar navbar-expand bg-primary ">
      <div className="container-fluid  ">
    <a className="navbar-brand" href="#">CASE STUDY</a>
      <form className="d-flex  justify-content-center " role="search">
        <input className="form-control m-1 w-100   " type="search" placeholder="Search a book ..."  />
        <button class="btn btn-outline btn-success" type="submit">Search</button>
      </form>
      <button class="btn btn-outline btn-warning" type="submit">Add new record</button>
   
  </div>
</nav>
  )
}

export default Navbar