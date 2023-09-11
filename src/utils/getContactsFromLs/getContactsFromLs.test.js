import { describe, expect, test } from "vitest";
import getContactsFromLs from "./getContactsFromLs";

describe("getContactsFromLs", () => {
    test("expect an arry", () => {
        expect(getContactsFromLs()).toStrictEqual([]);
    });
});