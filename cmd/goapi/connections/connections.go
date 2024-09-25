package connections

import (
	"github.com/rogerwesterbo/gogogo/cmd/goapi/databases/redisclient"
	"github.com/spf13/viper"
)

var RedisClient *redisclient.RedisClientImpl

func InitConnections() {
	// Initialize the connections

	RedisClient = redisclient.NewRedisClient(viper.GetString("REDIS_URL"), viper.GetString("REDIS_PASSWORD"), 0)
}
