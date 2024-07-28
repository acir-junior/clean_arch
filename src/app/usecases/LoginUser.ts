import { User } from "../../domain/entities/User";
import { UserRepository } from "../../domain/repositories/UserRepository";

interface ILoginUser {
    email: string;
    password: string;
}

export default class LoginUser {
    constructor(
        private _userRepository: UserRepository
    ) {}

    async execute(request: ILoginUser): Promise<User | null> {
        const user = await this._userRepository.findByEmail(request.email);
        if (user && user.validPassword(request.password)) {
            return user
        }
        return null;
    }
}