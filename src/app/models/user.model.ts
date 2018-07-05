export class User {
    key$: string;
    uid: string;
    name: string;
    email: string;
    score: number;

    public User(key$, uid, name, email, score){
        this.key$ = key$;
        this.uid = uid;
        this.name = name;
        this.email = email;
        this.score = score;
    }
}