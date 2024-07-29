import { User } from "@src/domain/entities/User"

describe('User Entity', () => {
    it('should create a user with given properties', () => {
        const user = new User('Test', 'test@test.com', '123456', '1');
        expect(user.name).toBe('Test');
        expect(user.email).toBe('test@test.com');
        expect(user.password).toBe('123456');
        expect(user.id).toBe('1');
    });

    it('should validate the password correctly', () => {
        const user = new User('Test', 'test@test.com', '123456', '1');
        expect(user.validPassword('123456')).toBe(true);
        expect(user.validPassword('654321')).toBe(false);
    });
});