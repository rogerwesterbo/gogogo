package redisclient

import (
	"time"

	"github.com/go-redis/redis"
)

// RedisClient is the interface for the Redis client
type RedisClient interface {
	Set(key string, value interface{}, expiration int) error
	Get(key string) (string, error)
}

// RedisClientImpl is the implementation of the RedisClient interface
type RedisClientImpl struct {
	client *redis.Client
}

// NewRedisClient creates a new RedisClientImpl
func NewRedisClient(addr string, password string, db int) *RedisClientImpl {
	return &RedisClientImpl{
		client: redis.NewClient(&redis.Options{
			Addr:     addr,
			Password: password,
			DB:       db,
		}),
	}
}

// Set sets a key-value pair in Redis
func (r *RedisClientImpl) Set(key string, value interface{}, expiration int) error {
	return r.client.Set(key, value, time.Duration(expiration)).Err()
}

// Get gets a value from Redis
func (r *RedisClientImpl) Get(key string) (string, error) {
	return r.client.Get(key).Result()
}

func (r *RedisClientImpl) Ping() (string, error) {
	return r.client.Ping().Result()
}

func (r *RedisClientImpl) Del(key string) (int64, error) {
	return r.client.Del(key).Result()
}

func (r *RedisClientImpl) Exists(key string) (int64, error) {
	return r.client.Exists(key).Result()
}

func (r *RedisClientImpl) Expire(key string, expiration time.Duration) (bool, error) {
	return r.client.Expire(key, expiration).Result()
}

func (r *RedisClientImpl) Keys(pattern string) ([]string, error) {
	return r.client.Keys(pattern).Result()
}

func (r *RedisClientImpl) Scan(cursor uint64, match string, count int64) ([]string, uint64, error) {
	return r.client.Scan(cursor, match, count).Result()
}
