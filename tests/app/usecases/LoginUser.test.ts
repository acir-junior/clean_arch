import LoginUser from "@src/app/usecases/LoginUser";
import { User } from "@src/domain/entities/User";
import { UserRepository } from "@src/domain/repositories/UserRepository";

class UserMockRepository implements UserRepository {
    private users: User[] = [
        new User('test', 'test@test.com', '123456', '1'),
        new User('john', 'john@test.com', '123456', '2'),
    ];

    async findByEmail(email: string): Promise<User | null> {
        return this.users.find((user) => user.email === email) || null;
    }
    
    async findbyId(id: string): Promise<User | null> {
        return this.users.find((user) => user.id === id) || null;
    }

    async save(user: User): Promise<void> {
        this.users.push(user);
    }
}

describe('LoginUser UseCase', () => {
    it('should login the user with correct credentials', async () => {
        const userRepository = new UserMockRepository();
        const loginUser = new LoginUser(userRepository);
        const user = await loginUser.execute({
            email: 'test@test.com',
            password: '123456'
        });

        expect(user).not.toBeNull();
        expect(user?.email).toBe('test@test.com');
    });

    it('should login the user with incorrect credentials', async () => {
        const userRepository = new UserMockRepository();
        const loginUser = new LoginUser(userRepository);
        const user = await loginUser.execute({
            email: 'test@test.com',
            password: '654321'
        });

        expect(user).toBeNull();
    });
});