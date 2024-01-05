package util

func Uniq(slice []int) []int {
	seen := make(map[int]struct{}, len(slice))
	result := []int{}
	for _, value := range slice {
		if _, ok := seen[value]; !ok {
			seen[value] = struct{}{}
			result = append(result, value)
		}
	}
	return result
}
