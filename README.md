

# Automailer

## Description

This script automates the process of sending personalized emails to a list of recipients from a CSV file. It reads the recipient details (email and name) from a CSV file, replaces placeholders in a predefined text message, and sends the emails using Gmail's SMTP service.

This project is designed to manage and process mail templates for user correspondence. It includes:
- A script (`script.ts`) for managing TypeScript-based functionalities.
- A CSV file (`mails.csv`) containing the data for various mail templates.
- A text file (`letter.txt`) with template text that can be used as a base for generating custom letters.
- An attachment or more if you want to attach something to the mail

## Prerequisites

- **Node.js**: Ensure Node.js is installed.
- **TypeScript**: Install TypeScript globally if not already installed.

## Setup and Usage

### 1. Clone the Repository
Clone this project to your local machine.

### 2. Install Dependencies
Install necessary Node.js packages, if applicable (refer to any `package.json` file if it exists).

```bash
npm install 
```

### 3. Compile TypeScript
Compile the TypeScript code to JavaScript using the `tsconfig.json` configuration.

```bash
tsc
```

### 4. Run the Script
After compilation, run the generated JavaScript file using Node.js.

```bash
node index.js
```

### 5. Customize `letter.txt`
The `letter.txt` file contains a template that you can customize for different users. Fill in placeholder fields as required before sending.

### 6. Manage Mail Templates
Use `mails.csv` to maintain and update user mail templates as needed.


