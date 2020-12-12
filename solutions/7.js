function seven(input) {
    const answers = []
    const puzzle = input.split('\n')

    let bags = {}
    puzzle.forEach(line => {
        const bag = line.split(' bag')[0]
        bags[bag] = []
        let allBags = line.split(' contain ')[1].split(',')

        allBags.forEach(rule => {
            if (rule.includes('no other')) return
            const trimmed = rule
                .replace(/(\sbags.?)|(\sbag.?)/, '')
                .trim()
            // const digit = parseInt(trimmed.match(/\d\s/))
            const withoutDigit = trimmed.replace(/\d\s/, '')
            bags[bag].push(withoutDigit)
        })
    })

    function search(bags, bag, seek) {
        if (bag === seek) {
            return true
        }

        for (let i = 0; i < bags[bag].length; i++) {
            if (search(bags, bags[bag][i], seek)) {
                return true
            }
        }
        return false
    }

    let bagsWithShinyGold = 0
    Object.keys(bags).forEach(bag => {
        if (search(bags, bag, 'shiny gold')) {
            bagsWithShinyGold++
        }
    })

    answers.push(bagsWithShinyGold - 1)
    return answers
}

module.exports = seven
