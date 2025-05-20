# User Registration API Documentation

## Endpoint

`POST /users/register`

## Description

This endpoint allows a new user to register by providing their full name, email, and password. On successful registration, the endpoint returns a JWT authentication token and the created user object.

## Request Body

Send a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourPassword123"
}
```

### Field Requirements

- `fullname.firstname` (string, required): Minimum 3 characters.
- `fullname.lastname` (string, optional): Minimum 3 characters if provided.
- `email` (string, required): Must be a valid email address, minimum 5 characters.
- `password` (string, required): Minimum 6 characters.

## Responses

### Success

- **Status Code:** `201 Created`
- **Body:**
    ```json
    {
      "token": "jwt_token_here",
      "user": {
        "_id": "user_id",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com",
        "socketId": null
      }
    }
    ```

### Validation Error

- **Status Code:** `400 Bad Request`
- **Body:**
    ```json
    {
      "errors": [
        {
          "msg": "First name must be at least 3 character long",
          "param": "fullname.firstname",
          "location": "body"
        }
        // ...other errors
      ]
    }
    ```

### Other Errors

- **Status Code:** `500 Internal Server Error`
- **Body:**
    ```json
    {
      "error": "Error message"
    }
    ```

## Example Request

```bash
curl -X POST http://localhost:3000/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": { "firstname": "John", "lastname": "Doe" },
    "email": "john.doe@example.com",
    "password": "yourPassword123"
  }'
```