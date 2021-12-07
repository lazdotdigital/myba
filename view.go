package main

import (
	"fmt"
	"strings"
)

const width, height = 25, 25

func (m model) View() string {
	if m.Victor > 0 {
		return fmt.Sprintf(
			"Victor: player %v. Press space to restart.", m.Victor,
		)
	}
	s := fmt.Sprintf("Last move: player %v.\n", m.LastPlayer)
	for i := 0; i < height; i++ {
		for j := 0; j < width; j++ {
			if j == m.PlayerOne.X && i == m.PlayerOne.Y {
				s += "1"
			} else if j == m.PlayerTwo.X && i == m.PlayerTwo.Y {
				s += "2"
			} else {
				s += " "
			}
		}
		s += "|\n"
	}
	s += strings.Repeat("-", width)
	return s
}
