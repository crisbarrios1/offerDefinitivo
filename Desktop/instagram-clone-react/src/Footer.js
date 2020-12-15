import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';




const Copyright = () => {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        Cristian_Barrios_ 
      {new Date().getFullYear()}
      {'.'}
      </Typography>
    );
  }



  const useStyles = makeStyles((theme) => ({
    footer: {
      backgroundColor: '#16eb88',
      padding: theme.spacing(5),
    },
    redes: {
      display:'flex',
      justifyContent:'center',
      marginBottom:15
    }
  
  }));
  

const Footer = () => {
    const classes = useStyles();
    return (     <div>
            <footer className={classes.footer}>
                <div className={classes.redes}>
                    <GitHubIcon/><LinkedInIcon/><FacebookIcon/>
                </div>

        <Copyright />
                 
                 </footer>
                 </div>

    );
};

export default Footer;