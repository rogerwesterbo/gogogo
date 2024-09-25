FROM ncr.sky.nhn.no/dockerhub/library/golang:latest AS builder
WORKDIR /app
COPY . .
RUN go get ./...
RUN CGO_ENABLED=0 go build -o gogogo -ldflags '-w -extldflags "-static"' cmd/api/main.go

FROM ncr.sky.nhn.no/dockerhub/library/golang:latest
COPY --from=builder /app/gogogo /bin/gogogo
ENTRYPOINT ["/bin/gogogo"]