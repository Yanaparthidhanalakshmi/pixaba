import React from "react";
import { Link } from 'react-router-dom';
function Navbar (){
    return(
        <div id="nav">
        <ol>
            <h2>pixabay</h2>
            <li>Explore</li>
            <Link to={"/login"}><li>Login</li></Link>
            <li>Add Cart</li>
            <button id="nb">UpLoad</button>
        </ol>
        </div>
    )
}
export default Navbar