import { describe, expect, it } from "vitest";
import part2 from "./part2.js";

describe(part2,async () => {
        it('returns 281 for the example', async () => {
            expect(await part2(__dirname + '/example2.txt')).toBe(281)
        })


        it('returns a value for our input', async () => {
            expect(await part2(__dirname + '/input.txt')).toBeGreaterThan(0)
        })

})