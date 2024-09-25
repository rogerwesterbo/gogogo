package interfacemodels

type User interface {
	GetId() string

	GetName() string
	SetName(name string)

	GetEmail() string
	SetEmail(email string)

	GetApiKey() string

	GetRole() string
	SetRole(role string)

	IsValid() bool
}
