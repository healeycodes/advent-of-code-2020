function eight(input) {
    const answers = []
    const puzzle = input.split('\n')

    function isLoop(puzzle) {
        let value = 0
        let history = new Set()

        for (let i = 0; i < puzzle.length; i++) {
            let instr = puzzle[i].split(' ')[0]
            let arg = puzzle[i].split(' ')[1]

            if (history.has(i)) {
                return [true, value]
            }
            history.add(i)

            if (instr === 'nop') {
                continue
            }

            if (instr === 'acc') {
                value += parseInt(arg)
            }

            if (instr === 'jmp') {
                i += parseInt(arg) - 1
            }
        }
        return [false, value]
    }

    // Capture value at the point of infinite loop
    answers.push(isLoop(puzzle)[1])

    // Generate all the possible working puzzles
    let altPuzzles = []
    for (let i = 0; i < puzzle.length; i++) {
        let copy = puzzle.slice()
        if (puzzle[i].includes('jmp')) {
            copy[i] = copy[i].replace('jmp', 'nop')
            altPuzzles.push(copy)
        } else if (puzzle[i].includes('nop')) {
            copy[i] = copy[i].replace('nop', 'jmp')
            altPuzzles.push(copy)
        }
    }

    // Find the working puzzle and capture the termination value
    for (let i = 0; i < altPuzzles.length; i++) {
        const result = isLoop(altPuzzles[i])
        if (result[0] === false) {
            answers.push(result[1])
            break
        }
    }

    return answers
}

module.exports = eight
