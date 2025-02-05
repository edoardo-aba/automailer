

# Automailer

## Description

This project is designed to manage and process mail templates for user correspondence. It includes:
- A script (`script.ts`) for managing TypeScript-based functionalities.
- A configuration file (`tsconfig.json`) for setting up the TypeScript compiler options.
- A CSV file (`mails.csv`) containing the data for various mail templates.
- A text file (`letter.txt`) with template text that can be used as a base for generating custom letters.

## Features

- **Mail Processing**: Script logic in `script.ts` likely involves TypeScript functionalities, such as handling mail templates or managing user data processing.
- **TypeScript Configuration**: The `tsconfig.json` file provides specific configurations, setting up for `ES2016` compatibility, `CommonJS` module support, and enabling source maps to assist with debugging.

## Prerequisites

- **Node.js**: Ensure Node.js is installed.
- **TypeScript**: Install TypeScript globally if not already installed.

```bash
npm install -g typescript
```

## Setup and Usage

### 1. Clone the Repository
Clone this project to your local machine.

### 2. Install Dependencies
Install necessary Node.js packages, if applicable (refer to any `package.json` file if it exists).

### 3. Compile TypeScript
Compile the TypeScript code to JavaScript using the `tsconfig.json` configuration.

```bash
tsc
```

### 4. Run the Script
After compilation, run the generated JavaScript file using Node.js.

```bash
node path_to_compiled_script.js
```

### 5. Customize `letter.txt`
The `letter.txt` file contains a template that you can customize for different users. Fill in placeholder fields as required before sending.

### 6. Manage Mail Templates
Use `mails.csv` to maintain and update user mail templates as needed.

## Configuration

- **TypeScript Compiler**: Configured in `tsconfig.json` for `ES2016` target and `CommonJS` module format.
- **Source Maps**: Enabled to aid in debugging the TypeScript code.

## Notes

- The `tsconfig.json` file is already set to skip library checks, which can speed up the compilation process.
- Ensure that all placeholder fields in `letter.txt` are updated appropriately before usage.

