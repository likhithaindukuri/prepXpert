package questions

import (
	"encoding/json"
	"net/http"
)

type Question struct {
	ID       int    `json:"id"`
	Question string `json:"question"`
}

var questions = []Question{
	{ID: 1, Question: "What is 2 + 2?"},
	{ID: 2, Question: "Capital of India?"},
	{ID: 3, Question: "What is a loop in C?"},
}

func GetQuestions(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(map[string][]Question{"questions": questions})
}

func AddQuestion(w http.ResponseWriter, r *http.Request) {
	var q Question
	err := json.NewDecoder(r.Body).Decode(&q)
	if err != nil || q.Question == "" {
		http.Error(w, "Invalid question", http.StatusBadRequest)
		return
	}
	q.ID = len(questions) + 1
	questions = append(questions, q)

	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(map[string]string{"message": "Question added"})
}
