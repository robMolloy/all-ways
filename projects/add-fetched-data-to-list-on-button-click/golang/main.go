package main

import (
	"fmt"
	"log"
	"net/http"

	chi "github.com/go-chi/chi/v5"
	chiMiddleware "github.com/go-chi/chi/v5/middleware"
	cors "github.com/go-chi/cors"
)

var middleware1 = chiMiddleware.Logger
var middleware2 = cors.Handler(cors.Options{
	AllowedOrigins: []string{"https://*", "http://*"},
})

func main() {
	fmt.Println(`Server started`)
	r := chi.NewRouter()
	r.Use(middleware1)
	r.Use(middleware2)

	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte(`hello world`))
	})

	log.Fatal(http.ListenAndServe("localhost:3000", r))
}
