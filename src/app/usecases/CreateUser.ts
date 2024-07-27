import { UserRepository } from "../../domain/repositories/UserRepository";

export default class CreateUser {
    constructor(
        private _userRepository: UserRepository
    ) {}
}