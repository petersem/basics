# References

Assorted reference informatin

## Symantic Versioning

Uses 3 numbers, seperated by a period. e.g. 1.2.4

> Breaking changes . New features . Bug fixes

## Express

### Definitions

- Express JS is used to handle HTTP logic
- Express middleware is a function which runs between the request and response.
- Express-Validators validates routes according to business rules
- EJS is a templating engine for injecting data into View files

### Express Middleware

- Express.json(): (Built-in) Parses incoming requests with JSON payloads
- Express.urlencoded(): (Built-in) Parses incoming requests with URL-encoded payloads
- Express.static(): (Built-in) Serves static files
- Morgan: HTTP request logger
- Cors: Enables cross-origin resource sharing
- Helmet: Secdures express apps by setting HTTP headers

## HTTP Methods

| Method | Code | Purpose                |
| ------ | ---- | ---------------------- |
| GET    | 200  | Fetch data             |
| POST   | 201  | Create data            |
| PUT    | 200  | Update record          |
| PATCH  | 204  | Update partial record  |
| DELETE | 204  | Deleted record         |
| ERROR  | 400  | Bad request            |
| ERROR  | 500  | Signifies server error |

> ### Examples
>
> | Code | Implementation                                       |
> | ---  | ---                                                  |
> | 200  | Get record or record                                 |
> | 200  | Full record updated                                  |
> | 201  | Record added                                         |
> | 202  | Request received for processing, but not completed   |
> | 204  | Partial record update completed (No content returned)|
> | 204  | Record deleted (No content returned)                 |
> | 206  | Partial content                                      |
> | 300  | Redirect                                             |
> | 400  | Rejected API call - missing required header          |
> | 401  | Unauthorised request                                 |
> | 403  | Forbidden                                            |
> | 404  | Record not found                                     |
> | 408  | Request timeout                                      |
> | 409  | Rejected API call - Operation in progress            |
> | 422  | Rejected API call - Invalid header/data sent         |
> | 500  | Internal server error                                |
> | 503  | Service / Server unavailable (e.g maintenance)       |

## Model - View - Controller (MVC) Pattern

Can be server, client, or both.

**Model**
: Data that is required to populate a page or control (partial)

**View**
: The page, or partial page, which will display the information. (Often EJS)

**Controller**
: Needed to render model data to a view, or partial. Which handles any API calls for CRUD or to external sites, and for managing any dynamic functionality on the web page.

## API Terms

### Definition

- Enables communications between software systems
- Defines structured rules for integration

### Endpoint

- Represents specific API functionality path
- Unique URL for accessing resources

### HTTP API Methods

- Enable standardised CRUD operation handling
- Define action performed on resources

### Request

- Client sends structured data payload
- Includes headers, parameters, and body

### Response

- Server returns processed result data
- Contains status code, and payload

### Status Codes

- Indicate outcome of API request
- Help identify errors and success

### Authentication

- Verifies identity of requesting entity
- Uses token keys or credentials

### Parameters

- Transfers additional data within requests
- Support filtering, sorting, and pagination

### Headers

- Carry metadata about HTTP requests
- Specify content type and authorisation

### Authorisation

- Determines user access permission levels
- Enforces role-based access control (RBAC)

### Rate Limiting

- Restricts the number of allowed requests
- Prevents abuse and server overload

### API Key

- Unique identifier for client access
- Used for simple authentication mechanisms

### JSON

- Lightweight structured data exchange format
- Commonly used in REST APIs

### Webhook

- Sends automated event triggered callbacks to a URL
- Enables real-time system updates

### oAuth

- Secure delegated access authorisation framework
- Issues tokens for controlled access

[Return to Home](https://github.com/petersem/basics)