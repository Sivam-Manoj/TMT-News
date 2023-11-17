const Navbar = ({setCategory}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#" onClick={()=>alert("This website made by manoj.     have a nice day:)")}><span className=" badge bg-light text-dark fs-4">TMT News</span></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse cursor-pointer" id="navbarNav">
        <ul className="navbar-nav cursor-pointer">  
          <li className="nav-item">
            <div className="nav-link cursor-pointer" onClick={()=>setCategory("technology")} href="#">Technology</div>
          </li>
          <li className="nav-item">
            <div className="nav-link" href="#" onClick={()=>setCategory("business")} >Business</div>
          </li>
          <li className="nav-item">
            <div className="nav-link" href="#" onClick={()=>setCategory("health")} >Health</div>
          </li>
          <li className="nav-item">
            <div className="nav-link" href="#" onClick={()=>setCategory("science")} >Science</div>
          </li>
          <li className="nav-item">
            <div className="nav-link" href="#" onClick={()=>setCategory("sports")} >Sports</div>
          </li>
          <li className="nav-item">
            <div className="nav-link" href="#" onClick={()=>setCategory("entertaiment")} >Entertainment</div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar