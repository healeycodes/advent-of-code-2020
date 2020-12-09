function eight(input) {
    const answers = []
    const puzzle = input.split('\n')
    let value = 0

    // TODO: Use an O(1) data-structure here
    let history = []

    for (let i = 0; i < puzzle.length; i++) {
        let instr = puzzle[i].split(' ')[0]
        let arg = puzzle[i].split(' ')[1]

        if (history.includes(i)) {
            // Capture value at the point of infinite loop
            answers.push(value)
            break
        }
        history.push(i)

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

    return answers
}

module.exports = eight
