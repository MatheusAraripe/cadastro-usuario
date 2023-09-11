import { describe, expect, test } from "vitest";
import filterList from "./filterList";

describe("filterList", () => {
    test("testing the filter on an empty arry", () => {
        expect(filterList("21a9c1a7-2e10-4d18-b208-8c6586e6786f")).toStrictEqual([]);
    });
})