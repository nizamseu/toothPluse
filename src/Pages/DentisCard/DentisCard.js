import React from 'react';
import { bgcolor, Box } from '@mui/system';
import './DentisCard.css'
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const DentisCard = (props) => {
    const {id,title,picture,des}=props.item
    return (

            <Box  sx={{
            
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            margin:'30px',
            padding:'10px',
            boxShadow:'10px 10px 15px gray',
            borderRadius:'30px',
            overflow:'hidden'
        }}
       className="card"
        >
           <Link to={`/details/${id}`}>
           <Box>
            {/* image  */}
                <Box sx={{display:'flex',justifyContent:'center'}}>
                   <img height='200px' width='200px' src={picture} alt="" />
                </Box>
                    {/* data  */}
                <Box sx={{
                    my:5,
                }}>
                    <Typography component='div' sx={{width:'100%',textAlign:'center'}}>
                        <hr />
                        <h2>{title}</h2>
                        <hr />
                    </Typography>
                    <Typography sx={{
                        textAlign:'justify',
                        my:4,
                        px:3,
                    }} component='p'>
                        {des.slice(0,200)}
                    </Typography>
                </Box>
            </Box>
           </Link>
        </Box>
    );
};

export default DentisCard;