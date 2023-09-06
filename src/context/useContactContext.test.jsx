import { describe, expect, test } from "vitest";
import { ContactsProvider } from "./ContactsContext";
import { act, renderHook } from "@testing-library/react-hooks";
import { useContactContext } from "./useContactContext";

describe("Testing context", () => {
    const wrapper = ({ children }) => (
        <ContactsProvider>{children}</ContactsProvider>
    );
    test("LS", () => {
        const { result } = renderHook(() => useContactContext(), { wrapper });
        expect(result.current.getContactsFromLs()).toStrictEqual([]);
    });
    test("add contacts", () => {
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
});
