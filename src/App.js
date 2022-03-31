import { Box, makeStyles } from '@material-ui/core';
//components
import Header from './Components/Header';
import InfoHeader from './Components/InfoHeader';
import Articles from './Components/Articles';

const useStyles = makeStyles(theme=>({
  container:{
    marginTop:110,
    width:'60%',
    margin:'0 auto',
    [theme.breakpoints.down('md')]:{
      width:'75%'
    },
    [theme.breakpoints.down('sm')]:{
      width:'85%'
    }
  } 
}))

function App() {
  const classes = useStyles();
  return (
    <Box>
     <Header/>
     <Box className={classes.container}>
     <InfoHeader/>
     <Articles/>
     </Box>
    </Box>
);
}

export default App;
