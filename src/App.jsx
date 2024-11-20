import { useState,useEffect } from "react";
import axios from "axios";
const App=()=>{

    const [mydata,setMydata]=useState([]);
    const loadData=()=>{

        let api="http://localhost:3000/students";
        axios.get(api).then((res)=>{

            setMydata(res.data);
          
        })
    }
    const ans=mydata.map((key)=>{
        return(
            <>
            <tr bgcolor="pink">
                <td>{key.rollno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.fees}</td>
            </tr>
            
            </>
        )
            

        
    });

    return(
        <>
        <h1>display axios data</h1>
        <button onClick={loadData}>show data</button>

        <hr />
        <table border="1">
          <tr bgcolor="green">

            <th>rollno</th>
            <th> name</th>
            <th>city</th>
            <th>fees</th>
          </tr>
          {ans}



        </table>
        </>
    )
}

export default App;