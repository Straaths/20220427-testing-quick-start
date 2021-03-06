/**
 * TASK(104);
 *
 * Czas napisać własne testy.
 *
 * W ich opisach masz dokładne założenia.
 * Musisz zdefiniować logikę dla `divide` żeby je spełnić
 *
 * Zadanie uruchom jako:
 * ```
 * npm run test:warm-up-104
 * ```
 *
 * Zastanów się dlaczego:
 *
 * 1. Warto najpierw zapalić test "na czerwono"
 * 2. Nie ma znaczenia czy najpierw napiszesz test, czy logikę implementacji.
 * 3. Możesz wymyślić więcej możliwości sprawdzenia działania tej logiki jednak,
 *    dla każdego sprawdzenia warto napisać osobny test.
 *
 * */

function divide(dividend, divisor) {
    if(divisor === 0) {
        throw new Error('You cannot divide by 0')
    } 
    if(!dividend || !divisor) {
        return 0;
    }
    return dividend / divisor;
}

test('should properly divide positive numbers', () => {
     // [A]arrange // Given
     const dividend = 10;
     const divisor = 5;
     
     // [A]act // When
     const result = divide(dividend, divisor)
     
     // [A]assert // Then
     expect(result).toBe(2)
});

test('should properly divide negative numbers', () => {
       // [A]arrange // Given
       const dividend = -10;
       const divisor = -5;
       
       // [A]act // When
       const result = divide(dividend, divisor)
       
       // [A]assert // Then
       expect(result).toBe(2)
});

// Biznes przychodzi z nowymi wymaganiami:
test('should result in 0 if no arguments provided', () => {
    
    // [A]act // When
    const result = divide()
   
    // [A]assert // Then
    expect(result).toBe(0)
})

// Extra task:
test('*should throw error when divisor is equal 0 like "You cannot divide by 0"', () => {
    // [A]arrange // Given
    const theZeroDivisor = 0;
    
     // [A]act + [A]assert
    expect(() => divide(2340, theZeroDivisor)).toThrowError('You cannot divide by 0')
});
