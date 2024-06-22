# Task Management API

This is a Task Management API built with Node.js, Express, and MongoDB. The API allows you to create, read, update, and delete tasks.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create a new task
- Retrieve all tasks
- Retrieve a single task by ID
- Update an existing task
- Delete a task

## Installation

### Prerequisites

- Node.js (>= 12.x)
- npm (>= 6.x)
- MongoDB instance (local or cloud)

### Clone the Repository
git clone https://github.com/yourusername/task-management-api.git
cd task-management-api

### Install Dependencies
npm install

### Environment Variables

Create a `.env` file in the root directory and add the following variables:

MONGO_URI=your_mongodb_connection_string
PORT=3000


### Start the Server
npm start


The server will start on `http://localhost:3000`.

## Usage

### Running in Development Mode

npm run dev

This will start the server using `nodemon` for automatic restarts on file changes.

## API Endpoints

### Create a Task

- **URL:** `/api/tasks`
- **Method:** `POST`
- **Body:**
  json
  {
    "title": "Task title",
    "description": "Task description",
    "completed": false
  }
- **Success Response:**
  - **Code:** `201`
  - **Content:** 
    json
    {
      "message": "Task created successfully",
      "task": { ... }
    }
    

### Get All Tasks

- **URL:** `/api/tasks`
- **Method:** `GET`
- **Success Response:**
  - **Code:** `200`
  - **Content:**
    json
    {
      "message": "Fetched all tasks",
      "tasks": [ ... ]
    }

### Get a Task by ID

- **URL:** `/api/tasks/:id`
- **Method:** `GET`
- **Success Response:**
  - **Code:** `200`
  - **Content:**
    json
    {
      "task": { ... }
    }
    
- **Error Response:**
  - **Code:** `404`
  - **Content:**
    json
    {
      "msg": "No task with id: :id"
    }

### Update a Task

- **URL:** `/api/tasks/:id`
- **Method:** `PATCH`
- **Body:**
  json
  {
    "title": "Updated title",
    "description": "Updated description",
    "completed": true
  }
- **Success Response:**
  - **Code:** `200`
  - **Content:**
  json
    {
      "task": { ... }
    }
  
- **Error Response:**
  - **Code:** `404`
  - **Content:**
    json
    {
      "msg": "No task with id: :id"
    }
    

### Delete a Task

- **URL:** `/api/tasks/:id`
- **Method:** `DELETE`
- **Success Response:**
  - **Code:** `200`
  - **Content:**
    json
    {
      "task": { ... }
    }
    
- **Error Response:**
  - **Code:** `404`
  - **Content:**
    json
    {
      "msg": "No task with id: :id"
    }

## Error Handling

Errors are handled by custom error classes and middleware. The response format for errors is:

json
{
  "msg": "Error message"
}

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.
