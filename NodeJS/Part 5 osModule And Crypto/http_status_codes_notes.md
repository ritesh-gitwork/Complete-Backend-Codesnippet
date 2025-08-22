# HTTP Status Codes Notes

HTTP status codes are standard response codes given by web servers when clients (like browsers or APIs) make requests.

---

## ✅ 1xx: Informational
- **100 Continue** → Server received the request headers, client can continue sending body.
- **101 Switching Protocols** → Server is switching protocols (e.g., HTTP → WebSocket).

---

## 🟢 2xx: Success
- **200 OK** → Request succeeded (GET, POST, PUT, DELETE all can return this).
- **201 Created** → A new resource has been successfully created (commonly after POST).
- **202 Accepted** → Request accepted but processing not completed.
- **204 No Content** → Request succeeded, but no data returned (useful in DELETE).

---

## 🟡 3xx: Redirection
- **301 Moved Permanently** → Resource moved to a new URL permanently.
- **302 Found** → Temporary redirection.
- **304 Not Modified** → Cached version can be used, no need to download again.

---

## 🔴 4xx: Client Errors
- **400 Bad Request** → Invalid request format or parameters.
- **401 Unauthorized** → Authentication required (login/token missing or invalid).
- **403 Forbidden** → User authenticated but doesn’t have permission.
- **404 Not Found** → Resource not found on the server.
- **409 Conflict** → Conflict with current state (e.g., duplicate data).
- **422 Unprocessable Entity** → Data valid format but semantically wrong (validation errors).

---

## ⚫ 5xx: Server Errors
- **500 Internal Server Error** → Generic server error.
- **502 Bad Gateway** → Invalid response from upstream server.
- **503 Service Unavailable** → Server temporarily overloaded or down.
- **504 Gateway Timeout** → Upstream server failed to respond in time.

---

## 🚀 Quick Reference Table

| Code | Meaning                  | Common Usage                |
|------|--------------------------|-----------------------------|
| 200  | OK                       | Successful GET/POST         |
| 201  | Created                  | New resource created        |
| 204  | No Content               | After DELETE request        |
| 400  | Bad Request              | Invalid request             |
| 401  | Unauthorized             | Missing/invalid auth        |
| 403  | Forbidden                | No permission               |
| 404  | Not Found                | Resource doesn’t exist      |
| 409  | Conflict                 | Duplicate or conflict       |
| 500  | Internal Server Error    | Server crashed              |
| 503  | Service Unavailable      | Server under maintenance    |

---

📌 **Pro Tip**:  
- 2xx → Everything is fine ✅  
- 3xx → Go somewhere else 🔄  
- 4xx → Your request has an issue ⚠️  
- 5xx → Server messed up 💥  
