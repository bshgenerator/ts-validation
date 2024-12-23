# @bshg/validation

are you using this library? [let us discuss on github](https://github.com/bshgenerator/ts-validation/discussions)

visit our docs site: [Bshg Docs](https://docs.bshgen.com/ts-validation)

Welcome to `@bshg/validation`, a versatile TypeScript library crafted for seamless data validation within your projects.
Whether you're working on a front-end or back-end application, this library empowers you to validate data in a
declarative manner, ensuring your objects align with your expectations.

Designed with simplicity and efficiency in mind, `@bshg/validation` streamlines the validation process, making it a
reliable choice for your projects. It offers extensive customization options, enabling you to tailor validation rules
and error messages to fit your specific requirements with ease.

This library is lightweight and has no external dependencies, ensuring fast load times and minimal impact on your
application's performance. Whether you're building a web application, API, or mobile app, you can rely on
`@bshg/validation` to handle validation consistently across platforms.

## Why Choose `@bshg/validation`?

- **Simplicity and Efficiency**: `@bshg/validation` is designed to be straightforward and efficient, making
  implementation easy while maintaining high performance.
- **Customization**: The library offers extensive customization options for validation rules and error messages,
  providing flexibility and control tailored to your project's needs.
- **Lightweight**: With no external dependencies, `@bshg/validation` ensures fast load times and minimal impact on
  performance.
- **Cross-Platform Compatibility**: Suitable for both front-end and back-end applications, it ensures consistent
  validation across different platforms.
- **Full Stack Library**: Use `@bshg/validation` in both frontend and backend projects, and seamlessly share validation
  logic between them. This makes displaying server-side validation results on the client-side straightforward and
  requires no extra code.
- **Autocompletion**: Enhance your development experience with autocompletion support in popular IDEs like VSCode,
  improving coding efficiency and reducing errors.

## Getting Started

Let's dive into the details of how to use this library effectively.

### Installation

Install `@bshg/validation` via npm:

```bash
npm install @bshg/validation
```

```bash
yarn add @bshg/validation
```

### Basic Usage

1. Creating Your Type
   First, define the TypeScript class for your data model:
    ```typescript
    export class User {
      username: string;
      password: string;
      fullName: string;
      age: number;
      email: string;
      phone: string;
    }
    ```

2. Import the Library
   Import the `v` symbol, which contains all the library methods you can use:
    ```typescript
    import { v } from '@bshg/validation';
    ```

3. Creating a Validator for Your Type
   Create a validator instance for your `User` type:
    ```typescript
    import { v } from '@bshg/validation';
    
    const item = new User();
    
    const validator = v.validator<User>({
      items: {
        username: v.string().required().alpha(),
        password: v.string().required().min(8),
        fullName: v.string().required(),
        email: v.string().required().email(),
        phone: v.string().required().phone(),
        age: v.number().positive(),
      }
    }).init(() => item);
    ```
