package main

import (
    "prepXpert-backend/config"
    "prepXpert-backend/models"
    "github.com/gin-gonic/gin"
)

func main() {
    config.ConnectDatabase()

    // Migrate DB Models
    config.DB.AutoMigrate(&models.User{}, &models.Topic{}, &models.Question{}, &models.MockTest{})

    r := gin.Default()
    r.GET("/", func(c *gin.Context) {
        c.JSON(200, gin.H{
            "message": "Welcome to prepXpert API 🚀",
        })
    })

    r.Run(":8080") // Start server on port 8080
}
