import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import DentisCard from '../../DentisCard/DentisCard';

const Services = () => {
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
        <Box>
        <hr />
            <h1 className='text-center my-3'>Our Services</h1>
                <hr />
       
            <Box sx={{
                display: 'grid',
                gridTemplateColumns:{xl:'repeat(4, 1fr)',lg:'repeat(3, 1fr)',md:'repeat(2, 1fr)',sm:'repeat(1, 1fr)',sx:'repeat(1, 1fr)'} ,
                justifyContent:'center' ,
                alignItems:'center',
                mx:'auto'
                }}>
            
            
                {
                    data&& data.map(dentis=><DentisCard key={dentis.id} item={dentis}></DentisCard>)
                }
            </Box>
    </Box>
    );
};

export default Services;