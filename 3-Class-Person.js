class Person{
    constructor(name, age, email, mobile){
        this.name = name;
        this.age = age;
        this.email = email;
        this.mobile = mobile;
    }
    displayDetails(){
        console.log(`Name: ${this.name}`);
        console.log(`Age:  ${this.age}`);
        console.log(`Email: ${this.email}`);
        console.log(`Mobile No: ${this.mobile}`);
    }
}
// Creating an instance of the Person class
let person1 = new Person('Senthil', 30, 'senthilkumarsuccess@gmail.com', 9843688966)
person1.displayDetails();