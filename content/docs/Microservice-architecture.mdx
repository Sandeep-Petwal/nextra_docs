---
sidebar_label: 'Microservices'
title: 'Microservice Architecture - Complete Guide'
description: 'Comprehensive guide to microservice architecture including scaling strategies, comparison with monoliths, and best practices for modern applications.'
---

# Microservice Architecture - Complete Guide

A comprehensive guide to understanding microservice architecture, scaling strategies, and their implementation in modern applications.

## 🎯 TL;DR

- **Microservices** = Independent, small, modular services communicating via APIs
- **Vertical Scaling** = Upgrade your server
- **Horizontal Scaling** = Add more servers
- **Microservices + Horizontal Scaling** = Best for modern large-scale apps

## What are Microservices?

Microservices is an architectural style that structures an application as a collection of small, independent services, each focused on a single business capability and communicating via APIs (typically HTTP/REST or messaging queues).

### Key Features

- **Single Responsibility**: Each service does one thing well (like auth, billing, notification, etc.)
- **Independent Deployment**: Each microservice can be deployed or updated independently
- **Technology Agnostic**: Each service can be built in different languages or databases
- **Resilience**: A failure in one service won't crash the whole app
- **Scalability**: You can scale only the services that need it

### Example: E-commerce Application

Let's say you're building an e-commerce site:

- **Auth Service** → Handles login/signup
- **Product Service** → Manages product catalog
- **Order Service** → Handles cart and orders
- **Payment Service** → Manages payment processing

Each of these would be separate microservices, possibly running in their own containers.

## Monolith vs Microservices Comparison

| Feature | Monolith | Microservices |
|---------|----------|---------------|
| Deployment | One big codebase | Independent deployable units |
| Scalability | Whole app needs scaling | Scale only the needed services |
| Technology Choices | Usually single tech stack | Different stacks for different services |
| Complexity | Easier to start, harder to scale | Harder to start, easier to scale |

## Scaling Strategies

### Vertical Scaling vs Horizontal Scaling

These terms refer to how you handle increased load on your app/server:

| Aspect | Vertical Scaling (Scale Up) | Horizontal Scaling (Scale Out) |
|--------|------------------------------|--------------------------------|
| Definition | Increasing the power of a single server | Adding more servers to handle the load |
| How it works | Upgrade CPU, RAM, storage of one machine | Add more machines/instances and distribute the load |
| Example | Upgrade from 4 GB RAM to 16 GB RAM | Add 3 more servers running the same app |
| Complexity | Simple to implement | More complex (load balancers, distributed systems) |
| Scalability Limit | Limited by the max capacity of a single machine | Virtually unlimited (just keep adding more machines) |
| Cost | Can get expensive for high-end servers | Cost-effective in cloud environments |
| Downtime | Might require restarting server | Minimal downtime (can shift traffic between instances) |
| Fault Tolerance | Low – if server fails, app goes down | High – if one server fails, others can still handle traffic |
| Use Case | Simple apps, quick fixes, legacy systems | Cloud-native apps, large-scale systems, microservices |
| Session Handling | Simple – everything on one server | Complex – needs centralized or distributed session storage |

## Microservice Architecture Patterns

### 1. API Gateway Pattern

```javascript
// Example API Gateway configuration
const gateway = {
  routes: [
    {
      path: '/api/auth/*',
      service: 'auth-service',
      port: 3001
    },
    {
      path: '/api/products/*',
      service: 'product-service',
      port: 3002
    },
    {
      path: '/api/orders/*',
      service: 'order-service',
      port: 3003
    }
  ]
};
```

### 2. Service Discovery

```javascript
// Service registration example
const serviceRegistry = {
  'auth-service': {
    instances: [
      { host: '10.0.1.1', port: 3001, health: 'healthy' },
      { host: '10.0.1.2', port: 3001, health: 'healthy' }
    ]
  },
  'product-service': {
    instances: [
      { host: '10.0.2.1', port: 3002, health: 'healthy' }
    ]
  }
};
```

