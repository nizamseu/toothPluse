import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

const Doctors = () => {
    const [data,setData]=useState([])

    useEffect(()=>{
        const url ='https://raw.githubusercontent.com/nizamseu/rowJsonData/main/dentis.json';

        fetch(url)
        .then(res=>res.json())
        .then(data=>{
           setData(data);
        })
    },[])
    return (
        <Box sx={{
            display: 'grid',
             gridTemplateColumns:{xl:'repeat(4, 1fr)',lg:'repeat(3, 1fr)',md:'repeat(3, 1fr)',sm:'repeat(1, 1fr)',sx:'repeat(1, 1fr)'} ,
             justifyContent:'center' ,
             alignItems:'center',
             mx:'auto'
             }}>
            
        </Box>
    );
};

export default Doctors;