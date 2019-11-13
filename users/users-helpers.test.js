const {validateUser} = require('./users-helpers');

//sent an empty object, we saw the result fail




//sent an object with username < 2 characters, we verified it failed




//sent an object with password < 4 characters, we verified it failed


describe('users helpers', () => {
    describe('validateUser', () =>{
        it('should fail when missing username and/or password', () =>{
            //arrange --> setup the world for test
            const invalidUser = {};
            const expectedValue = false;

            //act --> execute the system under test (SUT) => validateUser method
            const actualValue  =validateUser(invalidUser);

            //assert --> check the result
            expect(actualValue.isSuccessful).toBe(expectedValue) //matchers
            expect(actualValue.errors).toHaveLength(2);
        });

        it("should fail if missing password", () => {
            expect(validateUser({username:'somebody'}).isSuccessful).toBe(false);
            expect(validateUser({username:'somebody'}).errors).toHaveLength(1);
        });

        it("should succeed with valid user", () => {
            expect(validateUser({username:'somebody', password:'password'}).isSuccessful).toBe(true);
            expect(validateUser({username:'somebody', password:'password'}).errors).toHaveLength(0);
        });

        it.todo("should fail if username is an object");
        it.todo("should fail if username is an array");
        it.todo("should fail if username is an object");
        it.todo("should fail if username is an object");





    });
});