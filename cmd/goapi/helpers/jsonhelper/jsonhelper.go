package jsonhelper

import (
	"bytes"
	"encoding/json"
	"fmt"
)

func PrettyPrintJson(jsonByte []byte) error {
	var prettyJson bytes.Buffer
	err := json.Indent(&prettyJson, jsonByte, "", "\t")
	if err != nil {
		return err
	}

	_, _ = fmt.Println(prettyJson.String())
	return nil
}
