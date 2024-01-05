package util

func OmitInt(item int, from []int) []int {
	var s []int

	for _, v := range from {
		if item != v {
			s = append(s, v)
		}
	}

	return s
}
