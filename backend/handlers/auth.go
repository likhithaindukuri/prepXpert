package handlers

import (
	"encoding/json"
	"net/http"
	"time"

	"prepXpert/models"
	"prepXpert/db"
	"github.com/golang-jwt/jwt"
	"golang.org/x/crypto/bcrypt"
)

var jwtKey = []byte("secret_key")

type Credentials struct {
	Name     string `json:"name,omitempty"`
	Email    string `json:"email"`
	Password string `json:"password"`
}

type Claims struct {
	Email string `json:"email"`
	jwt.StandardClaims
}

func respondWithError(w http.ResponseWriter, code int, message string) {
	w.WriteHeader(code)
	json.NewEncoder(w).Encode(map[string]string{"error": message})
}

func Register(w http.ResponseWriter, r *http.Request) {
	var creds Credentials
	err := json.NewDecoder(r.Body).Decode(&creds)
	if err != nil {
		respondWithError(w, http.StatusBadRequest, "Invalid request payload")
		return
	}

	var exists bool
	err = db.DB.QueryRow("SELECT EXISTS(SELECT 1 FROM users WHERE email=$1)", creds.Email).Scan(&exists)
	if err != nil {
		respondWithError(w, http.StatusInternalServerError, "Database error")
		return
	}
	if exists {
		respondWithError(w, http.StatusBadRequest, "Email already registered")
		return
	}

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(creds.Password), bcrypt.DefaultCost)
	if err != nil {
		respondWithError(w, http.StatusInternalServerError, "Password hashing error")
		return
	}

	_, err = db.DB.Exec("INSERT INTO users (name, email, password) VALUES ($1, $2, $3)",
		creds.Name, creds.Email, string(hashedPassword))
	if err != nil {
		respondWithError(w, http.StatusInternalServerError, "Failed to store user")
		return
	}

	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(map[string]string{"message": "User registered successfully"})
}

func Login(w http.ResponseWriter, r *http.Request) {
	var creds Credentials
	err := json.NewDecoder(r.Body).Decode(&creds)
	if err != nil {
		respondWithError(w, http.StatusBadRequest, "Invalid request payload")
		return
	}

	var user models.User
	err = db.DB.QueryRow("SELECT id, name, email, password FROM users WHERE email=$1", creds.Email).Scan(
		&user.ID, &user.Name, &user.Email, &user.Password)
	if err != nil {
		respondWithError(w, http.StatusUnauthorized, "Invalid email or password")
		return
	}

	err = bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(creds.Password))
	if err != nil {
		respondWithError(w, http.StatusUnauthorized, "Invalid email or password")
		return
	}

	expirationTime := time.Now().Add(24 * time.Hour)
	claims := &Claims{
		Email: creds.Email,
		StandardClaims: jwt.StandardClaims{
			ExpiresAt: expirationTime.Unix(),
			Subject:   creds.Email,
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	tokenString, err := token.SignedString(jwtKey)
	if err != nil {
		respondWithError(w, http.StatusInternalServerError, "Token generation failed")
		return
	}

	json.NewEncoder(w).Encode(map[string]string{"token": tokenString})
}

func Profile(w http.ResponseWriter, r *http.Request) {
	email, ok := r.Context().Value("email").(string)
	if !ok || email == "" {
		respondWithError(w, http.StatusUnauthorized, "Unauthorized")
		return
	}

	var user models.User
	err := db.DB.QueryRow("SELECT name, email FROM users WHERE email=$1", email).Scan(&user.Name, &user.Email)
	if err != nil {
		respondWithError(w, http.StatusNotFound, "User not found")
		return
	}

	response := map[string]string{
		"name":  user.Name,
		"email": user.Email,
	}
	json.NewEncoder(w).Encode(response)
}
