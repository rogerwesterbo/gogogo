package userhandler

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/rogerwesterbo/gogogo/cmd/goapi/models"
	"github.com/rogerwesterbo/gogogo/cmd/goapi/services/userservice"
)

func GetAllUser(w http.ResponseWriter, r *http.Request) {
	users, err := userservice.GetAll(r.Context())
	if err != nil {
		http.Error(w, "Error getting all users", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	err = json.NewEncoder(w).Encode(users)
	if err != nil {
		http.Error(w, "Error encoding users", http.StatusInternalServerError)
		return
	}
}

func Create(w http.ResponseWriter, r *http.Request) {
	if r.Body == nil {
		http.Error(w, "Please send a request body", http.StatusBadRequest)
		return
	}
	var user models.User

	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	err = userservice.Create(r.Context(), user)
	if err != nil {
		http.Error(w, "Error creating user", http.StatusInternalServerError)
		return
	}

	_, _ = fmt.Fprintf(w, "Create user with email: %s", user.Email)
}

func DeleteUser(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	email := vars["email"]

	err := userservice.Delete(r.Context(), email)
	if err != nil {
		http.Error(w, "Error deleting user", http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusOK)
	_, err = w.Write(nil)
	if err != nil {
		http.Error(w, "Error writing response", http.StatusInternalServerError)
	}
}
