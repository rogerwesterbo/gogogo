package settings

import "github.com/spf13/viper"

func Init() {
	// Initialize the settings
	viper.AutomaticEnv()
}
