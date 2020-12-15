import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
// import Footer from './Footer';
// import Login from './Login';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


import { BrowserRouter as Router,Switch,Route,Link, NavLink } from "react-router-dom";
import Register from './Register';
import Login from './Login';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    // backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  botonForm: {
    width:280,
    [theme.breakpoints.down('sm')]: {
      width:250,
    },
  },
  titulo:{
    backgroundColor:'#1dc7b0',
  },
  buscador:{
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(-7),
    width: '40%',
    alignContent:'center',
    '& fieldset': {
    borderColor: 'green',      
    }
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    borderRadius:25,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor:'  #03c765'
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  '.MuiInputLabel-root':{
    backgroundColor:'black',
    color:'white'
  },
  footer: {
    backgroundColor: '#16eb88',
    padding: theme.spacing(5),
  },
  redes: {
    display:'flex',
    justifyContent:'center',
    marginBottom:15
  },
  modal: {
    position:'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    objectFit:'contain',
  },
  modal2: {
    position:'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    objectFit:'contain',
  },
  paper: {
    backgroundImage: "url(" + "https://i.ibb.co/Ks0zP4X/Fondo-SVG6.png" + ")",
    border: '4px dotted #1dc7b0',
    outline:'none',
    boxShadow: theme.shadows[24],
    padding: theme.spacing(0, 4, 3),
    width:650,
    height:590,    
  },
  paper2: {
    backgroundImage: "url(" + "https://i.ibb.co/Ks0zP4X/Fondo-SVG6.png" + ")",
    border: '4px dotted #1dc7b0',
    outline:'none',
    boxShadow: theme.shadows[24],
    padding: theme.spacing(0, 4, 3),
    width:650,
    height:590,    
  },

}));


export default function Album() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [username, setUsername] = React.useState(false);
  const [password, setPassword] = React.useState(false);
  const [email, setEmail] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
      <Router>
    <React.Fragment>
      <CssBaseline />
      {/* <AppBar position="relative">
        <Toolbar className={classes.titulo}>
          {/* <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar> */}
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="md">
          <Link to='/' exact>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                <img src="https://i.ibb.co/fryWBc7/LogoSVG.png" alt=""/>
            </Typography>
            </Link>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.Compra lo que quieras
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                    
                        <Button className={classes.botonForm} onClick={handleOpen}  size='large' variant="contained" color="primary">
                            Ingresa
                        </Button>
                 
                </Grid>
                <Grid item>
                
                        <Button className={classes.botonForm} onClick={handleOpen} size='large' variant="contained" color="primary">
                        Crea tu cuenta
                        </Button>
               
                </Grid>
              </Grid>
            </div>
          </Container>
          <TextField className={classes.buscador}  id="outlined-basic" label="¿Qué estás buscando?" variant="outlined" />
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
              <NavLink to='/tecnología' style={{ textDecoration: 'none' }}>
                <Card className={classes.card}>
                 <CardMedia
                    className={classes.cardMedia}
                    image="https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    title="Productos tecnológicos"
                  />
                    <Typography gutterBottom variant="h5" component="h2">
                    Tecnología
                    </Typography>
                    <Typography>
                    Encuentra los mejores accesorios y artículos de Electrónica.
                    </Typography>
                  <CardActions>
               
                  </CardActions>
                </Card>
              </NavLink>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
              <NavLink to='/moda' style={{ textDecoration: 'none' }}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    title="Indumentaria y los accesorios"
                  />
                    <Typography gutterBottom variant="h5" component="h2">
                      Moda
                    </Typography>
                    <Typography>
                    Podrás encontrar indumentaria y los accesorios más populares para estar a la moda.
                    </Typography>
                    <CardActions>
                   
                  </CardActions>
                </Card>
                </NavLink>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                  <NavLink to='/cuidado-personal'style={{ textDecoration: 'none' }}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://images.pexels.com/photos/1502219/pexels-photo-1502219.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    title="Cuidado personal"
                  />
                    <Typography gutterBottom variant="h5" component="h2">
                      Cuidado personal
                    </Typography>
                    <Typography>
                    Cuida tu cuerpo por dentro y por fuera con la más amplia gama de productos de salud y belleza.
                    </Typography>
                    <CardActions>
                   
                  </CardActions>
                </Card>
                </NavLink>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                  <NavLink to='/libros' style={{ textDecoration: 'none' }}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    title="Todo tipo de Libros"
                  />
                    <Typography gutterBottom variant="h5" component="h2">
                      Libros
                    </Typography>
                    <Typography>
                      Todos los libros en tus manos.
                    </Typography>
                    
                 
                  <CardActions>
                    
                  </CardActions>
                </Card>
                </NavLink>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                    <NavLink to='/electrodomesticos' style={{ textDecoration: 'none' }}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://www.tuv.com/content-media-files/master-content/services/products/p03-electrical/0176-tuv-rheinland-household-appliances/shutterstock_1131222482_core_2_2_1.jpg"
                    title="Electrodomésticos y artículos de cocina"
                  />
                    <Typography gutterBottom variant="h5" component="h2">
                      Electrodomésticos
                    </Typography>
                    <Typography>
                     Los mejores electrodomésticos y artículos de cocina que te facilitarán las tareas del hogar.
                    </Typography>
                  <CardActions>
                  </CardActions>
                </Card>
                </NavLink>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                  <NavLink to='/herramientas' style={{ textDecoration: 'none' }}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    title="Herramientas"
                  />
                    <Typography gutterBottom variant="h5" component="h2">
                      Herramientas
                    </Typography>
                    <Typography>
                    Encuentras las mejores ofertas en Herramientas.
                    </Typography>
                  <CardActions>
                  </CardActions>
                </Card>
                </NavLink>
              </Grid>
          </Grid>
        </Container>
          
        <div>
           <Modal aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description"
                className={classes.modal} open={open} onClose={handleClose} closeAfterTransition BackdropComponent={Backdrop}
                BackdropProps={{ timeout: 500,}} >
              <Fade in={open}>
                  <div className={classes.paper}>
                  <Login/> 
                  </div>
              </Fade>
            </Modal>
        </div>

        <div>
           <Modal aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description"
                className={classes.modal} open={open} onClose={handleClose} closeAfterTransition BackdropComponent={Backdrop}
                BackdropProps={{ timeout: 500,}} >
              <Fade in={open}>
                  <div className={classes.paper}>
                  <Register/>
                  </div>
              </Fade>
            </Modal>
        </div>



      </main>
      
      </React.Fragment>
      </Router>
  );
}
