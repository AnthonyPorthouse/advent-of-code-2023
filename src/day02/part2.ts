import { PathLike, stat } from "node:fs";
import { loadFile } from "../utils/loadfile.js";

export default async function (input: PathLike) {
    type Stats = {id: number, maxRed: number, maxGreen:number, maxBlue:number, power: number}

    const games: Stats[] = []

    for await (const row of loadFile(input)) {
        const [gameId, rounds] = row.split(': ')

        const [_, id] = gameId.split(' ');

        const stats: Stats = {
            id: Number(id),
            maxRed: 0,
            maxGreen: 0,
            maxBlue: 0,
            power: 0
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

        stats.power = stats.maxRed * stats.maxGreen * stats.maxBlue

        games.push(stats)
    }

    const total = games.reduce((prev, stats) => {
        return prev + stats.power
    }, 0)

    return total

}
