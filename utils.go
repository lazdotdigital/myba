package main

import (
	"encoding/json"
	"io/ioutil"
	"net/http"
	"os"
	"time"

	tea "github.com/charmbracelet/bubbletea"
)

func fetchModel(key string) model {
	res, err := http.Get(os.Args[1] + key)
	if err != nil {
		panic(err)
	}
	resJSON, err := ioutil.ReadAll(res.Body)
	if err != nil {
		panic(err)
	}
	var m model
	if err := json.Unmarshal(resJSON, &m); err != nil {
		panic(err)
	}
	return m
}

func tick() tea.Cmd {
	return tea.Tick(time.Duration(100*time.Millisecond), func(t time.Time) tea.Msg {
		return tickMsg(t)
	})
}