### 3. Circuit Breaker Pattern

```javascript
// Circuit breaker implementation
class CircuitBreaker {
  constructor(failureThreshold = 5, timeout = 60000) {
    this.failureThreshold = failureThreshold;
    this.timeout = timeout;
    this.failures = 0;
    this.state = 'CLOSED'; // CLOSED, OPEN, HALF_OPEN
  }

  async call(serviceFunction) {
    if (this.state === 'OPEN') {
      throw new Error('Circuit breaker is OPEN');
    }

    try {
      const result = await serviceFunction();
      this.onSuccess();
      return result;
    } catch (error) {
      this.onFailure();
      throw error;
    }
  }

  onSuccess() {
    this.failures = 0;
    this.state = 'CLOSED';
  }

  onFailure() {
    this.failures++;
    if (this.failures >= this.failureThreshold) {
      this.state = 'OPEN';
      setTimeout(() => {
        this.state = 'HALF_OPEN';
      }, this.timeout);
    }
  }
}
```

## Communication Patterns

### 1. Synchronous Communication (HTTP/REST)

```javascript
// Service-to-service HTTP call
const axios = require('axios');

class OrderService {
  async createOrder(orderData) {
    // Call product service to validate products
    const productResponse = await axios.get(
      `http://product-service/api/products/${orderData.productId}`
    );

    // Call payment service to process payment
    const paymentResponse = await axios.post(
      'http://payment-service/api/payments',
      { amount: orderData.amount }
    );

    return { orderId: '123', status: 'created' };
  }
}
```

### 2. Asynchronous Communication (Message Queues)

```javascript
// Using Redis for message queuing
const Redis = require('ioredis');
const redis = new Redis();

class NotificationService {
  async sendOrderConfirmation(orderData) {
    await redis.lpush('notification-queue', JSON.stringify({
      type: 'order-confirmation',
      userId: orderData.userId,
      orderId: orderData.orderId,
      email: orderData.email
    }));
  }
}

// Message consumer
async function processNotifications() {
  while (true) {
    const message = await redis.brpop('notification-queue', 0);
    const notification = JSON.parse(message[1]);
    
    // Process notification
    await sendEmail(notification);
  }
}
```

## Database Patterns

### 1. Database per Service

```javascript
// Each service has its own database
const authServiceDB = {
  type: 'PostgreSQL',
  tables: ['users', 'sessions', 'permissions']
};

const productServiceDB = {
  type: 'MongoDB',
  collections: ['products', 'categories', 'inventory']
};

const orderServiceDB = {
  type: 'MySQL',
  tables: ['orders', 'order_items', 'shipping']
};
```

### 2. Saga Pattern for Distributed Transactions

```javascript
// Saga pattern implementation
class OrderSaga {
  async createOrder(orderData) {
    const sagaId = generateSagaId();
    
    try {
      // Step 1: Reserve inventory
      await this.reserveInventory(orderData, sagaId);
      
      // Step 2: Process payment
      await this.processPayment(orderData, sagaId);
      
      // Step 3: Create order
      await this.createOrderRecord(orderData, sagaId);
      
      // Step 4: Send confirmation
      await this.sendConfirmation(orderData, sagaId);
      
    } catch (error) {
      // Compensating transactions
      await this.compensate(sagaId, error);
    }
  }

  async compensate(sagaId, error) {
    // Rollback all completed steps
    await this.refundPayment(sagaId);
    await this.releaseInventory(sagaId);
    await this.cancelOrder(sagaId);
  }
}
```

## Deployment Strategies

### 1. Container Deployment

```yaml
# Docker Compose example
version: '3.8'
services:
  auth-service:
    image: auth-service:latest
    ports:
      - "3001:3001"
    environment:
      - DATABASE_URL=postgresql://user:pass@auth-db:5432/auth
    depends_on:
      - auth-db

  product-service:
    image: product-service:latest
    ports:
      - "3002:3002"
    environment:
      - MONGODB_URL=mongodb://product-db:27017/products
    depends_on:
      - product-db

  order-service:
    image: order-service:latest
    ports:
      - "3003:3003"
    environment:
      - MYSQL_URL=mysql://user:pass@order-db:3306/orders
    depends_on:
      - order-db
