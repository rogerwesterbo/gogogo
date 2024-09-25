package models

type User struct {
	Id     string `json:"id,omitempty"`
	Name   string `json:"name"`
	Email  string `json:"email"`
	ApiKey string `json:"apikey,omitempty"`
	Role   string `json:"role,omitempty"`
}

func NewUser(id, name, email, apikey, role string) User {
	return User{
		Id:     id,
		Name:   name,
		Email:  email,
		ApiKey: apikey,
		Role:   role,
	}
}

func (u User) GetId() string {
	return u.Id
}

func (u User) GetEmail() string {
	return u.Email
}

func (u User) SetEmail(email string) {
	u.Email = email
}

func (u User) GetName() string {
	return u.Name
}

func (u User) SetName(name string) {
	u.Name = name
}

func (u User) GetApiKey() string {
	return u.ApiKey
}

func (u User) GetRole() string {
	return u.Role
}

func (u User) SetRole(role string) {
	u.Role = role
}

func (u User) IsValid() bool {
	return u.Id != "" && u.Name != "" && u.Email != "" && u.ApiKey != "" && u.Role != ""
}
