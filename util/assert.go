package util

import (
	"fmt"
	"reflect"
)

func Assert(fn interface{}, args []interface{}, expected interface{}) {
	fnVal := reflect.ValueOf(fn)
	in := make([]reflect.Value, len(args))

	for i, arg := range args {
		in[i] = reflect.ValueOf(arg)
	}

	res := fnVal.Call(in)

	if !reflect.DeepEqual(res[0].Interface(), expected) {
		fmt.Printf("\033[41m\033[30m FAIL \033[0m: expected %v, got %v\n", expected, res[0].Interface())
	} else {
		fmt.Printf("\033[42m\033[30m PASS \033[0m: expected %v, got %v\n", expected, res[0].Interface())
	}
}
