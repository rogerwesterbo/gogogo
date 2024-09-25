package dbs

import "github.com/rogerwesterbo/gogogo/cmd/goapi/interfaces/interfacemodels"

type UserRepository interface {
	Connect() error
	Disconnect() error
	IsConnected() bool

	GetUserById(id int) (interfacemodels.User, error)
}
