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
    "module form-validatior",
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
    }
);