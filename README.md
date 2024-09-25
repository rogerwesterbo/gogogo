# Gogogo

Test project for Golang

## Prerequisites

- Docker engine / Docker Desktop (or podman)
- Golang sdk (https://go.dev)

Optional:

- VS Code (for debugging)

## Get started

## Docker Compose

```bash
docker compose up
```

- Open browser to http://localhost:8889
- Or run curl/wget to api to host http://localhost:8888

## Debug:

- Git clone this repo
- Open the "repo" in VS Code
- Press F5 for debugging
- Http server will be available on http://localhost:8888

## Clients

- Curl
- Wget
- Postman
- Chrome/Edge/Firefox

## Test urls:

- http://localhost:8888/parameter/test
- http://localhost:8888/parameter?id=test
- http://localhost:8888/parameter/?id=123
- http://localhost:8888/multiple/1/more/2
- http://localhost:8888/multiple?param1=1&param2=2

### with admin apikey

`curl -X DELETE -H "X-API-KEY: a-valid-token-string" http://localhost:8888/admin/delete/123`
