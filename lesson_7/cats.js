function solve(myArr) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let el of myArr) {
        let [name, age] = el.split(' ');
        let cat = new Cat(name, age);
        cat.meow();
    }
}

solve(
    ['Mellow 2', 'Tom 5']
)