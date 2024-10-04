
# To-Do List App

A basic to-do list web application built using **Node.js**, **Express**, **MongoDB** (via **Mongoose**), and **EJS** for rendering views. The application allows users to add, complete, undo, and delete tasks.

## Features

- **Add new tasks**
- **Mark tasks as complete**
- **Undo completed tasks**
- **Delete tasks**
- **Dark mode UI** with modern styling

## Prerequisites

Before running this project, ensure you have the following installed on your machine:

- **Node.js** (v12 or higher)
- **MongoDB** (ensure your MongoDB service is running)

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/fuyalasmit/to-do-list.git
   cd to-do-list
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start MongoDB**:
   Ensure MongoDB is running on `localhost:27017`. You can start MongoDB using:
   ```bash
   mongod
   ```

4. **Start the server**:
   ```bash
   node index.js
   ```

5. **Access the app**:
   Open your browser and go to:
   ```
   http://localhost:3000
   ```

## Technologies Used

- **Node.js**: Server-side JavaScript runtime.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing tasks.
- **Mongoose**: MongoDB object modeling for Node.js.
- **EJS**: Embedded JavaScript templates for rendering views.

## Usage

- Add a task by typing in the input field and clicking **Add**.
- Mark a task as complete by clicking **Complete**. The task will be struck through.
- Undo a completed task by clicking **Undo**.
- Delete a task by clicking **Delete**.

## Dark Mode UI

The app has a clean, modern dark-mode theme with color palettes designed for readability and aesthetics.

## License

This project is licensed under the *ISC License*.
