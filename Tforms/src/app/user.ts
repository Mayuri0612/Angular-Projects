export class User{
    //Typescript shorthand syntax for a constructor
    constructor(
        public name: string,
        public email: string,
        public phone: number,
        public topic: string,
        public timePreference: string,
        public subscribe: boolean
    ){}
}
