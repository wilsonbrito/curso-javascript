const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in number) {
    if (x == 5) {
        break
    }
    console.log(`${x} = ${number[x]}`)
}

for (y in number) {
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${number[y]}`)
}

externo:
    for (a in number) {
        for ( b in number) {
            if(a == 2 && b == 3) {
                break
                externo
                console.log(`Par = ${a}, ${b}`)
            }
        }
    }