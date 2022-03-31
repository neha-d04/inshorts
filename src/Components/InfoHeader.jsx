import { Box, Typography, makeStyles } from "@material-ui/core"
import { NoEncryption } from "@material-ui/icons";

const useStyles = makeStyles(theme=>({
    container: {
        background: '#f44336',
        color: '#ffffff',
        height: 48,
        display: 'flex',
        alignItems: 'center',
        marginBottom:30,
        [theme.breakpoints.down('md')]:{
            display:'none'
        }
        

    },
    text: {
        fontSize: 14,
        marginLeft: 50,
        fontWeight:300
    },
    logo:{
        height:30,
        '&:first-child':{
            margin:'0 0 0 20px'
        },
        '&:last-child':{
            margin:'0 20px'
        }
    }
}))

const InfoHeader = () => {

    const classes = useStyles();
    const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
    const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';


    return (
        <Box className={classes.container}>
            <Typography className={classes.text}>For the best experience use <b>inshorts</b> app on your smartphone</Typography>
            <Box style={{marginLeft:'auto'}}>
            <img src={appleStore} alt="AppleStore" className={classes.logo}/>
            <img src={googleStore} alt="GoogleStore" className={classes.logo}/>
            </Box>
            
            
            
        </Box>
    )
}

export default InfoHeader