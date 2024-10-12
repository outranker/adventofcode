import { assertEquals } from "jsr:@std/assert";

export function assert(fn: Function, args: any[], expected: any) {
    const result = fn(...args);

    let asrtResult = true;

    try {
        assertEquals(result, expected);
    } catch (_error) {
        asrtResult = false;
    }

    if (!asrtResult) {
        console.log(`\x1b[41m\x1b[30m FAIL \x1b[0m: expected ${expected}, got ${result}`);
    } else {
        console.log(`\x1b[42m\x1b[30m PASS \x1b[0m: expected ${expected}, got ${result}`);
    }
}
