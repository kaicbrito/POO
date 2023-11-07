// classe pai (Principal)
class Animal {
    constructor(name, type){
        this.name = name;
        this.type = type;
    }

    makeSound(){
        return "Faz algum som ";
    }
}


// classes filhas
class Cat extends Animal {
    constructor(name){
        super(name, "Gato")
    }

    makeSound(){
        return "Miau"
    }
}

class Dog extends Animal {
    constructor(name){
        super(name, "Cachorro")
    }

    makeSound(){
        return "AuAUAUuauauAUUA"
    }
}
class Python extends Animal {
    constructor(name){
        super(name, "Cobra")
    }

    makeSound(){
        return "Shhhhhh"
    }
}

function displayAnimal(animal){
    const output = document.getElementById("output");
    const div = document.createElement("div")
    div.className = "animal"
    div.classList.add(animal.type.toLowerCase())
    div.textContent = `${animal.type}: ${animal.name}, Som: ${animal.makeSound()}`
    output.appendChild(div);
}

document.getElementById("addCatButton").addEventListener
("click", () => {
    const cat = new Cat("Mia");
    displayAnimal(cat);
})

document.getElementById("addDogButton").addEventListener
("click", () => {
    const dog = new Dog("Rex");
    displayAnimal(dog);
})

document.getElementById("addPythonButton").addEventListener
("click", () => {
    const python = new Python("Celeste");
    displayAnimal(python);
});