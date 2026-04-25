---
sidebar_label: 'Socket.io'
title: 'Socket.io with JWT Authentication - Complete Guide'
description: 'Comprehensive guide to implementing secure WebSocket connections using Socket.io with JWT authentication in React and Node.js applications.'
---

# WebSocket Authentication with JWT - Step by Step Guide

A comprehensive guide to implementing secure WebSocket connections using JWT authentication in a React and Node.js application.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Server-Side Implementation](#server-side-implementation)
- [Client-Side Implementation](#client-side-implementation)
- [Usage Examples](#usage-examples)
- [Best Practices](#best-practices)

## Prerequisites

```bash
# Server dependencies
npm install express socket.io jsonwebtoken

# Client dependencies
npm install socket.io-client
```

## Server-Side Implementation

### Step 1: Setup Express and Socket.IO Server

```javascript
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});
```

### Step 2: Implement Authentication Middleware

```javascript
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

io.use((socket, next) => {
    const token = socket.handshake.auth.token;
    if (!token) return next(new Error('Authentication error: No token provided'));
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) return next(new Error('Authentication error: Invalid token'));
        socket.user = decoded;
        next();
    })
})
 
```

### Step 3: Handle Socket Connections

```javascript
io.on('connection', (socket) => {
  console.log(`User connected: ${socket.user.id}`);
  
  // Join user-specific room
  socket.join(`user-${socket.user.id}`);
  
  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.user.id}`);
  });
});
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
   - Store JWT_SECRET in environment variables
   - Implement token expiration and renewal
   - Use HTTPS in production
   - Validate token payload

2. **Error Handling**
   - Implement reconnection logic
   - Handle connection errors gracefully
   - Log security-related events

3. **Performance**
   - Implement room-based broadcasting
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

### Room-Based Authorization

```javascript
// Server-side
socket.on('joinRoom', (roomId) => {
  // Check if user has access to room
  if (canAccessRoom(socket.user, roomId)) {
    socket.join(roomId);
    socket.emit('roomJoined', roomId);
  }
});
```

### Custom Events

```javascript
// Server-side
io.to(`user-${userId}`).emit('notification', {
  message: 'New message received'
});

// Client-side
socket.on('notification', (data) => {
  showNotification(data.message);
});
```

---

## Recap

1. Set up server with Socket.IO and JWT authentication
2. Implement authentication middleware
3. Create client-side socket hook
4. Handle connections and events
5. Follow security best practices


## Sample file
```javascript
const express = require('express');
const http = require('http');
const { Server } = require('socket.io'); // Import the Server class from Socket.IO
const cors = require("cors");
const app = express();
app.use(cors({ origin: '*' }));
 
const server = http.createServer(app); // Create an HTTP server using the Express app
const io = new Server(server, { cors: "*" }); // Create a new Socket.IO server and attach it to the HTTP server
 
// socket middleware to protect WS
io.use((socket, next) => {
    const token = socket.handshake.auth.token;
    if (!token) return next(new Error('Authentication error: No token provided'));
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) return next(new Error('Authentication error: Invalid token'));
        socket.user = decoded;
        next();
    })
})
 
io.on('connection', (socket) => { // Listen for new client connections
    console.log("New Connection connected !");
 
    // Listen for user connection 
    socket.on("user connection", (user_id) => {
        socket.broadcast.emit("user connection", user_id);
    })
 
    // Listening for Messages
    socket.on("message", ({ message, sender }) => {
        console.log("Message recieved :: " + message);
 
        // send to all connections
        io.emit("message", msg);
 
        // Send a response only to the sender
        socket.emit('chat response', 'You sent: ' + msg);
 
        // all clients except sender
        socket.broadcast.emit("message", { message, sender });
    })
 
    // Handling conncetion disconnection
    socket.on('disconnect', () => {
        console.log("user disconnected !");
    })
 
    // Custom connection disconnect
    socket.on('user disconnected', (user) => {
        io.emit('user disconnected', `${user}`)
    })
 
    // error connectiong
    socket.on("connect_error", (err) => {
        console.log(`connect_error due to ${err.message}`);
    });
});
server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});

```
