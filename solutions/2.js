function two(input) {
    const answers = []
    const puzzle = input.split('\n')
    let validOne = 0
    let validTwo = 0
    
    puzzle.forEach(line => {
        // Let the splitting commence..
        const rule = line.split(' ')[0]
        const from = rule.split('-')[0]
        const to = rule.split('-')[1]
        const letter = line.split(':')[0].slice(-1)
        const amount = line.split(' ')
            .slice(-1)[0]
            .split('')
            .filter(c => c === letter)
            .length

        // Part one rule
        if (amount >= from && amount <= to) {
            validOne++
        }

        // Part two rule
        const letters = line.split(' ')
            .slice(-1)[0]
            .split('')
        if (letters[from - 1] === letter ^ letters[to - 1] === letter) {
            validTwo++
        }
    })
    
    answers.push(validOne)
    answers.push(validTwo)
    return answers
}

module.exports = two;
