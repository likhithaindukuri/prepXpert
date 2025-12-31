package db

import (
	"database/sql"
	"log"
	"os"

	_ "github.com/lib/pq"
)

var DB *sql.DB

func Init() {
	var err error
	var connStr string

	// First, try to use DATABASE_URL (provided by Render when database is linked)
	databaseURL := os.Getenv("DATABASE_URL")

	// If DB_HOST looks like a full URL, use it as DATABASE_URL
	if databaseURL == "" {
		dbHost := os.Getenv("DB_HOST")
		if dbHost != "" && len(dbHost) > 11 && (dbHost[:7] == "postgres" || dbHost[:11] == "postgresql:") {
			databaseURL = dbHost
			log.Println("Detected full database URL in DB_HOST, using it as DATABASE_URL")
		}
	}

	if databaseURL != "" {
		connStr = databaseURL
		log.Println("Using DATABASE_URL for connection")
	} else {
		// Fall back to individual environment variables
		dbUser := os.Getenv("DB_USER")
		dbPassword := os.Getenv("DB_PASSWORD")
		dbName := os.Getenv("DB_NAME")
		dbHost := os.Getenv("DB_HOST")
		dbPort := os.Getenv("DB_PORT")
		sslmode := os.Getenv("DB_SSLMODE")

		if dbUser == "" {
			dbUser = "postgres"
		}
		if dbPassword == "" {
			dbPassword = "2004@likhi"
		}
		if dbName == "" {
			dbName = "prepxpert1"
		}
		if dbHost == "" {
			dbHost = "localhost"
		}
		if dbPort == "" {
			dbPort = "5432"
		}
		if sslmode == "" {
			sslmode = "require"
		}

		connStr = "user=" + dbUser + " password=" + dbPassword + " dbname=" + dbName + " host=" + dbHost + " port=" + dbPort + " sslmode=" + sslmode
		log.Printf("Connecting to database at host: %s, port: %s, dbname: %s", dbHost, dbPort, dbName)
	}

	DB, err = sql.Open("postgres", connStr)
	if err != nil {
		log.Fatal("Error opening database connection:", err)
	}

	err = DB.Ping()
	if err != nil {
		log.Fatal("Cannot reach database:", err)
	}

	log.Println("Database connected successfully.")
}
