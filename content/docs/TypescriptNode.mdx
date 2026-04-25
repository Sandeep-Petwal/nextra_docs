# Node.js + TypeScript Production Setup Template

A comprehensive guide to set up a production-ready Node.js server with TypeScript, Express from scratch.

## 📋 Table of Contents

1. [Project Initialization](#project-initialization)
2. [Dependencies Setup](#dependencies-setup)
3. [TypeScript Configuration](#typescript-configuration)
4. [Project Structure](#project-structure)
5. [Development Setup](#development-setup)
6. [Production Build](#production-build)
7. [Environment Variables](#environment-variables)
8. [Troubleshooting](#troubleshooting)

---

## 🚀 Project Initialization

### 1. Create Project Directory
```bash
mkdir my-typescript-server
cd my-typescript-server
```

### 2. Initialize Git & NPM
```bash
git init
npm init -y
```

### 3. Create Basic Folder Structure
```bash
mkdir src dist
mkdir src/routes src/middleware src/utils
touch src/server.ts
touch .env .env.example
touch .gitignore
```

**Why this structure?**
- `src/` - All TypeScript source code
- `dist/` - Compiled JavaScript output
- Organized subdirectories for scalability

---

## 📦 Dependencies Setup

### Install Production Dependencies
```bash
npm install express cors dotenv
```

**What each does:**
- `express` - Web framework for Node.js
- `cors` - Handle Cross-Origin Resource Sharing
- `dotenv` - Load environment variables from .env files
- `socket.io` - Real-time bidirectional communication

### Install Development Dependencies
```bash
npm install --save-dev typescript @types/node @types/express @types/cors nodemon tsx
```

**What each does:**
- `typescript` - TypeScript compiler
- `@types/*` - Type definitions for JavaScript libraries
- `nodemon` - Auto-restart server on file changes
- `tsx` - Fast TypeScript execution engine (modern alternative to ts-node)

---

## ⚙️ TypeScript Configuration

### Create `tsconfig.json`
```json
{
  "compilerOptions": {
    "module": "ESNext",
    "target": "ES2020",
    "moduleResolution": "bundler",
    "rootDir": "./src",
    "outDir": "./dist",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "sourceMap": true,
    "declaration": true,
    "declarationMap": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmitOnError": false
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules", "dist"]
}
```

**Key configurations explained:**
- `"module": "ESNext"` - Use modern ES modules
- `"target": "ES2020"` - Compile to ES2020 (modern Node.js support)
- `"moduleResolution": "bundler"` - Better import resolution
- `"strict": true` - Enable all strict type checking
- `"sourceMap": true` - Generate source maps for debugging

### Update `package.json`
```json
{
  "name": "my-typescript-server",
  "version": "1.0.0",
  "type": "module",
  "main": "dist/server.js",
  "scripts": {
    "dev": "nodemon --exec tsx src/server.ts",
    "build": "tsc",
    "start": "node dist/server.js",
    "clean": "rm -rf dist"
  },
  "dependencies": {
    "express": "^5.1.0",
    "cors": "^2.8.5",
    "dotenv": "^17.2.2",
  },
  "devDependencies": {
    "@types/cors": "^2.8.19",
    "@types/express": "^5.0.3",
    "@types/node": "^24.3.3",
    "nodemon": "^3.1.10",
    "tsx": "^4.19.1",
    "typescript": "^5.9.2"
  }
}
```

**Key settings explained:**
- `"type": "module"` - Use ES modules instead of CommonJS
- `"main": "dist/server.js"` - Entry point for production
- `tsx` in dev script - Fast TypeScript execution without compilation

---

## 🏗️ Project Structure

Create the following structure:
```
my-typescript-server/
├── src/
│   ├── server.ts          # Main server file
│   ├── routes/            # API routes
│   ├── middleware/        # Custom middleware
│   └── utils/             # Utility functions
├── dist/                  # Compiled JavaScript (auto-generated)
├── .env                   # Environment variables
├── .env.example           # Environment variables template
├── .gitignore             # Git ignore rules
├── package.json           # Project dependencies and scripts
└── tsconfig.json          # TypeScript configuration
```

---

## 💻 Development Setup

### Create `.env` file
```env
PORT=3000
NODE_ENV=development
```

### Create `.env.example` file
```env
PORT=3000
NODE_ENV=development
```

### Create `.gitignore`
```gitignore
node_modules/
dist/
.env
*.log
.DS_Store
coverage/
```

### Create `src/server.ts`
```typescript
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createServer } from 'http';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic routes
app.get('/', (req, res) => {
  res.json({ 
    message: 'TypeScript Server is running!',
    timestamp: new Date().toISOString()
  });
});


// Create HTTP server
const server = createServer(app);

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Error:', err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler - must be last
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

// Export for testing
export { app, server };
```

---

## 🔧 Development Commands

### Start Development Server
```bash
npm run dev
```

**What happens:**
- `nodemon` watches for file changes
- `tsx` executes TypeScript directly without compilation
- Server restarts automatically on code changes
- No build step required during development

### Test API Endpoints
```bash
# Test basic endpoint
curl http://localhost:3000

```

---

## 🏭 Production Build

### Build for Production
```bash
npm run build
```

**What happens:**
- TypeScript compiler (`tsc`) runs
- All `.ts` files in `src/` are compiled to `.js` in `dist/`
- Type declarations (`.d.ts`) are generated
- Source maps created for debugging

### Start Production Server
```bash
npm start
```

**What happens:**
- Runs compiled JavaScript from `dist/server.js`
- No TypeScript compilation at runtime
- Faster startup and execution
- Production-optimized

### Production Environment Setup
```bash
# Set environment variables for production
export NODE_ENV=production
export PORT=8000

# Start with process manager (recommended)
npm install -g pm2
pm2 start dist/server.js --name "my-app"
```

---

## 🌍 Environment Variables

### Required Variables
```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database (if using)
# DATABASE_URL=postgresql://username:password@localhost:5432/dbname

# JWT (if using authentication)
# JWT_SECRET=your-super-secret-key

# External APIs
# API_KEY=your-api-key
```

### Loading in Code
```typescript
// Always load at the top of server.ts
dotenv.config();

// Access variables
const port = process.env.PORT || 3000;
const nodeEnv = process.env.NODE_ENV || 'development';
```

---

## 🐛 Troubleshooting

### Common Issues & Solutions

#### 1. Import/Export Errors
**Error:** `Cannot use import statement outside a module`
**Solution:** Ensure `"type": "module"` is in `package.json`

#### 2. File Extension Issues
**Error:** `Unknown file extension ".ts"`
**Solution:** Use `tsx` instead of `ts-node` in dev script

#### 3. Module Resolution Issues
**Error:** `Cannot find module './app'`
**Solution:** Add `.js` extension in imports when using ES modules:
```typescript
import app from './app.js'; // Note: .js not .ts
```

#### 4. Path Errors
**Error:** `Missing parameter name at index 1: *`
**Solution:** Update Express catch-all routes:
```typescript
// Instead of app.use('*', ...)
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});
```

#### 5. Build Issues
**Error:** Build fails or missing files
**Solution:**
```bash
# Clean and rebuild
npm run clean
npm run build
npm start
```

---

## 🎯 Quick Start Checklist

- [ ] Create project directory
- [ ] Run `npm init -y`
- [ ] Install dependencies (`express`, `cors`, `dotenv`, `socket.io`)
- [ ] Install dev dependencies (`typescript`, `@types/*`, `nodemon`, `tsx`)
- [ ] Create `tsconfig.json` with ES module config
- [ ] Add `"type": "module"` to `package.json`
- [ ] Set up scripts in `package.json`
- [ ] Create `src/server.ts` with Express + Socket.IO
- [ ] Create `.env` and `.gitignore`
- [ ] Test with `npm run dev`
- [ ] Build with `npm run build`
- [ ] Deploy with `npm start`

---

## 📚 Additional Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Express.js Documentation](https://expressjs.com/)
- [Socket.IO Documentation](https://socket.io/docs/)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)

---

## 🤝 Pro Tips

1. **Use tsx for development** - It's faster than ts-node and handles ES modules better
2. **Always compile for production** - Never use ts-node/tsx in production
3. **Set up proper error handling** - Use middleware for centralized error handling
4. **Use environment variables** - Never hardcode configuration
5. **Add graceful shutdown** - Handle SIGTERM for clean shutdowns
6. **Use PM2 in production** - Better process management than plain Node.js

Save this template and you'll never have to fight with TypeScript + Node.js setup again! 🎉