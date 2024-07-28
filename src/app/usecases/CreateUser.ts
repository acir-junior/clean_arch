import { User } from "../../domain/entities/User";
import { UserRepository } from "../../domain/repositories/UserRepository";

interface ICreateUser {
    name: string;
    email: string;
    password: string;
}

export default class CreateUser {
    constructor(
        private _userRepository: UserRepository
    ) {}

    async execute(request: ICreateUser): Promise<User> {
        const user = new User(request.name, request.email, request.password);
        await this._userRepository.save(user);
        return user;
    }
}