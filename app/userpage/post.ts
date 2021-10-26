export class Post {
    constructor(
        public email : string| null,
        public date : number|null,
        public title: string|null,
        public subtitle :  string |null,
        public imageURL: string |null,
        public text : string | null,
    ){}
}
