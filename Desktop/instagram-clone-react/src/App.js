import React,{ useEffect, useState } from 'react';
import './App.css';
import Post from './Post';
import {auth, db} from './firebase';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Input } from '@material-ui/core';
import ImageUpload from './ImageUpload';
import NavBar from './NavBar';
import Footer from './Footer';



function getModalStyle() {
  const top = 50 ;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '40%',
    height: '60%',
    backgroundImage: "url(" + "https://i.ibb.co/Ks0zP4X/Fondo-SVG6.png" + ")",
    border: '4px dotted #1dc7b0',
    outline:'none',
    boxShadow: theme.shadows[24],
    padding: theme.spacing(10, 4, 3),
  },
  botonLogueo:{
    backgroundColor:'#65FACB',
    boxShadow: theme.shadows[4],
    margin:30,

  },
  frase:{
    display:'flex',
    margin:30
  }
}));

function App() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  const [posts,setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [openSignIn, setOpenSingIn] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [user,setUser] = useState(null);
  
useEffect(() => {
 const unsubscribe = auth.onAuthStateChanged((authUser) => {
    if(authUser){
      //User has logged in
      console.log(authUser);
      setUser(authUser);  
    }else{
      //User has logged out
      setUser(null)
    }
  })

  return () =>{
    //Perform some cleanup actions
    unsubscribe();
  }

},[user, username]);


// useEffect -> Runs a piece a code based on a specific condition

useEffect(() => {
  //this is where the code runs
  db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot =>{

    //every time a new post is added, this code firestore.
     setPosts(snapshot.docs.map(doc => ({
       id:doc.id,
       post: doc.data()
      })));
  });

}, []);

const signUp = (event) =>{
  event.preventDefault();

  auth
  .createUserWithEmailAndPassword(email, password)
  .then((authUser) =>{
    return authUser.user.updateProfile({
      displayName:username
    })
  })
  .catch((error) => alert(error.message));

  setOpen(false);
}

const signIn = (event) => {
  event.preventDefault();

  auth
  .signInWithEmailAndPassword(email, password)
  .catch((error) => alert(error.message))

  setOpenSingIn(false);
}

  return (
    <div className="app">
      <NavBar/>
      {user?.displayName ? (
        <ImageUpload userName={user.displayName}/>
      ):(
        <h3></h3>
      )}

      <Modal
          open={open}
          onClose={() => setOpen(false)}
            >
            <div style={modalStyle} className={classes.paper}>
              <center>
                <img className='app__headerImage' src="https://i.ibb.co/qRnsx6C/Logo-Bolsa.png" alt=""/>
                <form className='app__signUp' >
              <Input
               placeholder='Name'
               type='text'
               value={username}
               onChange={(e) => setUsername(e.target.value)} />
              <Input placeholder='Email'
               type='email'
               value={email}
               onChange={(e) => setEmail(e.target.value)}/>
               <Input
               placeholder='Password'
               type='password'
               value={password}
               onChange={(e) => setPassword(e.target.value)} />
               <Button type='submit' onClick={signUp}> Registrate </Button>
               </form>
              </center>
            </div>
      </Modal>
      <Modal
          open={openSignIn}
          onClose={() => setOpenSingIn(false)}
            >
            <div style={modalStyle} className={classes.paper}>
              <center>
                <img className='app__headerImage' src="https://i.ibb.co/qRnsx6C/Logo-Bolsa.png" alt=""/>
                <form className='app__signUp' >
              
              <Input placeholder='Email'
               type='email'
               value={email}
               onChange={(e) => setEmail(e.target.value)}/>
               <Input
               placeholder='password'
               type='password'
               value={password}
               onChange={(e) => setPassword(e.target.value)} />
               <Button type='submit' onClick={signIn}>Ingrese</Button>
               </form>
              </center>
            </div>
      </Modal>
      <div className="app__header">

        <img className='app__headerImage' src="https://i.ibb.co/fryWBc7/LogoSVG.png" alt=""/>
      </div>
      {user ? (
      <Button onClick={() => auth.signOut()}> Salir </Button>
      ): (
        <div className="app__loginContainer">
          <Button className={classes.botonLogueo} onClick={() => setOpenSingIn(true)}> Ingresar</Button>
          <Button className={classes.botonLogueo} onClick={() => setOpen(true)}> Registrate </Button>

        </div>
      )}
      <h1 className={classes.frase}>Compra y vende lo que quieras! </h1>
        {
        posts.map(({id,post}) => (
          <Post key={id} userName={post.userName} caption={post.caption} imageUrl={post.imageUrl} />
        ))
         }

      <Footer/>
    </div>
  );
}

export default App;
