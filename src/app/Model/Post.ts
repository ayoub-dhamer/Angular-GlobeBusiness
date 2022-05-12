import { Likee } from "./Likee";
import { Comment } from "./Comment";

export class Post {
    public id?: number;
    public descritpion?: string;
    public image?: string;
    public datePost?: Date;
    public likees? :Likee[];
    public comments? :Comment[];



}