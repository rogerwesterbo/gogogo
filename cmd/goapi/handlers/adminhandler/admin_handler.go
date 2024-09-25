package adminhandler

import (
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
)

func DeleteUser(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	email := vars["email"]

	_, _ = fmt.Fprintf(w, "Delete user with email: %s", email)
}
