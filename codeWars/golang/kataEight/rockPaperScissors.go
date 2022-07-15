package kata

var m = map[string]string{"rock": "paper", "paper": "scissors", "scissors": "rock"}

func Rps(p1, p2 string) string {
	if p1 == p2 {
		return "Draw!"
	}
	if m[p1] == p2 {
		return "Player 2 won!"
	}
	return "Player 1 won!"
}
