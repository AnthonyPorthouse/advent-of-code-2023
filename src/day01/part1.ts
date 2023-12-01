import { PathLike } from "fs";
import { loadFile } from "../utils/loadfile.js";

export default async function (input: PathLike) {
    let total = 0

    for await (const line of loadFile(input)) {

        const chars = line.split('');

        const first = chars.find((char) => char.match(/\d/) !== null)
        const last = chars.toReversed().find((char) => char.match(/\d/) !== null)

        if (!first  || !last) {
            throw `Unmatched value in line: ${line}`
        }

        const number = Number(`${first}${last}`); 

        total += number
    }

    return total
}