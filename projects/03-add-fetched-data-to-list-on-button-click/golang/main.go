package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	chi "github.com/go-chi/chi/v5"
	chiMiddleware "github.com/go-chi/chi/v5/middleware"
	cors "github.com/go-chi/cors"
)

var middleware1 = chiMiddleware.Logger
var middleware2 = cors.Handler(cors.Options{
	AllowedOrigins: []string{"https://*", "http://*"},
})

const url = "localhost:3000"

func getFileContentsAsString(filePath string) (string, error) {
	bytes, err := os.ReadFile(filePath)
	if err != nil {
		return "", err
	}
	str := string(bytes)
	return str, nil
}

func main() {
	fmt.Println(`Server started on: http://` + url)
	r := chi.NewRouter()
	r.Use(middleware1)
	r.Use(middleware2)

	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		indexString, err := getFileContentsAsString(`./templates/index.html`)
		if err != nil {
			panic(err)
		}

		w.Write([]byte(indexString))
	})
	r.Get("/script.js", func(w http.ResponseWriter, r *http.Request) {
		scriptString, err := getFileContentsAsString(`./templates/script.js`)
		if err != nil {
			panic(err)
		}

		w.Write([]byte(scriptString))
	})
	r.Get("/style.css", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Add("Content-Type", "text/css")
		styleString, err := getFileContentsAsString(`./templates/style.css`)
		if err != nil {
			panic(err)
		}

		w.Write([]byte(styleString))
	})
	r.Get("/assets/favicon.svg", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Add("Content-Type", "image/svg+xml")
		styleString, err := getFileContentsAsString(`./assets/favicon.svg`)
		if err != nil {
			panic(err)
		}

		w.Write([]byte(styleString))
	})

	log.Fatal(http.ListenAndServe(url, r))
}
