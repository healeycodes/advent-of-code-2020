function one(input) {
    const answers = []
    const puzzle = input.split('\n').map(n => Number(n))

    // Classic Two Sum
    const numsSoFar = new Set()
    puzzle.forEach(n => {
        if (numsSoFar.has(2020 - n)) {
            answers.push((2020 - n) * n)
        } else {
            numsSoFar.add(n)
        }
    })

    // There has to be a faster way than this
    for (let i = 0; i < puzzle.length; i++) {
        for (let j = 0; j < puzzle.length; j++) {
            for (let k = 0; k < puzzle.length; k++) {
                if (puzzle[i] + puzzle[j] + puzzle[k] === 2020) {
                    answers.push(puzzle[i] * puzzle[j] * puzzle[k])
                    return answers
                }
            }
        }
    }
}

module.exports = one;
