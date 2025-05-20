package models

import "gorm.io/gorm"

type Question struct {
    gorm.Model
    TopicID      uint
    QuestionText string `gorm:"not null"`
    Options      string `gorm:"type:text"` // JSON string of options
    Answer       string `gorm:"not null"`
    Explanation  string `gorm:"type:text"`
}
