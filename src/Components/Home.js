import React, { useState } from 'react';

import CountryList from './CountryList';
import nightMoon from '../assests/night_moon.png';
import Country from './Country'
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {

  //redux part
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const [darkMode, setDarkMode] = useState(false);


  const style= {
    'darkBlue':      (darkMode == true)? 'hsl(209, 23%, 22%)': 'hsl(0, 0%, 100%)',
    'veryDarkBlue':     (darkMode == true)? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)',
    'text':              (darkMode == true)? 'hsl(0, 0%, 100%)':  'hsl(200, 15%, 8%)',
    'darkGray':           'hsl(0, 0%, 52%)',
  }



  return (




    <>
      <div style={{ height: 90, width: "100%", display: "flex", justifyContent: "center" ,backgroundColor:style['veryDarkBlue'] }}>
        <div style={{ height: "100%", width: "86%", display: "flex", justifyContent: "space-between" }}>
          <p style={{color:style['text']}}>Where in the world?</p>
          <div style={{ marginTop: 20, display: "flex" }} onClick={() => { setDarkMode(!darkMode) }}>


            <div style={{ height: 20, width: 22 }}>
              <img style={{ height: "100%", width: "95%",filter:`invert(${(darkMode)?"100%":"0%"})` }} src={nightMoon} alt="" />
            </div>
            <span style={{color:style['text']}}>dark mode</span>
          </div>
        </div>
      </div>
      {
        (products.allProducts.isDetailsTriggered)?(
          <Country  myTheme={style} />
        ):(
            <CountryList myTheme={style} />
        )
      }
      
    </>
  )
}

export default Home