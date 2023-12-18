import React from 'react'
import './Style.css';
import logo from'./logo.png';
// import { Button } from 'antd';

console.log(logo);
function Title() {
    return (
      <div className="Title">
        <img id='logo' src={logo} alt='Logo'/>
        <div className='userLog'>
            <p>Name</p>
            <button>Logout</button>
            {/* <Button type="primary">Primary Button</Button> */}
        </div>
      </div>
    )
  }
export default Title