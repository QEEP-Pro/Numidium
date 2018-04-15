import flattenArray from '../flattenArray'

interface TestObj {
    id: number,
    children: TestObj[]
}

test('`flattenArray` should return flatten array', () => {
    const arr = [
        { id: 1, children: [
            { id: 2, children: [
                { id: 3, children: [] } as TestObj,
            ] } as TestObj,
        ]} as TestObj,
        { id: 4, children: [] } as TestObj,
    ]

    const result = flattenArray<TestObj>(arr, (o) => o.children)

    expect(result.map((o) => o.id)).toEqual([1, 2, 3, 4])
})

test('`flattenArray` with empty tree should return empty array', () => {
    const result = flattenArray<TestObj>([], (o) => o.children)

    expect(result).toEqual([])
})
