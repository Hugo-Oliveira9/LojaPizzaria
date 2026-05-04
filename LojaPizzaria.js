//Bridge
class MontadorPizza {
  constructor(borda, sabores) {
    this.borda = borda;
    this.sabores = sabores;
  }

  montar() {
    return `Borda: ${this.borda} | Sabores: ${this.sabores.join(", ")}`;
  }
}

// Abstracao
class Pizza {
  constructor(tamanho, montador) {
    this.tamanho = tamanho;
    this.montador = montador;
  }

  criarPizza() {
    return `Pizza ${this.tamanho} -> ${this.montador.montar()}`;
  }
}

// Tipos de tamanho
class PizzaBrotinho extends Pizza {
  constructor(montador) {
    super("Brotinho", montador);
  }
}

class PizzaTradicional extends Pizza {
  constructor(montador) {
    super("Tradicional", montador);
  }
}

class PizzaGrande extends Pizza {
  constructor(montador) {
    super("Grande", montador);
  }
}



// Uso do sistema

const montador1 = new MontadorPizza("Catupiry", [
  "Calabresa",
  "Frango",
  "Mussarela"
]);

const pizza1 = new PizzaGrande(montador1);
console.log(pizza1.criarPizza());

const montador2 = new MontadorPizza("Sem borda", [
  "Chocolate",
  "Morango",
  "Leite condensado"
]);

const pizza2 = new PizzaBrotinho(montador2);
console.log(pizza2.criarPizza());

const montador3 = new MontadorPizza("Cheddar", [
    "Portuguesa",
    "4 Queijos",
    "Peperone"
]);

const pizza3 = new PizzaTradicional(montador3);
console.log(pizza3.criarPizza());