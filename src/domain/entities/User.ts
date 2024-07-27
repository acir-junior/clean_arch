export class User {
    constructor(
        public id: string,
        public name: string,
        public email: string
    ) {}

    changeEmail(newEmail: string) {
        this.email = newEmail;
    }
}