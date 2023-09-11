import { describe, expect, test } from 'vitest'
import formatCPF from './formatCpf'

describe("formatCpf", ()=>{
    test('expect 12345678910 to be equal to 123.456.789-10', () => {
        expect(formatCPF("12345678910")).toBe("123.456.789-10")
    })
})