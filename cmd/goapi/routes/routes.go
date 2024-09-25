package routes

import (
	"github.com/gorilla/mux"
	"github.com/rogerwesterbo/gogogo/cmd/goapi/handlers/adminhandler/userhandler"
	"github.com/rogerwesterbo/gogogo/cmd/goapi/handlers/bloghandler"
	"github.com/rogerwesterbo/gogogo/cmd/goapi/handlers/testhandler"
	"github.com/rogerwesterbo/gogogo/cmd/goapi/middlewares"
)

func SetupRoutes(r *mux.Router) {
	r.Use(middlewares.LoggingMiddleware)

	testRoute := r.PathPrefix("/parameter").Subrouter()
	testRoute.HandleFunc("/{id}", testhandler.GetOne).Methods("GET")          // example: curl -X GET http://localhost:8888/parameter/123
	testRoute.HandleFunc("", testhandler.GetOneAbitDifferent).Methods("GET")  // example: curl -X GET http://localhost:8888/parameter?id=123
	testRoute.HandleFunc("/", testhandler.GetOneAbitDifferent).Methods("GET") // example: curl -X GET http://localhost:8888/parameter/?id=123

	multipleRoute := r.PathPrefix("/multiple").Subrouter()
	multipleRoute.HandleFunc("/{param1}/more/{param2}", testhandler.GetOneAndTwoParams) // example: curl -X GET http://localhost:8888/multiple/1/more/2
	multipleRoute.HandleFunc("", testhandler.GetOneAndTwoParams2).Methods("GET")        // example: curl -X GET http://localhost:8888/multiple?param1=1&param2=2

	blogsRoute := r.PathPrefix("/blogs").Subrouter()
	blogsRoute.HandleFunc("", bloghandler.GetAll).Methods("GET")

	adminRoute := r.PathPrefix("/admin").Subrouter()

	adminRoute.Use(middlewares.AdminAuthMiddleware)

	adminUserRoute := adminRoute.PathPrefix("/users").Subrouter()
	adminUserRoute.HandleFunc("", userhandler.GetAllUser).Methods("GET")            // example: curl -X DELETE -H "X-API-KEY: a-valid-token-string" http://localhost:8888/admin/delete/123
	adminUserRoute.HandleFunc("/{email}", userhandler.DeleteUser).Methods("DELETE") // example: curl -X DELETE -H "X-API-KEY: a-valid-token-string" http://localhost:8888/admin/delete/123
	adminUserRoute.HandleFunc("", userhandler.Create).Methods("POST")               // example: curl -X POST -H "X-API-KEY:
}
