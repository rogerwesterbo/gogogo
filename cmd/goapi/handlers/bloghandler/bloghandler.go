package bloghandler

import (
	"encoding/json"
	"net/http"

	"github.com/NorskHelsenett/ror/pkg/rlog"
)

// Blog represents a blog post.
type Blog struct {
	ID    int    `json:"id"`
	Title string `json:"title"`
	Body  string `json:"body"`
}

// GetAll returns all blog posts.
func GetAll(w http.ResponseWriter, r *http.Request) {

	blogs := []Blog{
		{ID: 1, Title: "First blog post", Body: "This is the first blog post."},
		{ID: 2, Title: "Second blog post", Body: "This is the second blog post."},
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	if err := json.NewEncoder(w).Encode(blogs); err != nil {
		rlog.Error("Failed to encode response", err)
		http.Error(w, "Failed to encode response", http.StatusInternalServerError)
	}
}

// GetOne returns a single blog post.
func GetOne(w http.ResponseWriter, r *http.Request) {
	blog := Blog{ID: 1, Title: "First blog post", Body: "This is the first blog post."}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	if err := json.NewEncoder(w).Encode(blog); err != nil {
		rlog.Error("Failed to encode response", err)
		http.Error(w, "Failed to encode response", http.StatusInternalServerError)
	}
}
