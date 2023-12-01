import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

await yargs(hideBin(process.argv))
.showHelpOnFail(true)
.demandCommand()
.command('day [day] [part]', 'run the challenge for the day', (yargs) => {
    return yargs
        .positional('day', {
            describe: 'The day to run',
            default: 1
        })
        .positional('part', {
            describe: 'The part to run',
            type: "number"
        })
}, async (argv) => {
    const {day, part} = argv;

    if (part) {
        await runScript(day, part)
        return;
    }
    
    await runScript(day, 1);
    await runScript(day, 2)
}).parseAsync()


async function runScript(day: number, part: number) {
    const importUrl = new URL(`./day${String(day).padStart(2, '0')}`, import.meta.url).toString().replace('file://', '');

    interface Callable {
        (input: string): Promise<string>
    }

    try {
        const script: {
            default: (filepath: string) => any
        }= await import(`${importUrl}/part${part}.js`);

        console.log(`Running Day ${day} part ${part}`);

        console.time(`Day ${day} part ${part}`)
    
        const result = await script.default(`${importUrl}/input.txt`)
    
        console.timeEnd(`Day ${day} part ${part}`)
    
        console.log(result);
    } catch (e) {
        console.warn(e)
    }
   
}

    