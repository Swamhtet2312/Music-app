import React from 'react'
import '../assets/style.css'

const Navbar = () => {
  return (
    <div className='navBar'>
        <ul>
            <li>
                <a href="">
                    <img src="https://songgstreamm.000webhostapp.com/public/static/logo.jpg" alt="" width='100px'/>
                    <h1>Headbanging</h1>
                </a>
            </li>
            <br />
            <li>
                <a href="">
                    <h2>Home</h2>
                </a>
            </li>
            <br />
            <li className='fainted'><h4>MEDIA</h4></li>
            <br />
            <li><a href=""><h2>Playlists</h2></a></li>
            <li><a href=""><h2>Community</h2></a></li>
            <li><a href=""><h2>Profile</h2></a></li>
            <li><a href=""><h2>Credit</h2></a></li>
            <li><a href=""><h2>Request</h2></a></li>
            <br />
            <li className='fainted'><h4>SETTING</h4></li>
            <br />
            <li><a href=""><h2>Setting</h2></a></li>
            <br />
            <li className='fainted'><h4>ACCOUNT</h4></li>
            <br />
            <li><a href=""><h2>Login</h2></a></li>
            <li><a href=""><h2>Sign up</h2></a></li>
        </ul>
    </div>
  )
}

export default Navbar