import React, {useState} from 'react'; 

function Navbar () {
  const[showLinks, setShowLinks] = useState(false);
  return( 
  <div className="Navbar">  
    <div className="leftside"></div>
      <div classname="Links">
      <a href="/Home">Home</a>
      <a href="/Admin"> Admin</a>
      <a href="/Teacher">Teacher</a>
      <a href="/GuestTeacher">Guest Teacher</a>
    <div className="rightside"></div>

    </div>
    
  </div>
  )
}
export default Navbar;