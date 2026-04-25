---
sidebar_label: 'TypeScript'
title: 'TypeScript - Complete Guide'
description: 'Comprehensive guide to TypeScript covering types, interfaces, classes, modules, generics, and advanced features with practical examples.'
---

# TypeScript - Complete Guide

A comprehensive guide to TypeScript, covering everything from basic types to advanced features, with practical examples and best practices for modern JavaScript development.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Basic Types](#basic-types)
- [Interfaces](#interfaces)
- [Classes](#classes)
- [Functions](#functions)
- [Generics](#generics)
- [Advanced Types](#advanced-types)
- [Modules and Namespaces](#modules-and-namespaces)
- [Type Guards](#type-guards)
- [Utility Types](#utility-types)
- [Decorators](#decorators)
- [Configuration](#configuration)
- [Best Practices](#best-practices)
- [React with TypeScript](#react-with-typescript)

## Introduction

TypeScript is a strongly typed programming language that builds on JavaScript, adding optional static types, classes, and modules. It was developed by Microsoft and is designed for the development of large applications.

### Why TypeScript?

- **Static Typing**: Catch errors at compile time rather than runtime
- **Better IDE Support**: Enhanced autocomplete, refactoring, and navigation
- **Object-Oriented Features**: Classes, interfaces, and inheritance
- **ES6+ Features**: Support for modern JavaScript features
- **Tooling**: Rich ecosystem of tools and libraries

### TypeScript vs JavaScript

```typescript
// JavaScript
function add(a, b) {
  return a + b;
}

// TypeScript
function add(a: number, b: number): number {
  return a + b;
}
```

## Getting Started

### Installation

```bash
# Install TypeScript globally
npm install -g typescript

# Install in a project
npm install --save-dev typescript

# Install TypeScript compiler
npm install --save-dev @types/node
```

### Basic Configuration

Create a `tsconfig.json` file:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### Your First TypeScript File

```typescript
// hello.ts
function greet(name: string): string {
  return `Hello, ${name}!`;
}

const message = greet("TypeScript");
console.log(message);
```

Compile and run:

```bash
tsc hello.ts
node hello.js
```

## Basic Types

### Primitive Types

```typescript
// Boolean
let isDone: boolean = false;

// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;

// String
let color: string = "blue";
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}. I'll be ${age + 1} years old next month.`;

// Array
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// Tuple
let tuple: [string, number] = ["hello", 10];

// Enum
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;

// String enums
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

// Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

// Void
function warnUser(): void {
  console.log("This is my warning message");
}

// Null and Undefined
let u: undefined = undefined;
let n: null = null;

// Never
function error(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}

// Object
let obj: object = { name: "John" };
```

### Type Assertions

```typescript
// Angle-bracket syntax
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

// as syntax
let someValue2: any = "this is a string";
let strLength2: number = (someValue2 as string).length;
```

### Literal Types

```typescript
let x: "hello" = "hello";
// x = "world"; // Error!

// Union types with literals
type Easing = "ease-in" | "ease-out" | "ease-in-out";

function animate(easing: Easing) {
  // ...
}

animate("ease-in");
// animate("linear"); // Error!
```

## Interfaces

### Basic Interface

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  age?: number; // Optional property
  readonly createdAt: Date; // Read-only property
}

const user: User = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  createdAt: new Date()
};
```

### Function Types

```typescript
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
};
```

### Indexable Types

```typescript
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

// Dictionary pattern
interface Dictionary {
  [key: string]: any;
}

let dict: Dictionary = {
  name: "John",
  age: 30
};
```

### Extending Interfaces

```typescript
interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

let square = {} as Square;
square.color = "blue";
square.sideLength = 10;

// Multiple inheritance
interface PenStroke {
  penWidth: number;
}

interface Square2 extends Shape, PenStroke {
  sideLength: number;
}
```

### Hybrid Types

```typescript
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = function (start: number) { return "start"; } as Counter;
  counter.interval = 123;
  counter.reset = function () { };
  return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
```

## Classes

### Basic Class

```typescript
class Animal {
  private name: string;
  protected species: string;
  
  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }
  
  public makeSound(): void {
    console.log("Some sound");
  }
  
  public getName(): string {
    return this.name;
  }
}

const dog = new Animal("Buddy", "Canis");
dog.makeSound();
console.log(dog.getName());
```

### Inheritance

```typescript
class Dog extends Animal {
  private breed: string;
  
  constructor(name: string, breed: string) {
    super(name, "Canis");
    this.breed = breed;
  }
  
  public makeSound(): void {
    console.log("Woof!");
  }
  
  public getBreed(): string {
    return this.breed;
  }
}

const myDog = new Dog("Buddy", "Golden Retriever");
myDog.makeSound(); // "Woof!"
```

### Access Modifiers

```typescript
class Example {
  public publicField: string = "public";
  private privateField: string = "private";
  protected protectedField: string = "protected";
  
  public publicMethod(): void {
    console.log(this.privateField); // OK
  }
  
  private privateMethod(): void {
    console.log("private");
  }
  
  protected protectedMethod(): void {
    console.log("protected");
  }
}
```

### Abstract Classes

```typescript
abstract class Vehicle {
  abstract startEngine(): void;
  
  public getInfo(): string {
    return "This is a vehicle";
  }
}

class Car extends Vehicle {
  startEngine(): void {
    console.log("Car engine started");
  }
}

// const vehicle = new Vehicle(); // Error!
const car = new Car();
car.startEngine();
```

### Static Members

```typescript
class MathUtils {
  static PI: number = 3.14159;
  
  static add(a: number, b: number): number {
    return a + b;
  }
  
  static multiply(a: number, b: number): number {
    return a * b;
  }
}

console.log(MathUtils.PI);
console.log(MathUtils.add(5, 3));
```

### Getters and Setters

```typescript
class Temperature {
  private _celsius: number = 0;
  
  get celsius(): number {
    return this._celsius;
  }
  
  set celsius(value: number) {
    if (value < -273.15) {
      throw new Error("Temperature below absolute zero!");
    }
    this._celsius = value;
  }
  
  get fahrenheit(): number {
    return this._celsius * 9/5 + 32;
  }
  
  set fahrenheit(value: number) {
    this.celsius = (value - 32) * 5/9;
  }
}

const temp = new Temperature();
temp.celsius = 25;
console.log(temp.fahrenheit); // 77
```

## Functions

### Function Types

```typescript
// Function type annotation
let add: (x: number, y: number) => number;

add = function(x: number, y: number): number {
  return x + y;
};

// Function with optional parameters
function buildName(firstName: string, lastName?: string): string {
  if (lastName) {
    return firstName + " " + lastName;
  } else {
    return firstName;
  }
}

// Function with default parameters
function buildName2(firstName: string, lastName: string = "Smith"): string {
  return firstName + " " + lastName;
}

// Function with rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15
```

### Function Overloading

```typescript
function process(x: number): number;
function process(x: string): string;
function process(x: any): any {
  if (typeof x === "number") {
    return x * 2;
  } else if (typeof x === "string") {
    return x.toUpperCase();
  }
}

console.log(process(5)); // 10
console.log(process("hello")); // "HELLO"
```

### Arrow Functions

```typescript
// Basic arrow function
const multiply = (a: number, b: number): number => a * b;

// Arrow function with block body
const divide = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
};

// Arrow function as callback
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num: number): number => num * 2);
```

### Higher-Order Functions

```typescript
type Operation = (a: number, b: number) => number;

function createCalculator(operation: Operation) {
  return function(a: number, b: number): number {
    return operation(a, b);
  };
}

const add = createCalculator((a, b) => a + b);
const multiply = createCalculator((a, b) => a * b);

console.log(add(5, 3)); // 8
console.log(multiply(4, 2)); // 8
```

## Generics

### Basic Generics

```typescript
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("myString");
let output2 = identity("myString"); // Type inference

// Generic interfaces
interface GenericIdentityFn<T> {
  (arg: T): T;
}

let myIdentity: GenericIdentityFn<number> = identity;
```

### Generic Classes

```typescript
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };
```

### Generic Constraints

```typescript
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

loggingIdentity("hello"); // OK
loggingIdentity([1, 2, 3]); // OK
// loggingIdentity(3); // Error!
```

### Using Type Parameters in Generic Constraints

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a"); // OK
getProperty(x, "m"); // Error!
```

### Generic Utility Types

```typescript
// Partial<T>
interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

// Required<T>
interface Props {
  a?: number;
  b?: string;
}

const obj: Required<Props> = { a: 5, b: "hello" };

// Readonly<T>
const todo: Readonly<Todo> = {
  title: "Delete inactive users",
  description: "Remove all inactive users from the system"
};

// todo.title = "Hello"; // Error!
```

## Advanced Types

### Union Types

```typescript
type StringOrNumber = string | number;

function processValue(value: StringOrNumber) {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else {
    return value.toFixed(2);
  }
}

// Union of literal types
type Status = "loading" | "success" | "error";

function handleStatus(status: Status) {
  switch (status) {
    case "loading":
      return "Please wait...";
    case "success":
      return "Operation completed!";
    case "error":
      return "Something went wrong!";
  }
}
```

### Intersection Types

```typescript
interface Person {
  name: string;
  age: number;
}

interface Employee {
  id: number;
  department: string;
}

type PersonEmployee = Person & Employee;

const john: PersonEmployee = {
  name: "John",
  age: 30,
  id: 123,
  department: "Engineering"
};
```

### Conditional Types

```typescript
type NonNullable<T> = T extends null | undefined ? never : T;

type T0 = NonNullable<string | number | null>; // string | number
type T1 = NonNullable<string[] | null | undefined>; // string[]

// Conditional type with inference
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

type T2 = ReturnType<() => string>; // string
type T3 = ReturnType<(s: string) => void>; // void
```

### Mapped Types

```typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type Partial<T> = {
  [P in keyof T]?: T[P];
};

type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type Record<K extends keyof any, T> = {
  [P in K]: T;
};

// Usage
interface User {
  id: number;
  name: string;
  email: string;
}

type ReadonlyUser = Readonly<User>;
type PartialUser = Partial<User>;
type UserNameAndEmail = Pick<User, "name" | "email">;
type UserMap = Record<string, User>;
```

### Template Literal Types

```typescript
type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";

type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;

// String manipulation types
type PropEventSource<T> = {
  on(eventName: `${string & keyof T}Changed`, callback: () => void): void;
};

declare function makeWatchedObject<T>(obj: T): T & PropEventSource<T>;

const person = makeWatchedObject({
  firstName: "Saoirse",
  lastName: "Ronan",
  age: 26
});

person.on("firstNameChanged", () => {});
// person.on("firstName", () => {}); // Error!
```

## Modules and Namespaces

### ES6 Modules

```typescript
// math.ts
export const PI = 3.14159;

export function add(a: number, b: number): number {
  return a + b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

// Default export
export default class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }
}

// app.ts
import Calculator, { add, multiply, PI } from "./math";

const calc = new Calculator();
console.log(calc.add(5, 3));
console.log(add(2, 3));
console.log(PI);
```

### Re-exports

```typescript
// shapes.ts
export interface Shape {
  area(): number;
}

export class Circle implements Shape {
  constructor(private radius: number) {}
  
  area(): number {
    return Math.PI * this.radius ** 2;
  }
}

// index.ts
export * from "./shapes";
export { Circle as CircleShape } from "./shapes";
```

### Namespaces

```typescript
namespace Validation {
  export interface StringValidator {
    isValid(s: string): boolean;
  }
  
  export class EmailValidator implements StringValidator {
    isValid(s: string): boolean {
      return s.indexOf("@") !== -1;
    }
  }
  
  export class ZipCodeValidator implements StringValidator {
    isValid(s: string): boolean {
      return s.length === 5 && parseInt(s).toString() === s;
    }
  }
}

// Usage
let validators: { [s: string]: Validation.StringValidator } = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Email"] = new Validation.EmailValidator();
```

## Type Guards

### typeof Type Guards

```typescript
function processValue(value: string | number) {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else {
    return value.toFixed(2);
  }
}
```

### instanceof Type Guards

```typescript
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Dog extends Animal {
  breed: string;
  constructor(name: string, breed: string) {
    super(name);
    this.breed = breed;
  }
}

function processAnimal(animal: Animal) {
  if (animal instanceof Dog) {
    console.log(animal.breed); // TypeScript knows this is a Dog
  } else {
    console.log(animal.name);
  }
}
```

### Custom Type Guards

```typescript
interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function move(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet.swim(); // TypeScript knows this is a Fish
  } else {
    pet.fly(); // TypeScript knows this is a Bird
  }
}
```

### Discriminated Unions

```typescript
interface Square {
  kind: "square";
  size: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

interface Circle {
  kind: "circle";
  radius: number;
}

type Shape = Square | Rectangle | Circle;

function area(s: Shape): number {
  switch (s.kind) {
    case "square":
      return s.size * s.size;
    case "rectangle":
      return s.width * s.height;
    case "circle":
      return Math.PI * s.radius ** 2;
  }
}
```

## Utility Types

### Built-in Utility Types

```typescript
// Partial<T>
interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

// Required<T>
interface Props {
  a?: number;
  b?: string;
}

const obj: Required<Props> = { a: 5, b: "hello" };

// Readonly<T>
const todo: Readonly<Todo> = {
  title: "Delete inactive users",
  description: "Remove all inactive users from the system"
};

// Pick<T, K>
type TodoPreview = Pick<Todo, "title">;

// Omit<T, K>
type TodoWithoutDescription = Omit<Todo, "description">;

// Record<K, T>
type CatInfo = {
  age: number;
  breed: string;
};

type CatName = "miffy" | "boris";

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" }
};

// ReturnType<T>
type T0 = ReturnType<() => string>; // string
type T1 = ReturnType<(s: string) => void>; // void

// Parameters<T>
type T2 = Parameters<(s: string, b: boolean) => void>; // [string, boolean]

// InstanceType<T>
class C {
  x = 0;
  y = 0;
}

type T3 = InstanceType<typeof C>; // C
```

### Custom Utility Types

```typescript
// DeepPartial
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// NonNullable
type NonNullable<T> = T extends null | undefined ? never : T;

// Extract
type Extract<T, U> = T extends U ? T : never;

// Exclude
type Exclude<T, U> = T extends U ? never : T;

// NonFunctionKeys
type NonFunctionKeys<T> = {
  [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];

// FunctionKeys
type FunctionKeys<T> = {
  [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];
```

## Decorators

### Class Decorators

```typescript
function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello, " + this.greeting;
  }
}
```

### Method Decorators

```typescript
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value;
  
  descriptor.value = function(...args: any[]) {
    console.log(`Calling ${propertyKey} with:`, args);
    const result = method.apply(this, args);
    console.log(`Result:`, result);
    return result;
  };
  
  return descriptor;
}

class Calculator {
  @log
  add(a: number, b: number): number {
    return a + b;
  }
}
```

### Property Decorators

```typescript
function readonly(target: any, propertyKey: string) {
  Object.defineProperty(target, propertyKey, {
    writable: false
  });
}

class Example {
  @readonly
  name: string = "John";
}

const ex = new Example();
// ex.name = "Jane"; // Error!
```

### Parameter Decorators

```typescript
function validate(target: any, propertyKey: string, parameterIndex: number) {
  console.log(`Parameter ${parameterIndex} of ${propertyKey} is validated`);
}

class Example {
  method(@validate param1: string, @validate param2: number) {
    // Method implementation
  }
}
```

## Configuration

### tsconfig.json Options

```json
{
  "compilerOptions": {
    // Target and Module
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020", "DOM"],
    
    // Output
    "outDir": "./dist",
    "rootDir": "./src",
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    
    // Strict Type Checking
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictBindCallApply": true,
    "strictPropertyInitialization": true,
    "noImplicitThis": true,
    "alwaysStrict": true,
    
    // Additional Checks
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true,
    
    // Module Resolution
    "moduleResolution": "node",
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    },
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    
    // Advanced
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"],
  "files": ["src/index.ts"]
}
```

### Path Mapping

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"],
      "@utils/*": ["src/utils/*"],
      "@types/*": ["src/types/*"]
    }
  }
}
```

## Best Practices

### 1. Use Strict Mode

```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

### 2. Prefer Interfaces for Object Shapes

```typescript
// Good
interface User {
  id: number;
  name: string;
  email: string;
}

// Avoid
type User = {
  id: number;
  name: string;
  email: string;
};
```

### 3. Use Union Types for State

```typescript
type LoadingState = { status: 'loading' };
type SuccessState = { status: 'success'; data: User[] };
type ErrorState = { status: 'error'; error: string };

type ApiState = LoadingState | SuccessState | ErrorState;
```

### 4. Use Const Assertions

```typescript
// Good
const COLORS = ['red', 'green', 'blue'] as const;
type Color = typeof COLORS[number];

// Avoid
const COLORS = ['red', 'green', 'blue'];
type Color = string;
```

### 5. Use Type Guards

```typescript
function isUser(obj: any): obj is User {
  return obj && typeof obj.id === 'number' && typeof obj.name === 'string';
}

function processData(data: unknown) {
  if (isUser(data)) {
    console.log(data.name); // TypeScript knows data is User
  }
}
```

### 6. Use Generic Constraints

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
```

### 7. Use Utility Types

```typescript
// Instead of manually creating types
type PartialUser = Partial<User>;
type ReadonlyUser = Readonly<User>;
type UserKeys = keyof User;
```

### 8. Use Discriminated Unions

```typescript
interface SuccessResult {
  success: true;
  data: User;
}

interface ErrorResult {
  success: false;
  error: string;
}

type Result = SuccessResult | ErrorResult;

function handleResult(result: Result) {
  if (result.success) {
    console.log(result.data); // TypeScript knows this is SuccessResult
  } else {
    console.log(result.error); // TypeScript knows this is ErrorResult
  }
}
```

### 9. Use Template Literal Types

```typescript
type EventName<T extends string> = `${T}Changed`;
type UserEvents = EventName<'name' | 'email' | 'age'>;
// Result: "nameChanged" | "emailChanged" | "ageChanged"
```

### 10. Use Conditional Types

```typescript
type NonNullable<T> = T extends null | undefined ? never : T;
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
```

## React with TypeScript

For comprehensive TypeScript integration with React, including component types, hooks, props, state management, and best practices, see the dedicated guide:

**[TypeScript in React - Complete Guide](../React/5.typescript-in-react.md)**

This guide covers:
- Component types and interfaces
- Props and state typing
- Event handlers
- Hooks with TypeScript
- Context API
- Refs and DOM elements
- Generic components
- Form handling
- API integration
- Best practices for React + TypeScript

---

This comprehensive guide covers all essential TypeScript concepts, from basic types to advanced features. TypeScript provides powerful tools for building robust, maintainable applications with excellent developer experience and compile-time error checking. 