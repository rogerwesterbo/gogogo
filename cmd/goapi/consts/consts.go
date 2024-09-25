package consts

type ContextKey string

const ContextUserKey ContextKey = "user"

var (
	UserRoleAdmin = "admin"
	UserRoleUser  = "user"

	RedisKeyUser = "users"

	ENV_DEVELOPMENT = "DEVELOPMENT"
)
