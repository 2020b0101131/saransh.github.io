import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'

function Home() {
    const [employeeList, setemployeeList] = useState([])
    const navigate = useNavigate();
    const fetchEmployeeList = async() => {
        let apiResponse = await axios.get("https://mockrestapi.herokuapp.com/api/employee?pageNo=1&limit=10");
        setemployeeList(apiResponse.data.data);
    };
    useEffect(() => {
        fetchEmployeeList()
    }, [])
    return ( <
        main style = {
            { padding: "1rem0" } } >
        <
        div > Employee List < /div> <
        br / >
        <
        br / >
        <
        br / >
        <
        div className = "employeelist" > {
            employeeList.map((employee) => {
                return ( <
                    div style = {
                        {
                            display: "flex",
                            width: "100%",
                            justifyContent: "space-between",
                            padding: "20px",
                            borderBottom: "1px solid",

                        }
                    } >
                    <
                    div className = "employeeName" > { employee.name } < /div> <
                    div className = "employeeName" > { employee.phone } < /div> <
                    button onClick = {
                        () => {
                            navigate.push('detail?id=' + employee._id)
                        }
                    } > View Details < /button> <
                    /div>

                );
            })
        } <
        /div> <
        /main>
    );
}
export default Home;