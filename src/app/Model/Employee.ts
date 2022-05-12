import { Post } from "./Post";

export class Comment {
    public id?: number;
    public name?: string;
    public email?: string;
    public posts? :Post[];
   
}