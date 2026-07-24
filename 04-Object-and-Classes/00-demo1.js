class Student {
    constructor(firstName, lastName, gpa) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gpa = gpa;
    }

    printInfo() {
        console.log(`${this.firstName} ${this.lastName} has a ${this.gpa} GPA`)
    }
}

let student1 = new Student(`pen4o`, `min4ov`, 6.0);
let student2 = new Student(`ginka`, `ivanova`, 5.8);

student1.printInfo();
student2.printInfo();
