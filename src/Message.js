import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'
import './Message.css';

const Message = ({message, username} ) => {
    const isUser = username === message.username;
    return (
       <div className={`message ${isUser && 'message__user'}`}>
        <Card className={isUser ? "message__userCard" : "message_guestCard"}>
        <CardContent>
        <Typography color="white" variant="h5" component="h2">
        {!isUser && `${message.username || 'Unknown User'}: `} {message.message}
        </Typography>
        </CardContent>
        </Card>
        </div>   
       
    )
}

export default Message
