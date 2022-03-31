import React from 'react'
import { AppBar, Toolbar, makeStyles } from '@material-ui/core'
import { Menu } from '@material-ui/icons'
const useStyle = makeStyles(
    {
        header:{
            backgroundColor:'white',
            height:70,
            
        },
        logo:{
            height:50,
            margin:'auto',
            paddingRight:70
        },
        menuColor:{
            color:'#000'
        }
    }
)

const Header = () => {
    const classes = useStyle();
    const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';
  return (
    <AppBar className={classes.header}>
        <Toolbar>
            <Menu className={classes.menuColor}/>
            <img src={url} alt="logo" className={classes.logo}/>
        </Toolbar>
    </AppBar>
  )
}

export default Header
