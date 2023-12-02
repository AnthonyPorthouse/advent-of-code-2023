import { describe, expect, it } from "vitest";
import part2 from "./part2.js";

describe(part2,async () => {
        it('returns 2286 for the example', async () => {
            expect(await part2(__dirname + '/example.txt')).toBe(2286)
        })
})