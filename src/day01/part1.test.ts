import { describe, expect, it } from "vitest";
import part1 from "./part1.js";

describe(part1,async () => {
        it('returns 142 for the example', async () => {
            expect(await part1(__dirname + '/example.txt')).toBe(142)
        })


        it('returns a value for our input', async () => {
            expect(await part1(__dirname + '/input.txt')).toBeGreaterThan(0)
        })
})