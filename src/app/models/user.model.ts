export class User {
    name: string;
    email: string;
    score: number;

    User(name, email, score){
        this.name = name;
        this.email = email;
        this.score = score;
    }
}