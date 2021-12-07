package main

import (
	"log"

	tea "github.com/charmbracelet/bubbletea"
)

func main() {
	p := tea.NewProgram(initialModel())
	if err := p.Start(); err != nil {
		log.Fatalf(err.Error())
	}
}
