import * as usePersistedState from "./usePersistedState"
// @ponicode
describe("usePersistedState.default", () => {
    test("0", () => {
        let callFunction: any = () => {
            usePersistedState.default("Dillenberg", false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            usePersistedState.default("elio@example.com", "Île-de-France")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            usePersistedState.default("elio@example.com", false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            usePersistedState.default("Elio", 2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            usePersistedState.default("Elio", 256)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            usePersistedState.default("", Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
