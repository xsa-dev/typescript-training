class Customer {
    // properties
    private _firstName: string;
    private _lastName: string;

    // constructors
    constructor(theFirst: string, theLast: string) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }

    // getter / setter methods

    get firstName(): string {
        return this._firstName;
    }

    get lastName(): string {
        return this._lastName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

}

let myCustomer = new Customer("Martin", "Dixon");

myCustomer.firstName = "Martin";
myCustomer.lastName = "Dixon";


console.log(`${myCustomer.firstName} ${myCustomer.lastName}`);