function three(input) {
    const answers = []
    let puzzle = input.split('\n')
    lineLength = puzzle[0].length

    function testPath(right, down) {
        let pos = [0, 0] // x, y
        let trees = 0
        while (pos[1] + down < puzzle.length - 1) {
            pos[0] += right
            pos[1] += down
            if (puzzle[pos[1]][pos[0] % lineLength] === '#') {
                trees++
            }
        }
        return trees
    }
    answers.push(testPath(3, 1))

    const paths = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]]
    const partTwo = paths.reduce((acc, cur) => acc * testPath(cur[0], cur[1]), 1)
    answers.push(partTwo)

    return answers
}

module.exports = three
