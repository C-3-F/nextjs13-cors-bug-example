# NextJS13 AppRouter Cors Bug

This is a simple example trying to expose Api Route Handlers to Cross-Origin requests and a bug that I found.

---

## Getting Started

### Prerequisites

- NVM or [NodeJS v18.17.1](https://nodejs.org/en/download/)
- pnpm

### Installation

```bash
#FROM: /

pnpm install
```

### NextJS Server

```bash
#FROM: /

pnpm dev
```

### Client-Side App Server

```bash
#FROM: /

pnpm client
```

---
## Bug Description

In trying to configure CORS in my application, I came across a bug in one of my endpoints. I have CORS headers set globally in my `next.config.js`. My original route handler was similar to `works/route.ts`. It contained only a POST method and even though I had global headers set, they wouldn't apply to the POST. I had read online on forums that Next.js automatically handled OPTIONS / preflight requests to get CORS permissions, and so I was confused on why this wasn't working. After finding another repository online, I played around and discovered that if I had a GET method, it magically started working.


## Bug Replication

Start both the client and server by using the above commands.

In the request payload box, type some sample JSON. The requests will just take that request and return it.

The 'works' box will return the payload with a 200.

The 'doesntwork' box will fail the request with a CORS error.