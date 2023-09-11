import { afterEach, describe, expect, test, vi } from "vitest";
import { ContactsProvider } from "./ContactsContext";
import { act, renderHook } from "@testing-library/react-hooks";
import { useContactContext } from "./useContactContext";

// const LS_KEY = "contactsTest";

describe("Testing context", () => {
    const wrapper = ({ children }) => (
        <ContactsProvider>{children}</ContactsProvider>
    );

    // const setItemSpy = vi.spyOn(Storage.prototype, "setItem");
    // afterEach(() => {
    //     localStorage.clear();
    //     setItemSpy.mockClear();
    // });
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
        act(() => {
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
});
