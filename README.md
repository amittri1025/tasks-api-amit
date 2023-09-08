# Welcome to TASKS API

Instructions to use the API.

1. To read Existing Tasks.
   <strong>GET /</strong>
   <br>
   Response :
   ```js
   [
   {
   "_id": "64fae8966f9a4fbcac8c672a",
   "title": "Learn MaterialUI",
   "description": "Visit official MUI docs, and learn the important stuff to build things using MUI for React",
   "status": "completed",
   "__v": 0
   },
   {
   "_id": "64fae8e86f9a4fbcac8c672e",
   "title": "Meeting with manager at 10 pm ",
   "description": "Arrange the meeting with manager and ask him details for important protocols to be followed",
   "status": "completed",
   "__v": 0
   }
   ]

    ````

2. To create Posts,
   <strong>send POST request on url with body</strong>

    ```json
    {
    "title": "Learn MaterialUI",
    "description": "Visit official MUI docs, and learn the important stuff to build things using MUI for React",
    "status": "completed"
    }
    ````
3. To Delete use <strong>DELETE /posts/:id</strong>
    <br> Response : 
    ```
    Task deleted successfully
    ```
4. To Update use <strong>UPDATE /posts/:id</strong>
    <br> Response : Updated Post