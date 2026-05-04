Hugo Oliveira
DSM 3 Semestre
Orientador Vinicius Heltai

🍕 Sistema de Montagem de Pizza (Padrão Bridge)

Este projeto demonstra o uso do padrão de projeto Bridge em JavaScript, separando a estrutura da pizza da forma como ela é montada.

📌 Ideia principal

O sistema permite combinar:

Tamanho da pizza (Brotinho, Tradicional, Grande)
Montagem da pizza (borda + sabores)

💡 Exemplos de saída
Pizza Grande -> Borda: Catupiry | Sabores: Calabresa, Frango, Mussarela
Pizza Brotinho -> Borda: Sem borda | Sabores: Chocolate, Morango, Leite condensado
Pizza Tradicional -> Borda: Cheddar | Sabores: Portuguesa, 4 Queijos, Peperone

📚 Conceito aplicado
Bridge (Ponte): separa a abstração da implementação, permitindo que ambas evoluam independentemente.

🔹 Tipos de Pizza
PizzaBrotinho
PizzaTradicional
PizzaGrande

Cada uma define apenas o tamanho.

🔹 Pizza (Abstração)

Define o tamanho da pizza e usa um montador.

🧱 Estrutura do código
🔹 MontadorPizza (Implementação)

Responsável por definir:

Tipo de borda
Sabores da pizza
