package main

import (
	"codenplay/util"
)

func main() {
	util.Assert(findJudge, []interface{}{2, [][]int{{1, 2}}}, 2)
	util.Assert(findJudge, []interface{}{3, [][]int{{1, 3}, {2, 3}}}, 3)
	util.Assert(findJudge, []interface{}{4, [][]int{{1, 3}, {1, 4}, {2, 3}, {2, 4}, {4, 3}}}, 3)
	util.Assert(findJudge, []interface{}{3, [][]int{{1, 3}, {2, 3}, {3, 1}}}, -1)
	util.Assert(findJudge, []interface{}{3, [][]int{{1, 2}, {2, 3}}}, -1)
	util.Assert(findJudge, []interface{}{4, [][]int{{1, 3}, {1, 4}, {2, 3}}}, -1)
	util.Assert(findJudge, []interface{}{1, [][]int{}}, 1)
}

// correct solution but very low performance. runtime-wise 28th percentile, memory-wise 22 percentile
func findJudge(n int, trust [][]int) int {
	judges := make(map[int][]int)
	followers := make(map[int]struct{}, 0)
	if len(trust) == 0 && n == 1 {
		return 1
	} else if len(trust) == 0 && n == 0 {
		return -1
	} else if len(trust) == 0 && n > 1 {
		return -1
	} else {

		for _, v := range trust {
			if v[1] > n && v[0] > n {
				continue
			}
			if _, ok := followers[v[0]]; !ok {
				followers[v[0]] = struct{}{}
			}
			if _, ok := followers[v[1]]; !ok {
				if _, ok := judges[v[1]]; !ok {
					judges[v[1]] = []int{v[0]}
				} else {
					judges[v[1]] = append(judges[v[1]], v[0])
				}
			}
		}
		for key := range followers {
			delete(judges, key)
		}
		if len(judges) == 0 || len(judges) > 1 {
			return -1
		}
		for k := range judges {
			if len(judges[k]) == n-1 {
				return k
			}
		}

		return -1
	}
}

// this is a wrong solution
func FindJudge2(n int, trust [][]int) int {
	if len(trust) == 0 && n == 1 {
		return 1
	} else if len(trust) == 0 && n == 0 {
		return -1
	} else if len(trust) == 0 && n > 1 {
		return -1
	} else {
		notAJudge := make([]int, 0)
		mayBeAJudge := make([]int, 0)

		tLength := len(trust)

		for i := 0; i < tLength; i++ {
			notAJudge = append(notAJudge, trust[i][0])
			mayBeAJudge = append(mayBeAJudge, trust[i][1])
		}

		mayBeAJudge = util.Uniq(mayBeAJudge)
		notAJudge = util.Uniq(notAJudge)

		var c []int
		for _, v := range mayBeAJudge {
			if v <= n {
				c = append(c, v)
			}
		}
		var t []int
		for _, v := range notAJudge {
			if v <= n {
				t = append(t, v)
			}
		}

		for _, v := range t {
			c = util.OmitInt(v, c)
		}
		if len(c) == 0 {
			return -1
		}
		answer := c[0]
		for i := 1; i < n; i++ {
			if i != answer {

				pity := false
				for _, v := range trust {
					if v[0] == i && v[1] == answer {
						pity = true
					}
				}
				if !pity {
					answer = -1
					break
				}

			}
		}
		return answer
	}

}
