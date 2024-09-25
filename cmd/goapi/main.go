package main

import (
	"fmt"
	"os"
	"os/signal"
	"syscall"

	"github.com/NorskHelsenett/ror/pkg/rlog"
	"github.com/rogerwesterbo/gogogo/cmd/goapi/connections"
	"github.com/rogerwesterbo/gogogo/cmd/goapi/httpserver"
	"github.com/rogerwesterbo/gogogo/cmd/goapi/settings"

	"go.uber.org/automaxprocs/maxprocs"
)

func main() {
	_, _ = maxprocs.Set(maxprocs.Logger(rlog.Infof))
	cancelChan := make(chan os.Signal, 1)
	stop := make(chan struct{})
	// catch SIGETRM or SIGINTERRUPT
	signal.Notify(cancelChan, syscall.SIGTERM, syscall.SIGINT)

	settings.Init()
	connections.InitConnections()

	go func() {
		httpserver.Start()
		sig := <-cancelChan
		_, _ = fmt.Println()
		_, _ = fmt.Println(sig)
		stop <- struct{}{}
	}()

	sig := <-cancelChan
	rlog.Info("Caught signal", rlog.Any("singal", sig))
}
