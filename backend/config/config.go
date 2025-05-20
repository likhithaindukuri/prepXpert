package config

import (
    "gorm.io/driver/postgres"
    "gorm.io/gorm"
    "log"
    "os"
    "github.com/joho/godotenv"
)

var DB *gorm.DB

func ConnectDatabase() {
    err := godotenv.Load()
    if err != nil {
        log.Fatal("❌ Error loading .env file")
    }

    dsn := "host=" + os.Getenv("DB_HOST") +
           " user=" + os.Getenv("DB_USER") +
           " password=" + os.Getenv("DB_PASSWORD") +
           " dbname=" + os.Getenv("DB_NAME") +
           " port=" + os.Getenv("DB_PORT") +
           " sslmode=disable"

    database, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
    if err != nil {
        log.Fatal("❌ Failed to connect to database:", err)
    } else {
        log.Println("✅ Successfully connected to the database!")
    }

    DB = database
}
