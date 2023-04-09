const dog = {};
dog.name = "Nu";
dog.legs = 4;
dog.age = 3;
dog.bark = "woof woof";
console.log(dog);
dog.breed=false;
dog.getDogInfo=function(){
    return `${this.name} is ${this.age} years old\nHe has ${this.legs} and bark ${this.bark}`;
}
console.log(dog.getDogInfo());