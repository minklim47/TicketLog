# TicketLog

TicketLog is the place where you collect all your movie tickets in form of electronic movie tickets with options for styles and notes of your choice. 

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


