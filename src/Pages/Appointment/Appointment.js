import { Box } from '@mui/system';
import React from 'react';
import Input from '@mui/material/Input';
import { Typography ,Button} from '@mui/material';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2'
import { useHistory } from 'react-router';


const Appointment = () => {
const {user}= useAuth();
const history =useHistory()
const handleAppointment=()=>{
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      });
      history.push('/')
}

return (
<Box sx={{
    display:'grid',
    gridTemplateColumns:{ xl: 'repeat(2,1fr)', 
    lg:'repeat(2,1fr)',
    md:'repeat(2,1fr)',
    sm:'repeat(1,1fr)',
    xs : 'repeat(1,1fr)'},
    justifyContent:'center',
    alignItems:'center'
    }}>
    <Box sx={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
        }}>
        <img  width='70%' src="http://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/01/doctor.png" alt="" />
    </Box>
            

    <Box component="form"
        sx={{
            '& > :not(style)': { m: 1,p:1 },
           }}
        noValidate
        autoComplete="off">
        <Typography>
        <h3 className="text-info">Book Your Visit At</h3>
        <h1 style={{fontWeight:'900',margin:"5px 0"}}>TooThPluse</h1>
        </Typography>

        <Typography>
         <p style={{textAlign:'justify'}}>Have an emergency? Do book with us with this simple form below and superior deliverables whereas web-enabled applications. Continually reintermediate integrated processes through technically sound intellectual capital.</p>
        </Typography>

        <Input defaultValue={user?.displayName} placeholder="Name" />
        <Input defaultValue={user?.email} placeholder="Email"  /><br />
        <Input placeholder="Doctors Name" />
        <Input placeholder="Date"  /><br />

        <Button onClick={handleAppointment} variant='contained'>Book Your Appointment Now</Button>
                
    </Box>
</Box>
);
};

export default Appointment;