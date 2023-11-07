class Animal {
    constructor(nome) {
      this.nome = nome;
    }
  
    fazerSom() {
      console.log(`O animal faz um som genérico`);
    }
  }
  
  class Cachorro extends Animal {
      constructor(nome){
          super(nome)
      }
      fazerSom() {
          console.log("O cachorro late.");
      }
  }
  
  class Gato extends Animal {
    fazerSom() {
      console.log("O gato mia.");
    }
  }
  
  // Função para interagir com o animal
  
  function interagirComAnimal(animal) {
    console.log(`Meu animal ${animal.nome} faz o seguinte som: `);
    animal.fazerSom();
  }
  
  // Criar objetos dos diferentes animais
  
  const rex = new Cachorro("Rex");
  const whiskers = new Gato("Whiskers");
  
  // Interagindo com os animais e chamar o método fazerSom
  
  interagirComAnimal(rex); // Meu animal Rex faz o seguinte som: O cachorro late
  interagirComAnimal(whiskers); // Meu animal Whiskers faz o seguinte som: O gato mia
  