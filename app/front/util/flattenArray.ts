const flattenArray = <T>(arr: T[], getChildren: (t: T) => T[]): T[] => arr
    .map((v) => [v, ...flattenArray(getChildren(v), getChildren)])
    .reduce((prev, curr) => [...prev, ...curr], [])

export default flattenArray
