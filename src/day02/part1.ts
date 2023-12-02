import { PathLike, stat } from "node:fs";
import { loadFile } from "../utils/loadfile.js";

export default async function (input: PathLike) {
    const counts = {
        red: 12,
        green: 13,
        blue: 14
    }

    type Stats = {id: number, maxRed: number, maxGreen:number, maxBlue:number, isImpossible: boolean}

    const games: Stats[] = []

    for await (const row of loadFile(input)) {
        const [gameId, rounds] = row.split(': ')

        const [_, id] = gameId.split(' ');

        const stats: Stats = {
            id: Number(id),
            maxRed: 0,
            maxGreen: 0,
            maxBlue: 0,
            isImpossible: false
        }

        type Colors = "red" | "green" | "blue"

        rounds.split('; ').map((round) => {
            round.split(', ').map((value) => {
                const [count, color] = value.split(' ');

                switch(color as Colors) {
                    case "red":
                        stats.maxRed = Math.max(stats.maxRed, Number(count))
                        return
                    case "green":
                        stats.maxGreen = Math.max(stats.maxGreen, Number(count))
                        return
                    case "blue":
                        stats.maxBlue = Math.max(stats.maxBlue, Number(count))
                        return
                }
            })
        })

        stats.isImpossible = stats.maxRed > counts.red || stats.maxGreen > counts.green || stats.maxBlue > counts.blue

        games.push(stats)
    }

    const total = games.reduce((prev, stats) => {
        if (stats.isImpossible) {
            return prev
        }

        return prev + stats.id
    }, 0)

    return total

}
