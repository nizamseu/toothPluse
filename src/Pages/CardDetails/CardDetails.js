import { Box, display } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CardDetails = () => {
    const {id}=useParams();
    const [data,setData]=useState([])

    useEffect(()=>{
        const url ='https://raw.githubusercontent.com/nizamseu/rowJsonData/main/dentis.json';

        fetch(url)
        .then(res=>res.json())
        .then(result=>{
            const findData= result.find(item=>item.id==id)
           setData(findData);
        })
    },[])
   



    return (
        <Box sx={{
            display:'grid',
            gridTemplateColumns:{xl:'repeat(2,1fr)',lg:'repeat(2,1fr)',md:'repeat(2,1fr)',sm:'repeat(1,1fr)',sx:'repeat(1,1fr)'},
            justifyContent:'center',
            alignItems:'center',
            my:'100px',
            mx:'50px',
            p:'20px',
            boxShadow:'10px 10px 15px gray',
            borderRadius:'30px'
            
           
        }}>
          
           <Box sx={{width:'50%',mx:'auto', display:'flex' ,justifyContent:'center', alignItems:'center'}}>
               <img  width='250px' src={data.picture} alt="" />
           </Box>
           <Box sx={{textAlign:'justify'}}>
               <h1>{data.title}</h1>
               <p>{data.des}</p>
               <h1 className='text-info'>{data.fees}</h1>

               <h3>Available : {data.open}</h3>
           </Box>
        </Box>
    );
};

export default CardDetails;