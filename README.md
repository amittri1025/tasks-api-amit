# Welcome to TASKS API

Languages Used : NodeJS


### Features
- GET /tasks: Fetch all tasks.
- POST /task: Create a new task.
- PUT /task/{id}: Update the status of an existing task.

### Database Schema : 
- id: Unique identifier
- title: String
- description: String
- status: String (e.g., "completed", "pending")


Instructions to use the API.

1. To read Existing Tasks.<br>
   `Send GET on  https://tasks-api-amit.onrender.com/posts`

   <br>
   Response :

   ```js
   [
            {
            "_id": "64fae8966f9a4fbcac8c672a",
            "title": "Learn MaterialUI",
            "description": "Some Description",
            "status": "completed",
            "__v": 0
            },
            {
            "_id": "64fae8e86f9a4fbcac8c672e",
            "title": "Meeting with manager at 10 pm ",
            "description": "Some Description",
            "status": "completed",
            "__v": 0
            },
            ...
   ]

    ````

2. To create Posts,<br>
   `send POST request on https://tasks-api-amit.onrender.com/task with body`

    ```json
    {
        "title": "Learn MaterialUI",
        "description": "Visit official MUI docs, and learn the important stuff to build things using MUI for React",
        "status": "completed"
    }
    ````
3. To Delete use <br> `DELETE https://tasks-api-amit.onrender.com/posts/:id`
    <br> Response : 
    ```
    Task deleted successfully
    ```
4. To Update use <br>`UPDATE https://tasks-api-amit.onrender.com/posts/:id`
    <br> Response : Updated Post