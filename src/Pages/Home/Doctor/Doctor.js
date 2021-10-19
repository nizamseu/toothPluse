import { Box } from '@mui/system';
import React from 'react';
import { Table } from 'react-bootstrap';

const Doctor = (props) => {
    const {availableDay,availableTime,name,url}=props.doctor
    return (
        <Box sx={{
            display:'center',
            justifyContent:'center',
            alignItems:'center',
            boxShadow:'10px 10px 15px gray',
            borderRadius:'30px',
            mx:5,
            my:3,
            }}>
           <Box>
                <Box sx={{display:'flex',justifyContent:'center'}}>
                    <img marin='0 auto' height='200px' width='200px' src={url} alt="" />
                </Box>
                <Box sx={{
                    
                    mx:0,
                    width:'100%',
                    padding:'10px',
                    }}>
                    <h1>{name}</h1>
                </Box>

                <Box sx={{width:'100%'}}>
                <Table >
                    
                    <tbody >
                        <tr>
                            <td>{availableDay}</td>
                            <td>{availableTime}</td>
                        </tr>
                        <tr>
                            <td>Monday</td>
                            <td>10:00 - 4:00</td>
                        </tr> <tr>
                            <td>Sunday</td>
                            <td>10:00 - 4:00</td>
                        </tr>
                         <tr>
                            <td>Friday</td>
                            <td>10:00 - 4:00</td>
                        </tr>
                    </tbody>
                </Table>
                </Box>
           </Box>
        </Box>
    );
};

export default Doctor;