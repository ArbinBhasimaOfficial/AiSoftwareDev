package main

import (
	"fmt"
	"os"
)

const start = 50
const maxVal = 100

func zionPartOne(content []byte) int {
	current := start
	password := 0

	i := 0
	n := len(content)

	for i < n {
		// Skip whitespace, newlines (\n, \r), and spaces
		for i < n && (content[i] == '\r' || content[i] == '\n' || content[i] == ' ' || content[i] == '\t') {
			i++
		}
		if i >= n {
			break
		}

		// Read direction ('R' or 'L')
		direction := content[i]
		i++

		// Fast custom integer parsing directly from raw bytes
		value := 0
		for i < n && content[i] >= '0' && content[i] <= '9' {
			value = value*10 + int(content[i]-'0')
			i++
		}

		// Apply rotation
		switch direction {
		case 'R':
			current = (current + value) % maxVal
		case 'L':
			current = (current - value) % maxVal
			if current < 0 {
				current += maxVal
			}
		}

		if current == 0 {
			password++
		}
	}

	return password
}

func main() {
	content, err := os.ReadFile("../input.txt")
	if err != nil {
		fmt.Printf("Error reading file: %v\n", err)
		return
	}

	password := zionPartOne(content)
	fmt.Println(password)
}
