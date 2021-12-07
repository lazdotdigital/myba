package main

import (
	"time"

	tea "github.com/charmbracelet/bubbletea"
)

type model struct {
	PlayerOne  player `json:"playerOne"`
	PlayerTwo  player `json:"playerTwo"`
	LastPlayer int    `json:"lastPlayer"`
	Victor     int    `json:"victor"`
}

func initialModel() model {
	return model{
		PlayerTwo: player{X: 15, Y: 15},
	}
}

type tickMsg time.Time

func (m model) Init() tea.Cmd {
	return tick()
}
