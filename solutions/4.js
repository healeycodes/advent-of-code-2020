function four(input) {
    const answers = []
    let keys = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']
    let rules = {
        byr: byr => byr.toString().length === 4 && byr > 1919 && byr < 2003,
        iyr: iyr => iyr.toString().length === 4 && iyr > 2009 && iyr < 2021,
        eyr: eyr => eyr.toString().length === 4 && eyr > 2019 && eyr < 2031,
        hgt: hgt => {
            if (hgt.includes('cm')) {
                const measure = hgt.substring(0, hgt.indexOf('cm'))
                return measure > 149 && measure < 194
            } else if (hgt.includes('in')) {
                const measure = hgt.substring(0, hgt.indexOf('in'))
                return measure > 58 && measure < 77
            }
            return false
        },
        hcl: hcl => hcl[0] === '#' && hcl.slice(1).match(/[0-9]|[a-f]/g).length === 6,
        ecl: ecl => ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].some(color => ecl === color),
        pid: pid => pid.length === 9 && pid.match(/[0-9]/g).length === 9
    }

    let puzzle = input
        // split passport sections
        .split('\n\n')
        // create passport objects
        .map(passport => passport
            // handle single linebreaks
            .replace(/[\r\n]+/gm, ' ')
            .split(' ')
            .reduce(
                (acc, cur) => Object.assign(acc, { [cur.split(':')[0]]: cur.split(':')[1] }), {}
            )
        )
        // check for required keys
        .filter(passport => keys.filter(key => key in passport).length > 6)
    answers.push(puzzle.length)

    let valid = puzzle.filter(passport => {
        for (const key in passport) {
            // skip cid we don't care either way
            if (key === 'cid') continue
            // look up the relevant rule and discard if failing
            if (rules[key](passport[key]) === false) {
                return false
            }
        }
        return true
    })

    answers.push(valid.length)
    return answers
}

module.exports = four
