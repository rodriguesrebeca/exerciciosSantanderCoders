class Person {

    constructor(name, lastname, age, gender, interests){

        this.name = name;    
        this.lastname = lastname;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }
    

    bio() { 
        return `${this.name} ${this.lastname} is ${this.age} years old. They like ${interests}.`
    }

    greeting(){
        return `Hi! I'm ${this.name} ${this.lastname}.`;
    }
}

class Teacher extends Person {

    constructor(name, lastname, age, gender, interests, subject){
        super(name, lastname, age, gender, interests);
        this.subject = subject;
    }

    greeting(){
        return `Hello. My name is ${this.name} ${this.lastname}, and I teach ${this.subject}.`;
    }
}

class Student extends Person { 
    
    greeting(){
        return `Yo! I'm ${this.name}.`;
    }
}