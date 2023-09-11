import { describe, expect, test } from 'vitest'
import extractCpfNumbers from './extractCpfNumbers'

describe("ExtractCpfNumbers", ()=>{
    test('expect 123.456.789-10 to be equal to 12345678910', () => {
        expect(extractCpfNumbers("123.456.789-10")).toBe("12345678910")
    })
})