import axios from 'axios';
import React, { useEffect, useState } from 'react';
import data from '../assests/data.json'
import { Input, Select } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { displayedFlagID, setDetailsTriggered } from '../redux/actions/ProductActions';


const CountryList = (props) => {


    //redux part
    const products = useSelector((state) => state);
    const dispatch = useDispatch();




    const [displayValue, setDisplayValue] = useState(0);

    const [dropDownText, setDropDownText] = useState("");

    useEffect(() => {
        setDisplayValue(data);
    }, [])

    const filterOptions = [
        {
            label: "Africa",
            value: "Africa"
        },
        {
            label: "America",
            value: "Americas"
        },
        {
            label: "Asia",
            value: "Asia"
        },
        {
            label: "Europe",
            value: "Europe"
        },
        {
            label: "Oceania",
            value: "Oceania"
        },
    ]



    const handleSelectChange = (search) => {
        setDisplayValue((prevstate) => {
            let var1 = data.filter(
                (info) => {
                    return (info.region.includes(search))
                }

            );
            return var1;
        })
    }

    const handleSearch = (e) => {
        let search = e.target.value;
        if (search === "" || search === undefined) {
            setDisplayValue(data);
        }
        else {
            setDisplayValue((prevstate) => {
                let var1 = data.filter(
                    (info) => {
                        return (info.name.toLowerCase().includes(search))
                    }

                );
                return var1;
            })
        }

    };

    const handleDetailsClick=(e)=>{
        dispatch(displayedFlagID(e.target.id));
        dispatch(setDetailsTriggered(true));
    }



    return (
        <>
            <div style={{ minHeight: 636, height: "fit-content", width: "100%", display: "flex", alignItems: "center", flexDirection: "column", backgroundColor: props.myTheme['darkBlue'] }}>
                <div style={{ height: 100, width: "85%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                    <div style={{ height: 30, width: "30%" }}>
                        <Input onChange={handleSearch} style={{ height: "100%", width: "100%",  color: props.myTheme['text'] }} placeholder="Search for a country" />
                    </div>
                    <div>
                        <Select
                            defaultValue="Filter by Region"
                            style={{ width: 220 }}
                            onChange={handleSelectChange}
                            options={filterOptions}
                        />
                    </div>



                </div>


                <div style={{ height: "fit-content", width: "100%", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
                    {
                        displayValue && displayValue.map((val, ind, arr) => {
                            return (
                                <div key={val.numericCode} style={{ height: 250, width: 236, border: "2px solid black", margin: 10, display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    {/* {console.log(val)} */}
                                    <div style={{ height: "50%", width: "100%" }}>
                                        <img style={{ height: "100%", width: "100%" }} src={val.flag} alt="" />
                                    </div>
                                    <div style={{ height: "50%", width: "82%", display: "flex", flexDirection: "column", }}>
                                        <div>
                                            <Link onClick={handleDetailsClick} id={val.numericCode} to='/' style={{ margin: "5px 0px", color: props.myTheme['text'] }}>{val.name}</Link>
                                        </div>
                                        <div>
                                            <p style={{ margin: 0, color: props.myTheme['text'] }}>Population : <span style={{ color: props.myTheme['darkGray'] }}> {val.population} </span></p>
                                            <p style={{ margin: 0, color: props.myTheme['text'] }}>Region : <span style={{ color: props.myTheme['darkGray'] }}> {val.region} </span></p>
                                            <p style={{ margin: 0, color: props.myTheme['text'] }}>Capital :  <span style={{ color: props.myTheme['darkGray'] }}> {val.capital} </span></p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>

        </>
    )
}

export default CountryList