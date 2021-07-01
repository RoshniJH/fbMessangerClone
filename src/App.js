import React, {useState, useEffect, useRef} from 'react';
import {  FormControl,  Input} from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [input,setInput] = useState('');
  const [messages,setMessages] = useState([]);
  const [username,setUsername] = useState(['']);
  const emptyRef = useRef();
useEffect(()=> {
  db.collection('messages')
  .orderBy('timestamp', 'asc')
  .onSnapshot(snapshot => {
    setMessages(snapshot.docs.map(doc => ({id:doc.id, message:doc.data()})))
  });
},[])
useEffect(() => {
  scrollToBottom();
},[messages])

const scrollToBottom = () => {
  emptyRef.current?.scrollIntoView({behavior: "smooth"})
}
  useEffect(() => {
    setUsername(prompt('Please enter your name'));
  }, [])
  const sendMessage = (event) => {
    event.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  return (
    <div className="App">
    <h1>Realtime Messager</h1>
    <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" />
    
    <h2>welcome {username}</h2>
      
  <form className="app__form">
    <FormControl className="app__formControl">
      <Input className="app__input" placeholder='Enter a message..' value={input} onChange={event => setInput(event.target.value)}/>
     <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>
     <SendIcon />
     </IconButton>
    </FormControl>
  </form>
 
      {
        messages.map(({id, message}) => (
          <Message key={id} username={username} message={message}/>   
      ))
    }
    <div className="app__empty" ref={emptyRef} ></div>
    
    </div>
  );
}

export default App;
