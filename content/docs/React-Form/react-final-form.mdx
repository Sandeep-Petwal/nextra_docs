---
sidebar_label: 'React Final Form'
title: 'React Final Form - Robust Form State Management in React'
description: 'A comprehensive guide to using React Final Form for building flexible, high-performance forms in React applications.'
---

# React Final Form - Robust Form State Management in React

A detailed guide to using React Final Form for building, validating, and managing complex forms in React applications.

## Table of Contents
- [What is React Final Form?](#what-is-react-final-form)
- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [Field Components](#field-components)
- [Validation](#validation)
- [Field Arrays](#field-arrays)
- [Form Decorators](#form-decorators)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)
- [References](#references)

## What is React Final Form?

**React Final Form** is a framework-agnostic form state management library for React. It provides a simple API for building forms, handling validation, and managing field-level state, with a focus on performance and flexibility.

- No dependencies on Redux or context providers
- Minimal re-renders for high performance
- Supports synchronous and asynchronous validation
- Extensible with decorators and mutators

## Installation

```bash
npm install final-form react-final-form
# or
yarn add final-form react-final-form
```

## Basic Usage

Here's a minimal example of a login form:

```jsx
import React from 'react';
import { Form, Field } from 'react-final-form';

const onSubmit = async values => {
  window.alert(JSON.stringify(values, 0, 2));
};

export default function LoginForm() {
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email</label>
            <Field name="email" component="input" type="email" placeholder="Email" />
          </div>
          <div>
            <label>Password</label>
            <Field name="password" component="input" type="password" placeholder="Password" />
          </div>
          <div>
            <button type="submit" disabled={submitting || pristine}>
              Submit
            </button>
            <button type="button" onClick={form.reset} disabled={submitting || pristine}>
              Reset
            </button>
          </div>
          <pre>{JSON.stringify(values, 0, 2)}</pre>
        </form>
      )}
    />
  );
}
```

## Field Components

- `<Field />` is used to connect an input to form state.
- Supports `component` prop (`input`, `select`, custom components).
- Field-level validation is supported via the `validate` prop.

```jsx
<Field name="username" component="input" placeholder="Username" validate={value => value ? undefined : 'Required'} />
```

## Validation

React Final Form supports both synchronous and asynchronous validation at the field and form level.

### Synchronous Validation Example

```jsx
const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  }
  if (!values.password) {
    errors.password = 'Required';
  }
  return errors;
};

<Form onSubmit={onSubmit} validate={validate} ... />
```

### Field-Level Validation

```jsx
<Field name="email" validate={value => value ? undefined : 'Required'} ... />
```

### Asynchronous Validation

You can return a Promise from the `validate` function for async checks (e.g., username availability).

## Field Arrays

For dynamic fields (e.g., adding/removing items):

```jsx
import { FieldArray } from 'react-final-form-arrays';

<FieldArray name="friends">
  {({ fields }) => (
    <div>
      <button type="button" onClick={() => fields.push()}>Add Friend</button>
      {fields.map((name, index) => (
        <div key={name}>
          <Field name={`${name}.name`} component="input" placeholder="Friend Name" />
          <button type="button" onClick={() => fields.remove(index)}>Remove</button>
        </div>
      ))}
    </div>
  )}
</FieldArray>
```

## Form Decorators

Decorators are functions that can subscribe to form state changes and perform side effects (e.g., auto-save, focus management).

- Use the `final-form-calculate` package for calculated fields.
- Example: Auto-save form on change.

## Best Practices

- Use field-level validation for performance.
- Minimize re-renders by using `subscription` props.
- Use custom input components for complex UI.
- Leverage decorators for cross-field logic.
- Keep form state out of global state unless necessary.

## Troubleshooting

- **Fields not updating:** Check `name` props and ensure unique field names.
- **Validation not working:** Ensure `validate` functions return `undefined` for valid fields.
- **Performance issues:** Use `subscription` to limit what triggers re-renders.

## References

- [React Final Form Documentation](https://final-form.org/react)
- [GitHub Repository](https://github.com/final-form/react-final-form)
- [Field Arrays Docs](https://final-form.org/docs/react-final-form-arrays/field-array) 