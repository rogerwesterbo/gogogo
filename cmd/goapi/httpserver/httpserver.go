// Package httpserver provides an HTTP server implementation for the API.
//
// This package imports the necessary dependencies and sets up the HTTP server
// with the required routes and middleware.
//
// Example usage:
//
//	import "github.com/rogerwesterbo/gogogo/cmd/goapi/httpserver"
//
//	func main() {
//	  server := httpserver.NewServer()
//	  server.Start()
//	}
package httpserver

import (
	"fmt"
	"net/http"
	"time"

	"github.com/NorskHelsenett/ror/pkg/rlog"
	"github.com/gorilla/mux"
	"github.com/rogerwesterbo/gogogo/cmd/goapi/consts"
	"github.com/rogerwesterbo/gogogo/cmd/goapi/middlewares"
	"github.com/rogerwesterbo/gogogo/cmd/goapi/routes"
	"github.com/spf13/viper"
)

func Start() {
	router := mux.NewRouter()
	routes.SetupRoutes(router)

	host := "localhost"
	if viper.GetBool(consts.ENV_DEVELOPMENT) {
		rlog.Info("Running in development mode")
	} else {
		rlog.Info("Running in production mode")
		host = ""
	}

	port := "8888"
	url := fmt.Sprintf("%s:%s", host, port)
	server := &http.Server{
		Handler:      middlewares.CorsMiddleware(router),
		Addr:         url,
		ReadTimeout:  20 * time.Millisecond,
		WriteTimeout: 20 * time.Millisecond,
	}
	rlog.Info(fmt.Sprintf("Starting server on port localhost:%s", port))
	rlog.Fatal("Http server stopped", server.ListenAndServe())
}
