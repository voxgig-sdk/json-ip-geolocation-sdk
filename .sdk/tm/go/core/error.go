package core

type JsonIpGeolocationError struct {
	IsJsonIpGeolocationError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewJsonIpGeolocationError(code string, msg string, ctx *Context) *JsonIpGeolocationError {
	return &JsonIpGeolocationError{
		IsJsonIpGeolocationError: true,
		Sdk:              "JsonIpGeolocation",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *JsonIpGeolocationError) Error() string {
	return e.Msg
}
