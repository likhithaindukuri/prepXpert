package models

import "gorm.io/gorm"

type MockTest struct {
    gorm.Model
    UserID uint
    Score  int
    Date   string
}
