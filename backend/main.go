package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/rs/cors"
	"prepXpert/handlers"
	"prepXpert/middleware"
	"prepXpert/questions"
	"prepXpert/db"
)

func main() {
	db.Init() // ← Connect to PostgreSQL

	r := mux.NewRouter()

	r.HandleFunc("/api", func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("Welcome to prepXpert API!"))
	}).Methods("GET")

	r.HandleFunc("/api/register", handlers.Register).Methods("POST")
	r.HandleFunc("/api/login", handlers.Login).Methods("POST")

	r.Handle("/api/profile", middleware.JwtAuthMiddleware(http.HandlerFunc(handlers.Profile))).Methods("GET")
	r.Handle("/api/questions", middleware.JwtAuthMiddleware(http.HandlerFunc(questions.GetQuestions))).Methods("GET")
	r.Handle("/api/questions/add", middleware.JwtAuthMiddleware(http.HandlerFunc(questions.AddQuestion))).Methods("POST")

	handler := cors.Default().Handler(r)
	fmt.Println("Server running at http://localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", handler))
}
