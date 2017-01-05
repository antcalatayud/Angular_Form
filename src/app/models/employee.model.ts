export class Employee {
    constructor(
       public firstName : string,
       public lastName : string,
       public isFullTime : boolean,
       public taxRange: string,
       public primaryLanguage : string,
       public startDate: Date
    ){}
}