function six(input) {
    const answers = []
    const partOne = input
        .split('\n\n')
        .map(group => new Set(group
            .replace(/[\r\n]+/g, '')
            .split(''))
        )
        .reduce((acc, cur) => acc + cur.size, 0)
    answers.push(partOne)

    // These parts can be combined because there is similar logic
    const partTwo = input
        .split('\n\n')
        .map(group => {
            const people = group
                .split(/[\r\n]+/g)
                .map(person => new Set([...person]))
                .reduce((acc, cur) =>
                    new Set([...acc].filter(x => cur.has(x)))
                )
            return people.size
        })
        .reduce((acc, cur) => acc + cur, 0)
    answers.push(partTwo)
    return answers
}

module.exports = six