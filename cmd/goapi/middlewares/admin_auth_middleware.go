package middlewares

import (
	"context"
	"errors"
	"net/http"

	"github.com/rogerwesterbo/gogogo/cmd/goapi/consts"
	"github.com/rogerwesterbo/gogogo/cmd/goapi/models"
	"github.com/rogerwesterbo/gogogo/cmd/goapi/services/userservice"
	"github.com/spf13/viper"
)

func AdminAuthMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		ctx := r.Context()
		apikey := r.Header.Get("X-API-KEY")

		var request *http.Request
		var err error

		if apikey == viper.GetString("ADMIN_API_KEY") {
			adminUser := models.User{
				Name:  "Administrator",
				Email: "admin@system.io",
				Role:  consts.UserRoleAdmin,
			}
			adminContext := context.WithValue(ctx, consts.ContextUserKey, adminUser)
			request = r.WithContext(adminContext)
			next.ServeHTTP(w, request)
		} else {
			request, err = checkUser(ctx, apikey, r)
			if err != nil {
				http.Error(w, "Forbidden", http.StatusForbidden)
				return
			}
			next.ServeHTTP(w, request)
		}
	})
}

func checkUser(ctx context.Context, apikey string, r *http.Request) (*http.Request, error) {
	user, err := userservice.GetUserByApiKey(ctx, apikey)
	if err != nil {
		return nil, errors.New("error getting user")
	}

	if user == nil {
		return nil, errors.New("user not found")
	}

	newContext := context.WithValue(r.Context(), consts.ContextUserKey, user)
	request := r.WithContext(newContext)
	return request, nil
}
