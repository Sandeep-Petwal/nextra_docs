---
sidebar_label: 'Frontend Socket.io'
title: 'Socket.io Client - Frontend Implementation Guide'
description: 'Complete guide to implementing Socket.io client in React with JWT authentication, custom hooks, and real-time communication.'
---

# Socket.io Client - Frontend Implementation Guide

A comprehensive guide to implementing Socket.io client in React applications with JWT authentication and real-time communication features.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Client-Side Implementation](#client-side-implementation)
- [Usage Examples](#usage-examples)
- [Best Practices](#best-practices)

## Prerequisites

```bash
# Client dependencies
npm install socket.io-client
```

## Client-Side Implementation

### Step 1: Create Socket Hook

```javascript
import { io } from 'socket.io-client';
import { useState, useEffect } from 'react';

const useSocket = (token) => {
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    if (!token) return;

    const socketInstance = io('http://localhost:3001', {
      auth: { token }
    });

    socketInstance.on('connect', () => {
      setIsConnected(true);
    });

    setSocket(socketInstance);

    return () => socketInstance.disconnect();
  }, [token]);

  return { socket, isConnected };
};
```

### Step 2: Use Socket in Components

```javascript
const ChatComponent = () => {
  const token = 'your-jwt-token'; // Get from auth system
  const { socket, isConnected } = useSocket(token);

  useEffect(() => {
    if (!socket) return;

    socket.on('message', (data) => {
      console.log('Received:', data);
    });

    return () => socket.off('message');
  }, [socket]);

  return (
    <div>
      <p>Status: {isConnected ? 'Connected' : 'Disconnected'}</p>
    </div>
  );
};
```

## Best Practices

1. **Security**
   - Implement token expiration and renewal
   - Use HTTPS in production
   - Validate token payload

2. **Error Handling**
   - Implement reconnection logic
   - Handle connection errors gracefully
   - Log security-related events

3. **Performance**
   - Clean up event listeners
   - Handle disconnections properly

## Common Issues and Solutions

1. **Connection Issues**
   ```javascript
   // Handle connection errors
   socket.on('connect_error', (error) => {
     console.error('Connection failed:', error.message);
     // Implement retry logic
   });
   ```

2. **Token Expiration**
   ```javascript
   // Check token expiration before emitting events
   const isTokenValid = () => {
     const token = socket.auth.token;
     try {
       jwt.verify(token, JWT_SECRET);
       return true;
     } catch {
       return false;
     }
   };
   ```

## Advanced Usage

### Custom Events

```javascript
// Client-side
socket.on('notification', (data) => {
  showNotification(data.message);
});

// Emit events
socket.emit('sendMessage', {
  message: 'Hello World',
  room: 'general'
});
```

### Room Management

```javascript
// Join a room
socket.emit('joinRoom', 'roomId');

// Listen for room events
socket.on('roomJoined', (roomId) => {
  console.log(`Joined room: ${roomId}`);
});

socket.on('userJoined', (user) => {
  console.log(`${user.name} joined the room`);
});
```

### Reconnection Logic

```javascript
const useSocketWithReconnect = (token) => {
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [reconnectAttempts, setReconnectAttempts] = useState(0);
  const maxReconnectAttempts = 5;

  useEffect(() => {
    if (!token) return;

    const socketInstance = io('http://localhost:3001', {
      auth: { token },
      reconnection: true,
      reconnectionAttempts: maxReconnectAttempts,
      reconnectionDelay: 1000,
    });

    socketInstance.on('connect', () => {
      setIsConnected(true);
      setReconnectAttempts(0);
    });

    socketInstance.on('disconnect', () => {
      setIsConnected(false);
    });

    socketInstance.on('reconnect_attempt', (attemptNumber) => {
      setReconnectAttempts(attemptNumber);
      if (attemptNumber > maxReconnectAttempts) {
        console.error('Max reconnection attempts reached');
      }
    });

    setSocket(socketInstance);

    return () => socketInstance.disconnect();
  }, [token]);

  return { socket, isConnected, reconnectAttempts };
};
```

## Complete Example

```javascript
import React, { useState, useEffect } from 'react';
import { useSocket } from './hooks/useSocket';

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const token = localStorage.getItem('authToken');
  const { socket, isConnected } = useSocket(token);

  useEffect(() => {
    if (!socket) return;

    // Listen for incoming messages
    socket.on('message', (newMessage) => {
      setMessages(prev => [...prev, newMessage]);
    });

    // Listen for user join/leave events
    socket.on('userJoined', (user) => {
      setMessages(prev => [...prev, {
        type: 'system',
        content: `${user.name} joined the chat`
      }]);
    });

    socket.on('userLeft', (user) => {
      setMessages(prev => [...prev, {
        type: 'system',
        content: `${user.name} left the chat`
      }]);
    });

    return () => {
      socket.off('message');
      socket.off('userJoined');
      socket.off('userLeft');
    };
  }, [socket]);

  const sendMessage = () => {
    if (!inputMessage.trim() || !socket) return;

    socket.emit('sendMessage', {
      content: inputMessage,
      timestamp: new Date().toISOString()
    });

    setInputMessage('');
  };

  return (
    <div className="chat-app">
      <div className="connection-status">
        Status: {isConnected ? '🟢 Connected' : '🔴 Disconnected'}
      </div>
      
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.type}`}>
            {message.content}
          </div>
        ))}
      </div>
      
      <div className="input-area">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Type a message..."
          disabled={!isConnected}
        />
        <button onClick={sendMessage} disabled={!isConnected}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatApp;
```

