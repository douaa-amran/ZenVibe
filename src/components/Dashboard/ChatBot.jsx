import React, { useState, useEffect } from 'react';
import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, Avatar } from '@chatscope/chat-ui-kit-react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addMessage } from '../../redux/MessagesSlice';
import User from '../../Images/Profil2.png';
import Bot from '../../Images/chatbot.png';

const options = {
    method: 'POST',
    url: 'https://chatgpt-api8.p.rapidapi.com/',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '29f7556cdfmsh62ae590eb713501p12ac49jsn071a505ce6ea',
      'X-RapidAPI-Host': 'chatgpt-api8.p.rapidapi.com'
    },
    data: [
      {
        content: 'Hello! I\'m an AI assistant bot based on ChatGPT 3. How may I help you?',
        role: 'system'
      },
      {
        content: 'who won the super bowl 2019?',
        role: 'user'
      }
    ]
  };

export default function ChatBot() {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');
    const messages = useSelector((state) => state.messages.messages);

    async function fetchData(messageContent) {
        try {
            // Add the user message immediately to the screen
            dispatch(addMessage({ message: messageContent, sentTime: new Date().toLocaleString(), sender: "User" }));

            // Fetch bot's response asynchronously
            const response = await axios.request({
                ...options,
                data: [
                    ...options.data,
                    {
                        content: messageContent,
                        role: 'user'
                    }
                ]
            });
            // Add bot's response to the screen
            dispatch(addMessage({ message: response.data.text, sentTime: new Date().toLocaleString(), sender: "Bot" }));
        } catch (error) {
            console.error(error);
        }
    }

    function handleButtonClick() {
        if (inputValue.trim() !== '') {
            fetchData(inputValue);
            setInputValue('');
        }
    }

    function handleChange(value) {
        setInputValue(value);
    }

    return (
        <div style={{ position: "relative", height: "525px" }}>
            <MainContainer>
                <ChatContainer>
                    <MessageList>
                        {messages.map((message, index) => (
                            <Message key={index}
                            model={{message: message.message,
                                    sentTime: message.sentTime,
                                    sender: message.sender,
                                    direction: message.sender === 'User' ? 'outgoing' : 'incoming',
                                    }} 
                            children={<Avatar src={message.sender === 'User' ? User : Bot} name="Akane" />}
                            />
                        ))}
                    </MessageList>
                    <MessageInput
                        value={inputValue}
                        onChange={handleChange}
                        placeholder="Type message here"
                        onSend={handleButtonClick}
                        attachButton='false'
                        autoFocus='true'
                    />
                </ChatContainer>
            </MainContainer>
        </div>
    );
}
