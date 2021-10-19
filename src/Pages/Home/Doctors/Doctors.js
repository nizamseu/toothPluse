import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [data,setData]=useState([])

    useEffect(()=>{
        const url ='https://raw.githubusercontent.com/nizamseu/rowJsonData/main/doctorsData.json';

        fetch(url)
        .then(res=>res.json())
        .then(data=>{
           setData(data);
        })
    },[])
    return (
        <Box>
        <h1 className="text-center text-info">Our Doctors</h1>
        <hr />
            <Box sx={{
            display: 'grid',
             gridTemplateColumns:{xl:'repeat(4, 1fr)',lg:'repeat(3, 1fr)',md:'repeat(2, 1fr)',sm:'repeat(1, 1fr)',sx:'repeat(1, 1fr)'} ,
             gap:2,
             justifyContent:'center' ,
             alignItems:'center',
             mx:'auto'
             }}>

             {data?.map(doctor=><Doctor key={doctor.id} doctor={doctor}></Doctor>)}
            
        </Box>
        </Box>
    );
};

export default Doctors;