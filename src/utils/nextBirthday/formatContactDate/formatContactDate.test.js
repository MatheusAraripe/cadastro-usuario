import { describe, expect, test } from "vitest"
import formatContactDate from "./formatContactDate"

describe('formatContactDate', () => {
    test("need to return a date object in the shape 'MM/DD/YYYY'", ()=>{
        expect(formatContactDate("26/05/2004")).toStrictEqual(new Date('05/26/2004'));
    })
})