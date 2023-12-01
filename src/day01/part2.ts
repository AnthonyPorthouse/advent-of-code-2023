import { PathLike } from "fs";
import { loadFile } from "../utils/loadfile.js";

const numberRegex = /\d/

export default async function (input: PathLike) {
    let total = 0

    for await (const line of loadFile(input)) {

        let newline = '';

        for (let i = 0; i < line.length; i++) {
            const substr = line.substring(i);

            if (substr.startsWith('one')) {
                newline += '1'
                continue
            }
            if (substr.startsWith('two')) {
                newline += '2'
                continue
            }

            if (substr.startsWith('three')) {
                newline += '3'
                continue
            }

            if (substr.startsWith('four')) {
                newline += '4'
                continue
            }

            if (substr.startsWith('five')) {
                newline += '5'
                continue
            }

            if (substr.startsWith('six')) {
                newline += '6'
                continue
            }

            if (substr.startsWith('seven')) {
                newline += '7'
                continue
            }

            if (substr.startsWith('eight')) {
                newline += '8'
                continue
            }

            if (substr.startsWith('nine')) {
                newline += '9'
                continue
            }

            newline += substr.at(0) ?? ''

        }

        const chars = newline.split('');

        const digits = chars.filter((char) => char.match(numberRegex) !== null)

        if (digits.length === 0) {
            throw `Unmatched value in line: ${line}`
        }

        const number = Number(`${digits.at(0)}${digits.at(-1)}`)

        total += number
    }
    return total
}