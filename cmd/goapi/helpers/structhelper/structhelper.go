package structhelper

import (
	"encoding/json"
	"fmt"

	"github.com/NorskHelsenett/ror/pkg/rlog"
)

func PrettyprintStruct(obj interface{}) {
	empJSON, err := json.MarshalIndent(obj, "", "  ")
	if err != nil {
		rlog.Fatal("%v", err)
	}
	_, err = fmt.Printf("MarshalIndent funnction output: \n%s\n", string(empJSON))
	if err != nil {
		panic(err)
	}
}
