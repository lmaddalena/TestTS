export class Student {
    FullName: string;
    FirstName: string;
    LastName: string;

    constructor(firstName: string, lastName: string) {
        this.FirstName = firstName;
        this.LastName = lastName;
    }

    GetFullName() {
        return this.FirstName + " " + this.LastName;
    }
}

