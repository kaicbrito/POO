
class Veiculo {
    constructor(marca, modelo, ano) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
    }
  
    dirigir() {
      return `${this.marca} ${this.modelo} ${this.ano} está em movimento.`;
    }
  }
  
  // Criando objetos de diferentes veículos
  const carro = new Veiculo("Toyota", "Corolla", 2023);
  const moto = new Veiculo("Honda", "Titan 160", 2024);
  
  // Utilizando o método dirigir
  console.log(carro.dirigir());
  console.log(moto.dirigir());


//   <==========================>

class ContaBancaria {
  constructor(nome, saldoInicial) {
    this.nome = nome;
    this.saldoInicial = saldoInicial;
  }
  depositos(valor) {
    this.saldo += valor;
    console.log(`Depósito de ${valor} realizado na conta de ${this.nome}. Seu novo saldo é: ${this.saldo}`);
  }
  sacar(valor){
    if (valor <= this.saldo) {
      this.saldo -= valor;
      console.log(`Saque de ${valor} da conta de ${this.nome}. Saldo atual: ${this.saldo}`);
    } else {
      console.log(`Olá ${this.nome} o seu saldo é insifuciente.`);
    }
  }
  verificarSaldoNaConta(){
    console.log(`Olá ${this.nome}, o seu saldo atual é de: ${this.saldo}`);
  }
}

// Cria objetos representando contas de diferentes clientes
const conta1 = new ContaBancaria("Pessoa 1", 5000);
const conta2 = new ContaBancaria("Pessoa 2", 9000);

//Ações nas contas bancárias

conta1.verificarSaldoNaConta();
conta1.depositos(700);
conta1.sacar(500);

conta2.verificarSaldoNaConta();
conta2.depositos(900);
conta2.sacar(1000);


// <===========>

// class Contato {
//   constructor(nome, sobrenome, telefone) {
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//     this.telefone = telefone;
//   }
// }

// class Agenda {
//   constructor() {
//     this.contatos = [];
//   }

//   adicionarContato(contato) {
//     this.contatos.push(contato);
//   }

//   editarContato(index, novoContato) {
//     if (index >= 0 && index < this.contatos.length) {
//       this.contatos[index] = novoContato;
//     }
//   }

//   excluirContato(index) {
//     if (index >= 0 && index < this.contatos.length) {
//       this.contatos.splice(index, 1);
//     }
//   }

//   listarContatos() {
//     for (const contato of this.contatos) {
//       console.log(`Nome: ${contato.nome} ${contato.sobrenome}, Telefone: ${contato.telefone}`);
//     }
//   }
// }

// // Criando uma instância da classe Agenda
// const minhaAgenda = new Agenda();

// // Adicionando contatos
// const contato1 = new Contato("João", "Silva", "123-456-7890");
// const contato2 = new Contato("Maria", "Santos", "987-654-3210");

// minhaAgenda.adicionarContato(contato1);
// minhaAgenda.adicionarContato(contato2);

// // Listando os contatos
// minhaAgenda.listarContatos();

// // Editando um contato
// const novoContato2 = new Contato("Maria", "Pereira", "999-888-7777");
// minhaAgenda.editarContato(1, novoContato2);

// // Excluindo um contato
// minhaAgenda.excluirContato(0);

// // Listando os contatos novamente após as edições
// minhaAgenda.listarContatos();
