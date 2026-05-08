// =========================
// ADAPTER
// =========================

// Serviço externo com formato diferente
class ServicoExternoSabores {
  buscarSabores() {
    return [
      { sabor: "Calabresa" },
      { sabor: "Frango" },
      { sabor: "Mussarela" },
      { sabor: "Portuguesa" },
      { sabor: "4 Queijos" },
      { sabor: "Peperone" }
    ];
  }
}

// Adapter -> transforma objetos em string
class AdaptadorSabores {
  constructor(servico) {
    this.servico = servico;
  }

  getSabores() {
    return this.servico
      .buscarSabores()
      .map(item => item.sabor);
  }
}


// =========================
// BRIDGE
// =========================

// Implementação
class MontadorPizza {
  constructor() {
    this.pizza = {
      tamanho: "",
      borda: "",
      sabores: []
    };
  }

  setBorda(borda) {
    const bordasValidas = [
      "Catupiry",
      "Cheddar",
      "Sem borda",
      "Tradicional"
    ];

    if (!bordasValidas.includes(borda)) {
      throw new Error("Borda inválida");
    }

    this.pizza.borda = borda;
  }

  addSabor(sabor) {
    if (this.pizza.sabores.length >= 3) {
      throw new Error("Máximo de 3 sabores");
    }

    this.pizza.sabores.push(sabor);
  }

  getPizza() {
    return this.pizza;
  }
}


// =========================
// ABSTRAÇÃO
// =========================

class Pizza {
  constructor(montador) {
    this.montador = montador;
  }
}


// =========================
// TIPOS DE PIZZA
// =========================

class PizzaBrotinho extends Pizza {
  criarPizza(borda, sabores) {
    this.montador.setBorda(borda);

    // Brotinho = 1 sabor
    sabores.slice(0, 1)
      .forEach(s => this.montador.addSabor(s));

    const pizza = this.montador.getPizza();
    pizza.tamanho = "Brotinho";

    return pizza;
  }
}

class PizzaTradicional extends Pizza {
  criarPizza(borda, sabores) {
    this.montador.setBorda(borda);

    // Tradicional = 2 sabores
    sabores.slice(0, 2)
      .forEach(s => this.montador.addSabor(s));

    const pizza = this.montador.getPizza();
    pizza.tamanho = "Tradicional";

    return pizza;
  }
}

class PizzaGrande extends Pizza {
  criarPizza(borda, sabores) {
    this.montador.setBorda(borda);

    // Grande = 3 sabores
    sabores.slice(0, 3)
      .forEach(s => this.montador.addSabor(s));

    const pizza = this.montador.getPizza();
    pizza.tamanho = "Grande";

    return pizza;
  }
}


// =========================
// EXECUÇÃO
// =========================

// Adapter
const servico = new ServicoExternoSabores();
const adapter = new AdaptadorSabores(servico);

const sabores = adapter.getSabores();


// Bridge
const pizza1 = new PizzaGrande(
  new MontadorPizza()
).criarPizza("Catupiry", sabores);

const pizza2 = new PizzaBrotinho(
  new MontadorPizza()
).criarPizza("Sem borda", sabores);

const pizza3 = new PizzaTradicional(
  new MontadorPizza()
).criarPizza("Cheddar", sabores);


// =========================
// EXIBIÇÃO
// =========================

function mostrarPizza(pizza) {
  console.log(
    `Pizza ${pizza.tamanho} | ` +
    `Borda: ${pizza.borda} | ` +
    `Sabores: ${pizza.sabores.join(", ")}`
  );
}

mostrarPizza(pizza1);
mostrarPizza(pizza2);
mostrarPizza(pizza3);
