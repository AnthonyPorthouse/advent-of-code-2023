import { describe, expect, it } from "vitest";
import part1 from "./part1.js";

describe(part1,async () => {
        it('returns 8 for the example', async () => {
            expect(await part1(__dirname + '/example.txt')).toBe(8)
        })
})