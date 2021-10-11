
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const Welcom = () => {
    return (
        <Box pl={30} pr={30} pt={10} style={{maxHeight: '80vh', overflow: 'auto'}}>
            <Typography variant="h1" component="div" gutterBottom>
            Welcome to Jugram!!
            </Typography>          
            <Typography variant="h3" gutterBottom component="div">
            This is an Instagram clone project to practice "react"
            </Typography>
           
            <Typography variant="subtitle1" gutterBottom component="div">
                1. Understanding how to start a React project
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
                2. Understanding how to structure UI with React
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
                3. Understanding of state management and how to communicate with the server in a React-based environment
            </Typography>
            <Typography variant="button" display="block" gutterBottom>
            Develope by KEYVALUE
            </Typography>
        </Box>
    );
  };
  
  export default Welcom;
  