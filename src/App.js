import React, {useEffect,   useRef, useState} from 'react'
import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {useAuthState } from 'react-firebase-hooks/auth';
import {useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyAReIfC3I0ovui0RoOUazbD87XDv2-_9TA",
    authDomain: "sofkachat-team-5ee74.firebaseapp.com",
    projectId: "sofkachat-team-5ee74",
    storageBucket: "sofkachat-team-5ee74.appspot.com",
    messagingSenderId: "82160573604",
    appId: "1:82160573604:web:cdd3dfd08356851b9b9a31"

})

const auth = firebase.auth();
const firestore = firebase.firestore();


function App() {
  //me entrega el usuario
  const[user] =useAuthState(auth);



  return (
    <div className="App">

      <header>
        <h1>Sofka Chat</h1>
        <SingOut/>
      </header>

      <section>
        {user ? <ChatRoom/>: <SingIn/>}
      </section>
    </div>
  );
}

function ChatRoom(){
  return <p>Chat</p>
}

function SingIn(){
  const singInWithGoogle = () => {
    const provider =  new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return <button onClick={singInWithGoogle}>Sing In with google</button>
}

function SingOut(){
  return auth.currentUser &&(
    <button onClick={() =>{
      auth.signOut();
    }}>Sing out</button>
  );
}

export default App;
