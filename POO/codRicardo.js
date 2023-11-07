class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
}

class Celta extends Carro {
    constructor(marca, modelo, ano) {
        super(marca, modelo, ano);
    }

    veiculo() {
        console.log("O meu Celta é rebaixado.");
    }
}

class Moto {
    constructor(marca, modelo, ano, cilindradas){ 
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cilindradas = cilindradas;
    }
}

class Mt03 extends Moto {
    constructor(marca, modelo, ano, cilindradas) {
        super(marca, modelo, ano, cilindradas);
    }

    veiculo() {
        console.log("A minha MT03 é a mais rápida de todas.");
    }
}

class Caminhao {
    constructor(marca, modelo, ano, tamanhoBau) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.tamanhoBau = tamanhoBau;
    }
}

class Delivery extends Caminhao {
    constructor(marca, modelo, ano, tamanhoBau) {
        super(marca, modelo, ano, tamanhoBau);
    }

    veiculo() {
        console.log("O meu Delivery é o maior caminhão.");
    }
}

function meuCarro(carro) {
    console.log(`O ${carro.marca} ${carro.modelo} é top`);
}

function minhaMoto(moto) {
    console.log(`A ${moto.marca} ${moto.modelo} é top`);
}

function meuCaminhao(caminhao) {
    console.log(`O ${caminhao.marca} ${caminhao.modelo} é top`);
}

const celta = new Celta("Chevrolet", "Celta", "2011");
const mt03 = new Mt03("Yamaha", "Mt03", "2022", 300); // Passando a cilindrada como número
const delivery = new Delivery("Volkswagen", "Delivery", "2020", "4 metros");

meuCarro(celta);
minhaMoto(mt03);
meuCaminhao(delivery);
