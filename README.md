Hugo Oliveira
DSM 3º Semestre
Orientador: Vinicius Heltai
🍕 Sistema de Montagem de Pizza
Aplicação dos padrões Bridge e Adapter em JavaScript
Este projeto demonstra a utilização dos padrões de projeto Bridge e Adapter em JavaScript, organizando a estrutura de montagem de pizzas de forma desacoplada e flexível.

📌 Ideia principal
O sistema permite combinar:


Tamanho da pizza


Brotinho


Tradicional


Grande




com:


Estrutura de montagem


borda


sabores




Além disso, os sabores podem vir de um serviço externo em formato diferente, sendo convertidos através do padrão Adapter.

📚 Padrões de Projeto Aplicados
🔹 Bridge (Ponte)
O padrão Bridge separa a abstração da implementação, permitindo que ambas evoluam independentemente.
Neste projeto:
Abstração
As classes de pizza:


Pizza


PizzaBrotinho


PizzaTradicional


PizzaGrande


são responsáveis apenas pela definição do tamanho da pizza.
Implementação
A classe:


MontadorPizza


é responsável pela montagem da pizza:


definição da borda


adição dos sabores


criação da estrutura final


Com isso, o tamanho da pizza fica desacoplado da forma como ela é montada.

🔹 Adapter
O padrão Adapter é utilizado para adaptar dados vindos de um sistema externo para o formato esperado pela aplicação.
Serviço Externo
A classe:


ServicoExternoSabores


retorna os sabores no formato:
[  { sabor: "Calabresa" },  { sabor: "Frango" }]
Adapter
A classe:


AdaptadorSabores


converte os objetos em uma lista simples de strings:
[  "Calabresa",  "Frango"]
Isso permite que o restante do sistema utilize os sabores sem precisar conhecer o formato original do serviço externo.

🧱 Estrutura do Código
🔹 Serviço Externo
Responsável por fornecer sabores em formato diferente.
ServicoExternoSabores

🔹 Adaptador
Responsável por converter os dados externos para o formato utilizado pelo sistema.
AdaptadorSabores

🔹 MontadorPizza
Responsável pela implementação da montagem da pizza.
Funções:


definir borda


adicionar sabores


validar quantidade máxima de sabores



🔹 Pizza (Abstração)
Classe base das pizzas.

🔹 Tipos de Pizza
PizzaBrotinho


permite 1 sabor


PizzaTradicional


permite 2 sabores


PizzaGrande


permite 3 sabores



💡 Exemplos de saída
Pizza Grande | Borda: Catupiry | Sabores: Calabresa, Frango, MussarelaPizza Brotinho | Borda: Sem borda | Sabores: CalabresaPizza Tradicional | Borda: Cheddar | Sabores: Calabresa, Frango

🎯 Objetivo do Projeto
Demonstrar na prática:


separação de responsabilidades


desacoplamento entre classes


reutilização de código


aplicação dos padrões:


Bridge


Adapter





🚀 Tecnologias utilizadas


JavaScript (Node.js)