```

### 2. Kubernetes Deployment

```yaml
# Kubernetes deployment example
apiVersion: apps/v1
kind: Deployment
metadata:
  name: auth-service
spec:
  replicas: 3
  selector:
    matchLabels:
      app: auth-service
  template:
    metadata:
      labels:
        app: auth-service
    spec:
      containers:
      - name: auth-service
        image: auth-service:latest
        ports:
        - containerPort: 3001
        env:
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: auth-secret
              key: database-url
```

## Monitoring and Observability

### 1. Distributed Tracing

```javascript
// Using OpenTelemetry for tracing
const { trace } = require('@opentelemetry/api');

class OrderService {
  async createOrder(orderData) {
    const tracer = trace.getTracer('order-service');
    
    return tracer.startActiveSpan('create-order', async (span) => {
      try {
        span.setAttribute('order.id', orderData.id);
        span.setAttribute('order.amount', orderData.amount);
        
        const result = await this.processOrder(orderData);
        
        span.setStatus({ code: trace.SpanStatusCode.OK });
        return result;
      } catch (error) {
        span.setStatus({ code: trace.SpanStatusCode.ERROR, message: error.message });
        throw error;
      } finally {
        span.end();
      }
    });
  }
}
```

### 2. Health Checks

```javascript
// Health check endpoint
app.get('/health', async (req, res) => {
  const health = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    services: {
      database: await checkDatabase(),
      redis: await checkRedis(),
      externalApi: await checkExternalApi()
    }
  };

  const isHealthy = Object.values(health.services).every(service => service.status === 'healthy');
  
  res.status(isHealthy ? 200 : 503).json(health);
});
```

## Best Practices

### 1. Service Design

- Keep services small and focused
- Use bounded contexts from Domain-Driven Design
- Implement proper error handling and retry logic
- Use circuit breakers for external dependencies

### 2. Data Management

- Each service owns its data
- Use event sourcing for data consistency
- Implement eventual consistency patterns
- Use CQRS for complex queries

### 3. Security

- Implement proper authentication and authorization
- Use API gateways for security enforcement
- Encrypt data in transit and at rest
- Implement rate limiting and throttling

### 4. Testing

- Unit tests for each service
- Integration tests for service interactions
- Contract tests for API compatibility
- End-to-end tests for critical user journeys

## When to Use Microservices

### Good Candidates

- Large, complex applications
- Teams working independently
- Need for different technology stacks
- High scalability requirements
- Frequent deployments

### Not Suitable For

- Small applications
- Simple CRUD applications
- Teams new to distributed systems
- Tightly coupled business logic
- Limited infrastructure resources

## Migration Strategy

### 1. Strangler Fig Pattern

```javascript
// Gradually replace monolith with microservices
class StranglerFig {
  async handleRequest(request) {
    // Check if request should go to new service
    if (this.shouldUseNewService(request)) {
      return await this.newService.handle(request);
    } else {
      return await this.monolith.handle(request);
    }
  }

  shouldUseNewService(request) {
    // Gradually increase traffic to new service
    return Math.random() < this.migrationPercentage;
  }
}
```

### 2. Database Migration

1. **Dual Write**: Write to both old and new databases
2. **Data Sync**: Sync data between systems
3. **Read Migration**: Gradually shift reads to new system
4. **Write Migration**: Shift writes to new system
5. **Cleanup**: Remove old system

## Conclusion

Microservices offer significant benefits for large, complex applications but come with increased complexity. The key is to start simple and gradually evolve your architecture based on actual needs rather than premature optimization.

Remember: **Microservices are a means to an end, not an end in themselves**. Focus on solving business problems first, then choose the architecture that best supports your goals.

