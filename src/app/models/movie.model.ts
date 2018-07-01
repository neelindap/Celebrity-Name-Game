export class Movie {
    id: number;
    title: string;
    description: string;
    image: string;

    constructor(obj?: any) {
        this.id = obj && obj.id || null;
        this.title = obj && obj.title || null;
        this.description = obj && obj.description || null;
        this.image = obj && obj.image || null;
    }
}