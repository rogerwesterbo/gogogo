package testhandler

import (
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
)

// Handler function to extract URL parameters using Gorilla Mux
func GetOne(w http.ResponseWriter, r *http.Request) {
	// Extract URL parameters
	vars := mux.Vars(r)
	id := vars["id"]

	_, _ = fmt.Fprintf(w, "URL Parameter: %s", id)
}

func GetOneAbitDifferent(w http.ResponseWriter, r *http.Request) {
	// Extract query parameters
	id := r.URL.Query().Get("id")

	_, _ = fmt.Fprintf(w, "Query parameter: %s", id)
}

func GetOneAndTwoParams(w http.ResponseWriter, r *http.Request) {
	// Extract query parameters
	vars := mux.Vars(r)
	param1 := vars["param1"]
	param2 := vars["param2"]

	_, _ = fmt.Fprintf(w, "Query parameter 1: '%s', parameter 2: '%s'", param1, param2)
}

func GetOneAndTwoParams2(w http.ResponseWriter, r *http.Request) {
	// Extract query parameters
	param1 := r.URL.Query().Get("param1")
	param2 := r.URL.Query().Get("param2")

	_, _ = fmt.Fprintf(w, "Query parameter 1: '%s', parameter 2: '%s'", param1, param2)
}
