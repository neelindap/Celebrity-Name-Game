export class User {
    email: string;
    password: string;

    constructor(obj?: any) {
        this.email = obj && obj.email || null;
        this.password = obj && obj.password || null;
    }
}