import { describe, expect, test } from "vitest";
import findContact from "./findContact";

describe("findContact", () => {
    test("testing when an contact is not found", () => {
        expect(findContact("21a9c1a7-2e10-4d18-b208-8c6586e6786f")).toBe(undefined);
    })
})