class Customer2 {
    // properties
    private _firstName: string;
    private _lastName: string;

    // constructors
    constructor(theFirst: string, theLast: string) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }

    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(value: string) {
        this._firstName = value;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(value: string) {
        this._lastName = value;
    }
}

let myCustomer2 = new Customer2("Martin", "Dixon");
console.log(`${myCustomer2.firstName} ${myCustomer2.lastName}`);