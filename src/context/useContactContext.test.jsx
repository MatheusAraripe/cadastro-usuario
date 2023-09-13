import { afterEach, describe, expect, test, vi } from "vitest";
import { ContactsProvider } from "./ContactsContext";
import { act, renderHook } from "@testing-library/react-hooks";
import { useContactContext } from "./useContactContext";

describe("Testing context", () => {
    const wrapper = ({ children }) => (
        <ContactsProvider>{children}</ContactsProvider>
    );

    test("newContact", () => {
        const { result } = renderHook(() => useContactContext(), { wrapper });
        expect(
            result.current.newContact(
                "name",
                "cpf",
                "cep",
                "street",
                "number",
                "neighborhood",
                "city",
                "estate",
                "complement",
                "date",
                "gender"
            ).name
        ).toStrictEqual("name");
    });
    test("addContact", () => {
        const { result } = renderHook(() => useContactContext(), { wrapper });
        act(() => {
            result.current.addContact(
                "name",
                "cpf",
                "cep",
                "street",
                "number",
                "neighborhood",
                "city",
                "estate",
                "complement",
                "date",
                "gender"
            );
        });
        expect(result.current.contacts[0].name).toStrictEqual("name");
    });

    test("excludeContact", () => {
        const { result } = renderHook(() => useContactContext(), { wrapper });
        act(() => {
            result.current.contacts[0] = { id: "1", name: "test" };
            result.current.excludeContact("1");
        });
        expect(result.current.contacts).toStrictEqual([]);
    });

    test("editContact", () => {
        const { result } = renderHook(() => useContactContext(), { wrapper });
        result.current.contacts[0] = {
            id: "1",
            name: "name",
            cpf: "cpf",
            cep: "cep",
            street: "street",
            number: "number",
            neighborhood: "neighborhood",
            city: "city",
            estate: "estate",
            complement: "comp",
            date: "date",
            gender: "gender",
        };
        act(() => {
            result.current.editContact(
                "1",
                "edit name",
                "cpf",
                "cep",
                "street",
                "number",
                "neighborhood",
                "city",
                "estate",
                "complement",
                "date",
                "gender"
            );
        });
        expect(result.current.contacts[0].name).toStrictEqual("edit name");
    });

    describe("searchContact", () => {
        test("test if it can find the name 'matheus' searching for 'mat'", () => {
            const { result } = renderHook(() => useContactContext(), {
                wrapper,
            });
            act(() => {
                result.current.setContacts([
                    { name: "matheus" },
                    { name: "fabiana" },
                ]);
            });
            expect(result.current.searchContact("mat")).toStrictEqual([
                { name: "matheus" },
            ]);
        });
        test("the return should be an empty array when search for 'bob'", () => {
            const { result } = renderHook(() => useContactContext(), {
                wrapper,
            });
            expect(result.current.searchContact("bob")).toStrictEqual([]);
        });
    });
    describe("filterContactsGender", () => {
        test("test if the filter returns only the male elements", () => {
            const { result } = renderHook(() => useContactContext(), {
                wrapper,
            });
            act(() => {
                result.current.setContacts([
                    { name: "matheus", gender: "male" },
                    { name: "fabiana", gender: "female" },
                    { name: "bob", gender: "male" },
                ]);
            });
            expect(
                result.current.filterContactsGender("male", "")
            ).toStrictEqual([
                { name: "matheus", gender: "male" },
                { name: "bob", gender: "male" },
            ]);
        });
        test("should return all the objects if the gender is 'all'", () => {
            const { result } = renderHook(() => useContactContext(), {
                wrapper,
            });
            act(() => {
                result.current.setContacts([
                    { name: "matheus", gender: "male" },
                    { name: "fabiana", gender: "female" },
                    { name: "bob", gender: "male" },
                ]);
            });
            expect(
                result.current.filterContactsGender("all", "")
            ).toStrictEqual([
                { name: "matheus", gender: "male" },
                { name: "fabiana", gender: "female" },
                { name: "bob", gender: "male" },
            ]);
        });
        test("should return only the objects with 'ma' and male", () => {
            const { result } = renderHook(() => useContactContext(), {
                wrapper,
            });
            act(() => {
                result.current.setContacts([
                    { name: "matheus", gender: "male" },
                    { name: "mario", gender: "male" },
                    { name: "fabiana", gender: "female" },
                ]);
            });
            expect(
                result.current.filterContactsGender("male", "ma")
            ).toStrictEqual([
                { name: "matheus", gender: "male" },
                { name: "mario", gender: "male" },
            ]);
        });
    });
});
