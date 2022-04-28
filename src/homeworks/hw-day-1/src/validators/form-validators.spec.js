it(
    "should do sanity test of form-validatiors",
    () => {
        expect(1+2).toBe(3);
    }
);

import { 
    validateRequired,  
    validateMinLength,
    validateEmail,
    validatePassword
} from "./form-validators";

describe(
    "module form-validator",
    () => {
        it(
            "should test required fields",
            () => {
                expect.hasAssertions();

                const resultForEmpty = validateRequired();
                expect(resultForEmpty).toEqual({required: "This field is required"});

                const resultForString = validateRequired('A string.');
                expect(resultForString.required).toBe('');

                const resultForZero = validateRequired(0);
                expect(resultForZero.required).toBe('This field is required');
            }
        );

        it(
            "should test validateMinLength",
            () => {
                let result = validateMinLength('', 3);
                expect(result).toEqual({"minLength": "Field must have at least 3 chars"});
            }
        );

        it(
            "should test if email is valid",
            () => {
                let resultError = validateEmail('abc', 3);
                expect(resultError).toEqual({"email": "Invalid e-mail address"});

                let resultOk = validateEmail('john@doe.com', 3);
                expect(resultOk).toEqual({"email": ""});
            }
        );

        it(
            "should test validatePassword",
            () => {
                let resultError = validatePassword('weakPassword');
                expect(resultError).toEqual( 
                    {
                        password: "Password: must have special sign (#!$), must have a digit"
                    } 
                );

                let resultOk = validatePassword('str0nGPa55word!');
                expect(resultOk).toEqual( 
                    {
                        password: ""
                    } 
                );
            }
        );
    }
);