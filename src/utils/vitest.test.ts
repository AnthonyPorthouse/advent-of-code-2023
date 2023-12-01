import { describe, expect, expectTypeOf, it } from 'vitest'
import { loadFile } from './loadfile.js'

describe(loadFile, async () => {
    it('returns a file line by line', async () => {
        const generator = loadFile(
            __dirname + '/loadfile.ts'
        )

        for await (const line of generator) {
            expect(line).not.toBeNull()
        }
    })
})