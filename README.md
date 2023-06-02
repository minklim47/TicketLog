# TicketLog

TicketLog is the place where you collect all your movie tickets in form of electronic movie tickets with options for styles and notes of your choice. 

## Technology Stack

TicketLog is built using the following technologies:

- Front-end: React.js
- Back-end: Express.js
- Database: MariaDB
- Other Dependencies/Libraries: MUI and you can find others on package.js


## Features

| Feature | Description                |
| :-------- | :------------------------- |
| `login/register` | register and login to the website|
| `update profile` | edit account data |
| `show all tickets` | show all the tickets of logged in user in the home page |
| `view ticket and note` | view a ticket detail and note of a ticket |
| `sort` | sort the shown tickets by created date, alphabet, ticket date |
| `search` | search the name of ticket |
| `create ticket` | create a ticket with information and choose ticket style |
| `create note` | create a note of a ticket |
| `update ticket and note` | edit the detail of ticket and note |
| `delete ticket` | delete a ticket |
| `show collection` | show the collection of tickets by year |

## Database Schema

![Uploading schema.png…]()

## Installation

1. Clone the repository: `git clone https://github.com/minklim47/TicketLog.git`

2. Install node modules for frontend : `cd ticketlog/client npm i`

2. Install node modules for backend : `cd ticketlog/server npm i`

## To run the frontend and backend

Frontend -> ticketlog/client 
```bash
  npm run dev
```
Backend -> ticketlog/server
```bash
  nodemon server.js
```

## All the following responds will be wrapped with this data before sending

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `success` | `boolean` | status of request|
| `message` | `string` | message for each request |
| `data` | `JSON` | the actual data|


## API endpoints

### Login

URL

`
POST /auth/login
`

#### Request Body

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | email address |
| `password` | `string` | password must be at least 8 characters with uppercase letter, lowercase letter and number. |

Example

```
{
  email: "minklim47@gmail.com",
  password: "Password12300"
}
```

#### Success

Response

`200` login successful

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `int` | user id |
| `email` | `string` | email address |
| `token` | `string` | the token contains user id and email address |

Example

```
{
  id: 1,
  email: "minklim47@gmail.com",
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ..."
}
```

#### If success, the Response will be sent with cookie named user and token and userId will be store in localStorage 


### Register

URL

`
POST /auth/register
`

#### Request Body

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | display name |
| `email` | `string` | email address |
| `password` | `string` | password must be at least 8 characters with uppercase letter, lowercase letter and number. |
| `location` | `string` | location |

Example

```
{
  name:"MinkLim",
  email: "minklim47@gmail.com",
  password: "Password12300",
  location:"Bangkok"
}
```

#### Success

Response

`200` login successful

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `int` | user id |
| `email` | `string` | email address |
| `token` | `string` | the token contains user id and email address |

Example

```
{
  id: 1,
  email: "minklim47@gmail.com",
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ..."
}
```

### Check Login

URL

`
GET /auth/checklogin
`

#### Request Body

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `user` | `string` | token "user" in the cookies |

Example

```
{
  user: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ...""
}
```

#### Success

Response

`200` "User is logged in with ID: " +
        decoded.userId +
        " with email: " +
        decoded.email,


### Get Logged in User

URL

`
GET /user/:userId
`

#### Request Body

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `userId` | `int` | user id |


#### Success

Response

`200` get logged in user successful

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `int` | user id |
| `name` | `string` | display name |
| `email` | `string` | email address |
| `location` | `string` | location |

Example

```
{
  id: 1,
  name: "MinkLim",
  email: "minklim47@gmail.com",
  lcoation: "Bangkok"
 
}
```

### Edit user information

URL

`
PATCH /user/:userId
`

#### Request Body

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `userId` | `int` | user id |
| `name` | `string` | display name |
| `location` | `string` | location |
| `currentPassword` | `string` | current password |
| `newPassword` | `string` | new password |

#### Success

Response

`200` change information and/or password successful

### Get all tickets of logged in user

URL

`
GET /ticket/home/:userId
`

#### Request Body

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `userId` | `string` | user id |


#### Success

Response

`200` get tickets successful

