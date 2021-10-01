import React from 'react';
import {Button, Box, Paper} from '@material-ui/core';
import './Home.css';

function Home(){
    return (
        <>
           <Paper>
               <Box p={2}>
                   <Box display="flex" justifyContent="center">
                       <h1>Título</h1>
                   </Box>
                   <img src="https://schultzfamilyfoundation.org/wp-content/uploads/2019/07/generation-logo.png" alt="" style={{width: "100%", height: "100%"}}/>
                   <Box display="flex" justifyContent="center" p={2}>
                       <Button variant="contained" color="primary">Texto 1</Button>
                       <Button variant="contained" color="secondary">Texto 2</Button>
                    </Box>
               </Box>
           </Paper>
        </>
    );
}

export default Home;