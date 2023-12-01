import readline from "node:readline/promises";
import { PathLike, createReadStream } from "node:fs";

async function* loadFile(name: PathLike) {

    const inFile = createReadStream(name)

    const lineReader = readline.createInterface({
        input: inFile,
        crlfDelay: Infinity
    })

    for await (const line of lineReader) {
        yield line
    }

}

export { loadFile };