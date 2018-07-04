export class User {
    key: string;
    name: string;
    email: string;
    score: number;

    User(key, name, email, score){
        this.key = key;
        this.name = name;
        this.email = email;
        this.score = score;
    }
}