import React from 'react'
// import App from './App.js'
import './header.css';


export default function Header(props) {
   return (
     <div className='site-header'>
         <div className='brandName'>
         <div>Code Starter Pack</div>
         {/* placeholder for dropdown box */}
         </div>
        <img src="CodeStarterPack.png"/>
     </div>
   )
}