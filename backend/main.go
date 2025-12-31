package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"prepXpert/db"
	"prepXpert/handlers"
	"prepXpert/middleware"
	"prepXpert/questions"

	"github.com/gorilla/mux"
	"github.com/rs/cors"
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

	c := cors.New(cors.Options{
		AllowedOrigins:   []string{os.Getenv("FRONTEND_URL"), "http://localhost:3000"},
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"*"},
		AllowCredentials: true,
	})
	handler := c.Handler(r)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	fmt.Println("Server running at http://localhost:" + port)
	log.Fatal(http.ListenAndServe(":"+port, handler))
}
