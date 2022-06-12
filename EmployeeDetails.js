import React, { useEffect, useState } from "react";
import axios from "axios";

function EmployeeDetails() {
    const [employee, setemployee] = useState(null);
    const fetchEmployeeDetails = async() => {
        let urlQuery = new URLSearchParams(window.location.search);
        let apiResponse = await axios.get("https://mockrestapi.herokuapp.com/api/employee/" + urlQuery.get("id"));
        setemployee(apiResponse.data.data);
    };
    useEffect(() => {
        fetchEmployeeDetails();
    }, []);
    return ( <
        main style = {
            { padding: "1rem0" } } >
        <
        h2 > EmployeeDetails < /h2>  {
            employee != null ? ( <
                div >
                <
                div style = { Styles.row } >
                <
                div > Name < /div> <
                div > { employee.name } < /div> <
                /div>

                <
                div style = { Styles.row } >
                <
                div > Age < /div> <
                div > { employee.age } < /div> <
                /div>

                <
                div style = { Styles.row } >
                <
                div > Email < /div> <
                div > { employee.email } < /div> <
                /div>

                <
                div style = { Styles.row } >
                <
                div > Mobile < /div> <
                div > { employee.phone } < /div> <
                /div>{" "} <
                /div>    
            ) : (
                "Loading"
            )
        } <
        /main>);
    }
    const Styles = {
        row: {
            display: "flex",
            width: "100%",
            borderBottom: "1px solid",
            padding: "20px",
            justifyContent: "space-between",


        }
    }

    export default EmployeeDetails;