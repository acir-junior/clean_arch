export class User {
    constructor(
        public name: string,
        public email: string,
        public password: string,
        public id?: string,
    ) {}

    changeEmail(newEmail: string) {
        this.email = newEmail;
    }

    validPassword(password: string): boolean {
        return this.password === password;
    }
}