in the data there is an array of object with properties below:
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `int` | ticket id |
| `title` | `string` | ticket title|
| `cinema` | `string` | cinema |
| `seat` | `string` | seat number|
| `date` | `string` | ticket date|
| `time` | `string` | ticket time|
| `movie_id` | `int` | id of a movie associated with the ticket|
| `is_private` | `boolean` | the visibility of the ticket|
| `created_at` | `datetime` | datetime the ticket is created at |
| `style` | `string` | style of a ticket|
| `user_id` | `int` | user id of ticket's owner|


Example

```
{
    {
        cinema: "aff",
        created_at: "2023-06-01T08:43:01.000Z",
        date: "2023-05-31T17:00:00.000Z",
        id: 60,
        is_private: 0,
        movie_id: null,
        seat: "asf",
        style: "style-1",
        time: "08:42:57",
        title: "sfaf",
        user_id: 56
    }
  
}
```

### Get infomation of a ticket

URL

`
GET /ticket/:ticketId
`

#### Request Body

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `ticketId` | `int` | ticket id |


#### Success

Response

`200` get ticket successful

in the data there is an array of object with properties below:
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `int` | ticket id |
| `title` | `string` | ticket title|
| `cinema` | `string` | cinema |
| `seat` | `string` | seat number|
| `date` | `string` | ticket date|
| `time` | `string` | ticket time|
| `movie_id` | `int` | id of a movie associated with the ticket|
| `is_private` | `boolean` | the visibility of the ticket|
| `created_at` | `datetime` | datetime the ticket is created at |
| `style` | `string` | style of a ticket|
| `user_id` | `int` | user id of ticket's owner|


Example

```
{
    cinema: "aff",
    created_at: "2023-06-01T08:43:01.000Z",
    date: "2023-05-31T17:00:00.000Z",
    id: 60,
    is_private: 0,
    movie_id: null,
    seat: "asf",
    style: "style-1",
    time: "08:42:57",
    title: "sfaf",
    user_id: 56
}
```

### Create a ticket

URL

`
POST /ticket/
`

#### Request Body

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title` | `string` | ticket title|
| `cinema` | `string` | cinema |
| `seat` | `string` | seat number|
| `date` | `string` | ticket date|
| `time` | `string` | ticket time|
| `isPrivate` | `boolean` | the visibility of the ticket|
| `selectedStyle` | `string` | style of a ticket|
| `userId` | `int` | user id of ticket's owner|
| `note` | `JSON` | note object of the ticket|

body of `note`

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title` | `string` | note title|
| `content` | `string` | note content |

#### Success

Response

`200` create ticket successful

in the data there is an array of object with properties below:
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `ticketId` | `int` | ticket id |
| `noteId` | `int` | note id|

Example

```
{
    ticketId: 1,
    noteId: 1
}
```

### Edit a ticket

URL

`
PATCH /ticket/:ticketId
`

#### Request Body

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `ticketId` | `int` | ticket id|
| `updates` | `JSON` | object of updated ticket properties|
| `note` | `JSON` | object of updated note properties |

body of `updates`

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title` | `string` | ticket title|
| `cinema` | `string` | cinema |
| `seat` | `string` | seat number|
| `date` | `string` | ticket date|
| `time` | `string` | ticket time|
| `isPrivate` | `boolean` | the visibility of the ticket|
| `selectedStyle` | `string` | style of a ticket|

body of `note`

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title` | `string` | note title |
| `content` | `string` | note content |
| `ticketId` | `int` | ticket id |

#### Success

Response

`200` ticket and note update successful"


### Delete a ticket

URL

`
DELETE /ticket/:ticketId
`

#### Request Body

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `ticketId` | `int` | ticket id |


#### Success

Response

`200` ticket id ${ticketId} deleted successful

### Get note of the ticket

URL

`
GET /note/:ticketId
`

#### Request Body

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `ticketId` | `int` | ticket id |


#### Success

Response

`200` get note of ticket ${ticketId} successful

in the data there is an array of object with properties below:
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `int` | note id|
| `title` | `string` | note title|
| `content` | `string` | note content |
| `ticket_id` | `string` | ticket id |

Example

```
{
    id: 20,
    title: "The best movie ever!" 
    content: "This movie deserve an oscar, yes, the movie I'm talking about is เสือเผ่น๑",
    ticket_id: 61
}
```

