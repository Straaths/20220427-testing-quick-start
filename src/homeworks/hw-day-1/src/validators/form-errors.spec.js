it(
    "should do sanity test of form-errors",
    () => {
        expect(2+3).toBe(5);
    }
);

import { 
    getValidationErrorMessages,  
    hasAnyErrors
} from "./form-errors";

describe(
    "module form-errors",
    () => {
        it(
            "should test required fields",
            () => {
                expect.hasAssertions();

                const result = getValidationErrorMessages({});
                expect(result).toEqual([]);
            }
        );
    }
);
