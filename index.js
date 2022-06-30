function findMatching(driverNames, string) {
    const list = driverNames.filter(names => names.toUpperCase() === string.toUpperCase())
    if (list) {
        return list
    } else {
        return undefined
    }
}

function fuzzyMatch(driverNames, string) {
    const list = driverNames.filter(names => names[0] === string[0])
    if (list) {
        return list
    } else {
        return undefined
    } 
}

function matchName(driverNames, string) {
    const list = driverNames.filter(names => names.name === string)
    if (list) {
        return list
    } else {
        return undefined
    } 
}