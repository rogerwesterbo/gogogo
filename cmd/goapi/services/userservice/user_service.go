package userservice

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"

	"github.com/NorskHelsenett/ror/pkg/rlog"
	"github.com/google/uuid"
	"github.com/rogerwesterbo/gogogo/cmd/goapi/connections"
	"github.com/rogerwesterbo/gogogo/cmd/goapi/consts"
	"github.com/rogerwesterbo/gogogo/cmd/goapi/helpers/structhelper"
	"github.com/rogerwesterbo/gogogo/cmd/goapi/interfaces/interfacemodels"
	"github.com/rogerwesterbo/gogogo/cmd/goapi/models"
)

func GetUserByApiKey(ctx context.Context, apiKey string) (interfacemodels.User, error) {
	redis := connections.RedisClient
	value, err := redis.Keys(fmt.Sprintf("%s:*", consts.RedisKeyUser))
	if err != nil {
		rlog.Errorc(ctx, "error getting keys", err)
		return nil, err
	}

	for _, key := range value {
		userByte, err := redis.Get(key)
		if err != nil {
			rlog.Errorc(ctx, "error getting user", err)
			continue
		}

		var user models.User
		err = json.Unmarshal([]byte(userByte), &user)
		if err != nil {
			rlog.Errorc(ctx, "error unmarshalling user", err)
			continue
		}

		if user.GetApiKey() == apiKey {
			return &user, nil
		}
	}

	return nil, errors.New("user not found")
}

func GetAll(ctx context.Context) ([]interfacemodels.User, error) {
	redis := connections.RedisClient
	keys, err := redis.Keys(fmt.Sprintf("%s:*", consts.RedisKeyUser))
	if err != nil {
		rlog.Errorc(ctx, "error getting keys", err)
		return nil, err
	}

	var users []interfacemodels.User
	for _, key := range keys {
		userByte, err := redis.Get(key)
		if err != nil {
			rlog.Errorc(ctx, "error getting user", err)
			continue
		}

		var user models.User
		err = json.Unmarshal([]byte(userByte), &user)
		if err != nil {
			rlog.Errorc(ctx, "error unmarshalling user", err)
			continue
		}

		users = append(users, &user)
	}

	return users, nil
}

func Create(ctx context.Context, user interfacemodels.User) error {
	redis := connections.RedisClient
	if user.GetEmail() == "" {
		return errors.New("email is required")
	}

	if user.GetName() == "" {
		return errors.New("name is required")
	}

	uuid, err := uuid.NewRandom()
	if err != nil {
		rlog.Errorc(ctx, "error generating uuid", err)
		return err
	}

	userInput := models.NewUser(uuid.String(), user.GetName(), user.GetEmail(), user.GetApiKey(), user.GetRole())
	structhelper.PrettyprintStruct(userInput)
	userByte, err := json.Marshal(userInput)
	if err != nil {
		rlog.Errorc(ctx, "error marshalling user", err)
		return err
	}

	key := fmt.Sprintf("%s:%s", consts.RedisKeyUser, userInput.GetEmail())
	err = redis.Set(key, string(userByte), 0)
	if err != nil {
		rlog.Errorc(ctx, "error setting user", err)
		return err
	}

	return nil
}

func Delete(ctx context.Context, email string) error {
	redis := connections.RedisClient
	key := fmt.Sprintf("%s:%s", consts.RedisKeyUser, email)

	_, err := redis.Exists(key)
	if err != nil {
		rlog.Errorc(ctx, "error checking if key exists", err)
		return err
	}

	_, err = redis.Del(key)
	if err != nil {
		rlog.Errorc(ctx, "error deleting key", err)
		return err
	}

	return nil
}
