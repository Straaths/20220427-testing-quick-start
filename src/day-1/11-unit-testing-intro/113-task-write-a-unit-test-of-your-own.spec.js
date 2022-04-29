/**
 * TASK(113);
 *
 * W naszym systemie musimy mieć funkcję dekoratora, aby wziąć dowolny obiekt (`user`) i dodać wartość `profession`.
 *
 *   Ta funkcja musi zachowywać się tak:
 *
 *   1. Obiekt dostarczony do tej funkcji nie powinien być mutowany!!!
 *   2. Funkcja powinna zwrócić obiekt z właściwością i wartością profession.
 *   3. Tylko `user` musi być podany, aby funkcja zadziałała.
 *   4. Jeśli nie podano `profession`, powinno to uczynić zawód "unknown".
 *
 *   przykład wywołania:
 *   attachProfession({}, "programmer")  ---- wynik: { profession: 'programmer' }
 *   attachProfession({name: 'John'}) ---- wynik: { name: 'John', profession: 'unknown' }
 *
 *  Rozpisz przypadki testowe, zaimplementuj funkcję.
 * */


function attachProfession(user, profession = 'unknown') {
    return {
        ...user,
        profession
    };
}

describe('attachProfession', () => {
    it('should attach given profession to provided user', () => {
        
        const user = {name: 'John'};
        const profession = 'programmer';
        
        const resultUser = attachProfession(user, profession);
        
        expect(resultUser).toEqual({
            name: 'John',
            profession: 'programmer'
        })
    });

    it('should attach default "unknown" profession to provided user, when profession no provided', () => {
        const user = {name: 'John'};
        
        const resultUser = attachProfession(user);
        
        expect(resultUser).toEqual({
            name: 'John',
            profession: 'unknown'
        })
    });
    
    it('should override users existing profession', () => {
        const user = {name: 'John', profession: 'pilot'};
        const profession = 'programmer';
        
        const resultUser = attachProfession(user, profession);
        
        expect(resultUser).toEqual({
            name: 'John',
            profession: 'programmer'
        })
    });
    
    it('should not mutate provided user object', () => {
        const emptyUser = {};
        const profession = 'pilot'
        
        const resultUser = attachProfession(emptyUser, profession);
        
        expect(resultUser).not.toBe(emptyUser)
        expect(emptyUser).toEqual({});
    }); 
}) 

