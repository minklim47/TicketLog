import React from "react";
import { Link } from "react-router-dom";
import pic from "../assets/notfound.png"

function NotFound() {
  return (
    <div className="flex-container" style={{margin:"100px 20px", textAlign:"center", flexDirection:"column"}}>
      <h2>404 Page Not Found</h2>
       <h4 style={{margin:"20px 0"}}>Go to <Link to="/Home/:userId">Home Page</Link></h4> 
       <img src={pic} style={{width:"70%"}}/>
    </div>
  );
}

export default NotFound;
