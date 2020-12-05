function five(input) {
    const answers = []
    const seatIds = []

    function getSeat(boardingPass) {
        let row = new Array(128).fill().map((d, i) => i++)
        let column = new Array(8).fill().map((d, i) => i++)

        // Handle F/B
        boardingPass.slice(0, 7).split('').forEach(char => {
            if (char === 'F') {
                row = row.slice(0, row.length / 2)
            } else {
                row = row.slice(row.length / 2)
            }
        })

        // Handle L/R
        boardingPass.slice(7).split('').forEach(char => {
            if (char === 'L') {
                column = column.slice(0, column.length / 2)
            } else {
                column = column.slice(column.length / 2)
            }
        })

        seatIds.push(row[0] * 8 + column[0])
    }

    input.split('\n').forEach(line => getSeat(line))
    answers.push(Math.max(...seatIds))

    seatIds.sort((a, b) => a - b)
    for (let i = 0; i < seatIds.length; i++) {
        // Look for a gap in the list of seat ids
        if (seatIds[i + 1] - seatIds[i] > 1) {
            // It's inbetween the two other seats
            answers.push(seatIds[i] + 1)
            return answers
        }
    }
}

module.exports = five;
