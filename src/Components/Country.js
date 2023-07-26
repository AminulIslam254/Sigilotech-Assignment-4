import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import data from '../assests/data.json';
import { makeStyles } from '@material-ui/core';

import {ArrowLeftOutlined} from '@ant-design/icons'
import { setDetailsTriggered } from '../redux/actions/ProductActions';



const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  '@media (min-width: 780px)': {
    alignItems: "normal"

  },

  button1: {
    '&:hover': {
      cursor: "pointer",
    },
  },

  leftBox1: {
    '@media (max-width: 780px)': {
      width: "300px !important",
    },
  },
  leftBoxImg1: {
    '@media (max-width: 780px)': {
      backgroundSize: "cover",
      width: "100% !important"
    },
  },
  rightBox1: {
    '@media (max-width: 780px)': {
      width: "414px !important",
      height: "480px !important",
      display: "flex",
      justifyContent: "center"
    },
  },
  rightBox1Div1: {
    '@media (max-width: 780px)': {
      width: "88% !important",
    },
  },
  borderCountriesDiv: {
    '@media (max-width: 780px)': {
      width: "100% !important",
    },
  },



}));





const Country = (props) => {


  //redux part
  const products = useSelector((state) => state);
  const dispatch = useDispatch();


  const classes = useStyles();


  const [flagDetails, setFlagDetails] = useState(undefined);

  useEffect(() => {
    let search = products.allProducts.flagDetailsID;
    setFlagDetails((prevstate) => {
      let var1 = data.filter(
        (info) => {
          return (info.numericCode.includes(search))
        }

      );
      return var1[0];
    })
  }, [])

  useEffect(() => {
    console.log(flagDetails)
  }, [flagDetails])




  return (
    <>
      {
        flagDetails && <div style={{ height: 567, width: "100%", display: "flex", justifyContent: "center", backgroundColor: props.myTheme['darkBlue'] }}>
          <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", flexWrap: "wrap",justifyContent:"space-evenly" }}>
            <div style={{ height: "20%", width: "100%", display: "flex", justifyContent: "center" }}>
              <div style={{ height: "100%", width: "87%" }}>
                <div onClick={()=>{dispatch(setDetailsTriggered(false))}} style={{ border: "2px solid black", height: 30, width: 100, textAlign: "center" ,paddingTop:5,color:props.myTheme['text'],backgroundColor:props.myTheme['veryDarkBlue']}}>
                  <ArrowLeftOutlined color={props.myTheme['text']} /> Back
                </div>
              </div>

            </div>
            <div style={{ display: "flex", flexDirection: "row", height: "70%", width: "100%", justifyContent: "space-evenly", alignItems: "center", flexWrap: "wrap" }}>
              <div className={classes.leftBox1} style={{ height: "100%", width: "40%", }}>
                <img className={classes.leftBoxImg1} style={{ height: "70%", width: "70%", display: "flex", justifyContent: "center", alignItems: "center" }} src={flagDetails.flag} alt="" />
              </div>
              <div className={classes.rightBox1} style={{ height: "100%", width: "40%", backgroundColor: props.myTheme['darkBlue'] }}>
                <div className={classes.rightBox1Div1} style={{ display: "flex", flexDirection: "column", height: "100%", width: "100%", justifyContent: "space-between" }}>
                  <div style={{ width: "100%", height: "0%" }}><h1 style={{ margin: 0, color: props.myTheme['text'] }}>{flagDetails.name}</h1></div>
                  <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", height: "30%" }}>
                    <div style={{ height: "100%", width: "50%" }}>
                      <p style={{ color: props.myTheme['text'] }}>Native Name: <span style={{ color: props.myTheme['darkGray'] }}>{flagDetails.nativeName}</span> </p>
                      <p style={{ color: props.myTheme['text'] }}>Population : <span style={{ color: props.myTheme['darkGray'] }}>{flagDetails.population}</span> </p>
                      <p style={{ color: props.myTheme['text'] }}>Region : <span style={{ color: props.myTheme['darkGray'] }}>{flagDetails.region}</span> </p>
                      <p style={{ color: props.myTheme['text'] }}>Subregion : <span style={{ color: props.myTheme['darkGray'] }}>{flagDetails.subregion}</span> </p>
                      <p style={{ color: props.myTheme['text'] }}>Capital : <span style={{ color: props.myTheme['darkGray'] }}>{flagDetails.capital}</span> </p>
                    </div>
                    <div style={{ height: "100%", width: "50%" }}>
                      <p style={{ color: props.myTheme['text'] }}>Top Level Domain: <span style={{ color: props.myTheme['darkGray'] }}>{flagDetails.topLevelDomain[0]}</span> </p>
                      <p style={{ color: props.myTheme['text'] }}>Currencies : <span style={{ color: props.myTheme['darkGray'] }}>{flagDetails.currencies[0].name}</span> </p>
                      <p style={{ color: props.myTheme['text'] }}>Languages : <span style={{ color: props.myTheme['darkGray'] }}>{flagDetails.languages && flagDetails.languages.map((val, ind) => { return <span >{val.name}, </span> })}</span> </p>

                    </div>
                  </div>
                  <div style={{ width: "100%", height: "20%", alignItems: "center", display: "flex", flexWrap: "wrap" }}>
                    <p style={{ display: "flex", color: props.myTheme['text'],flexWrap:"wrap" }}>Border Countries : <div className={classes.borderCountriesDiv} style={{ display: "flex", justifyContent: "space-between", width: "70%" }}>{flagDetails.borders && flagDetails.borders.map((val, ind) => { return <div style={{ border: "1px solid black", width: 50, textAlign: "center", color: props.myTheme['darkGray'] }}> {val}</div> })}</div> </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }



    </>
  )
}

export default Country