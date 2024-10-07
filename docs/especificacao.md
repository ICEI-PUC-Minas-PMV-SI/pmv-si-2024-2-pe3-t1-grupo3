# 3. DOCUMENTO DE ESPECIFICAÇÃO DE REQUISITOS DE SOFTWARE

A seguir consta-se o detalhamento dos requisitos do sistema. 


## 3.1 Objetivos deste documento
Descrever e especificar as necessidades dos Usuários que devem ser atendidas pelo Sistema de Gestão de Compras da FIBERS.

## 3.2 Escopo do produto

### 3.2.1 Nome do produto e seus componentes principais

O produto será um Sistema de Gestão de Compras o qual o nome será “FIBERS”.  Ele terá quatro componentes (módulos) com os devidos elementos necessários à gestão de produtos, usuários, lista de compras e avaliação de peças dos usuários.


### 3.2.2 Missão do produto
A missão da FIBERS é fornecer uma plataforma para a compra de produtos sustentáveis, com a menor pegada de carbono possível, com a opção de que os usuários possam trocar peças por desconto ou até mesmo por uma nova peça.


### 3.2.3 Limites do produto
O Sistema de Gestão de Compras da FIBERS ainda é dependente de sistemas externos de logística e pagamentos, além disso, a Fibers não faz curadoria dos comentários de usuários dos produtos.

### 3.2.4 Benefícios do produto

| # | Benefício | Valor para o Cliente |
|--------------------|------------------------------------|----------------------------------------|
|1	| Facilidade na compra de produtos sustentáveis |	Essencial |
|2 | Facilidade na consulta de produtos | Essencial | 
|3 | Facilidade no processo da compra | Essencial | 
|4	| Segurança no cadastro de usuários	| Essencial | 
|5	| Facilidade na troca por produtos sustentáveis	| Essencial | 
|6	| Facilidade no cadastro de dados	| Essencial | 

## 3.3 Descrição geral do produto

### 3.3.1 Requisitos Funcionais

| Código | Requisito Funcional (Funcionalidade) | Descrição |
|--------------------|------------------------------------|----------------------------------------|
| RF1 | Gerenciar pedidos | Processamento de Alteração, Exclusão e Consulta dos pedidos (criados pelo usuário). | 
| RF2 |	Gerenciar produtos	| Processamento de Inclusão, Alteração, Exclusão e Consulta dos produtos (criados pela empresa). |
| RF3	| Gerenciar sistema de Trocas |Processamento de Inclusão, Alteração, Exclusão e Consulta das solicitações de trocas (criadas pelo usuário). |
| RF4 | Gerenciar produtos favoritos |	Processamento de Inclusão, Exclusão e Consulta de produtos na lista de favoritos. |
| RF5 |	Gerenciar cadastro do usuário	| Processamento de inclusão, alteração, exclusão e consulta dos dados de cadastro do usuário. |
| RF6 | Gerenciar compras |	Processamento de inclusão, alteração, exclusão e consulta de compra. |
| RF7 |	Gerenciar conteúdo	| Processamento de inclusão, alteração, exclusão e consulta dos conteúdos. |
| RF8 | Administrar créditos |	Permitir ao usuário consultar e utilizar seus créditos de trocas. |
| RF9 |	Acompanhar pedido	| Permitir ao usuário acompanhar o status e realizar o rastreamento do pedido. |
| RF10 | Avaliar Produto |	Processamento de inclusão de avaliação do produto gerado pelo usuário. |
| RF11 |	Buscar Produto	| Pesquisar produtos no site. |
| RF12| Emitir relatórios |	Permitir administrador gerar relatórios de desempenho. |
| RF13|	Informar usuários	| Permitir administrador disparar avisos, anúncios e boletins aos usuários. |
| RF14 | Entrar no Sistema |	Processamento de login de usuário cadastrado. |
| RF15 |	Sair do Sistema	| Processamento de saída de usuário do sistema. |
| RF16 | Validar Senha |	Processamento de validação de senha no login. |


### 3.3.2 Requisitos Não Funcionais

| Código | Requisito Não Funcional (Restrição) | Descrição |
|--------------------|------------------------------------|-----------------------|
| RNF1 | Ambiente | O ambiente operacional a ser utilizado é o Windows. |
| RNF2 | Ambiente | O sistema deverá funcionar nos navegadores Safari, Google Chrome, Microsoft Edge, Firefox e Opera. |
| RNF3 |	Ambiente | O sistema deverá ter responsividade em aparelhos móveis. |
| RNF4 | Navegação | O sistema deverá ser de fácil navegação. |
| RNF5 | Segurança | O produto deve restringir o acesso por meio de senhas individuais para o usuário. |


### 3.3.3 Usuários 

| Ator | Descrição |
|--------------------|------------------------------------|
| Administrador|	Usuário gerente do sistema responsável pelo gerenciamento de produtos, pelo envio e avaliação das trocas. Possui acesso geral ao sistema. |
| Usuário Comum |	Usuário responsável por gerenciamento de compras, consultar, avaliá-las, cadastrar dados do seu próprio perfil, realizar compras e enviar produtos para avaliação. |

Características dos usuários

| Ator | Frequência de uso | Nível de instrução  | Proficiência na aplicação | Proficiência em informática | 
|--------------------|------------------------------------|----------------------|-------------------|-------------|
| Administrador |	Diária em qualquer horário | Indefinido | Sim | Sistema |
| Usuário Comum |	Indefinida | Indefinido | Sim | Sistema |

## 3.4 Modelagem do Sistema

### 3.4.1 Diagrama de Casos de Uso

Como ilustrado na figura 1 “Diagrama de Casos de Uso”, o usuário comum poderá realizar as seguintes ações: entrar e sair do sistema, avaliar e buscar produtos, acompanhar pedidos, administrar créditos e gerenciar suas compras, o sistema de trocas, seus produtos favoritos, seus pedidos e poderá gerenciar o cadastro do usuário. Já o administrador poderá emitir relatórios, informar usuários, gerenciar produtos e conteúdos.

#### Figura 1: Diagrama de Casos de Uso do Sistema.

![dcu](https://github.com/user-attachments/assets/41f6b731-b44e-43aa-911f-423ad6198f47)
 
### 3.4.2 Descrições de Casos de Uso

Cada caso de uso deve ter a sua descrição representada nesta seção. Exemplo:

#### Gerenciar Professor (CSU01)

Sumário: O usuário comum realiza a gestão dos seus pedidos feitos na loja.

Ator Primário: Usuário comum.

Ator Secundário: Não Possui.

Pré-condições: O usuário deve estar cadastrado no sistema.

Fluxo Principal: 
1) O usuário comum requisita a gestão dos seus pedidos.
2) O Sistema apresenta as operações disponíveis para serem realizadas: alteração de endereço em um pedido que ainda não esteja em processo de envio, exclusão de um pedido já finalizado e a consulta dos pedidos realizados.
3) O usuário comum seleciona a operação desejada: Alteração, Exclusão ou Consulta, ou opta por finalizar o caso de uso.
4) Se o usuário comum desejar continuar com a gestão de seus pedidos, o caso de uso retorna ao passo 2; caso contrário o caso de uso termina.

Fluxo Alternativo (3): Alteração
a) O usuário comum seleciona um pedido que ainda não esteja em processo de envio e edita o endereço de entrega.
b) O Sistema altera os dados do endereço no pedido.

Fluxo Alternativo (3): Exclusão
a) O usuário comum seleciona um pedido finalizado e requisita ao Sistema que o remova.
b) O Sistema realiza a remoção.

Fluxo Alternativo (3): Consulta
a) O usuário comum opta por consultar seus pedidos realizados.
b) O Sistema apresenta uma lista contendo os pedidos realizados pelo usuário comum.
c) O usuário comum seleciona um pedido.
d) O Sistema apresenta os dados do pedido.

Pós-condições: Um pedido foi removido, ou teve seus campos modificados ou mostrados na tela.

#### Gerenciar Professor (CSU02)

Sumário: O Administrador realiza a gestão dos produtos da loja.

Ator Primário: Administrador.

Ator Secundário: Não Possui.

Pré-condições: O usuário deve estar cadastrado no sistema como Administrador.

Fluxo Principal: 
1) O Administrador requisita a gestão dos produtos da loja.
2) O Sistema apresenta as operações disponíveis para serem realizadas: inclusão de um novo produto, alteração de um produto, exclusão de um produto e a consulta de um produto por palavra que esteja na lista de produtos.
3) O Administrador seleciona a operação desejada: Inclusão, Alteração, Exclusão ou Consulta, ou opta por finalizar o caso de uso.
4) Se o Administrador desejar continuar com a gestão dos produtos, o caso de uso retorna ao passo 2; caso contrário o caso de uso termina.

Fluxo Alternativo (3): Inclusão
a) O Administrador requisita a inclusão de um novo produto.
b) O sistema apresenta uma janela solicitando um nome, preço, estoque, tamanhos disponíveis, descrição e foto do produto.
c) Após os campos serem preenchidos e o Administrador finalizar a inclusão do novo produto, a lista contendo os produtos é atualizado.

Fluxo Alternativo (3): Alteração
a) O Administrador seleciona um produto e edita o nome, preço, estoque, tamanhos disponíveis, descrição e foto do produto.
b) O Sistema altera os dados do produto selecionado.

Fluxo Alternativo (3): Exclusão
a) O Administrador seleciona um produto e requisita ao Sistema que o remova.
b) O Sistema realiza a remoção.

Fluxo Alternativo (3): Consulta
a) O Administrador opta por consultar os produtos ao digitar uma palavra que conste na lista de produtos.
b) O Sistema apresenta uma lista de produtos.
c) O Administrador seleciona um produto.
d) O Sistema apresenta os dados do produto.

Pós-condições: Um produto foi inserido, removido, ou teve seus campos modificados ou mostrados na tela.

#### Gerenciar Professor (CSU03)

Sumário: O usuário comum realiza a gestão dos seus pedidos de troca de peças por créditos.

Ator Primário: Usuário comum.

Ator Secundário: Não Possui.

Pré-condições: O usuário deve estar cadastrado no sistema.

Fluxo Principal: 
1) O usuário comum requisita a gestão dos seus pedidos de troca.
2) O Sistema apresenta as operações disponíveis para serem realizadas: inclusão de um novo pedido de troca, alteração de um pedido de troca ainda não analisado, exclusão de um pedido de troca ainda não analisado ou já finalizado e a consulta dos pedidos de trocas em análise.
3) O usuário comum seleciona a operação desejada: Inclusão, Alteração, Exclusão ou Consulta, ou opta por finalizar o caso de uso.
4) Se o usuário comum desejar continuar com a gestão de seus pedidos de troca, o caso de uso retorna ao passo 2; caso contrário o caso de uso termina.

Fluxo Alternativo (3): Inclusão
a) O usuário comum requisita a inclusão de um novo pedido de troca.
b) O sistema apresenta uma janela solicitando um título para o pedido, a descrição de condição e foto da peça a ser trocada.
c) Após os campos serem preenchidos e o usuário comum finalizar a inclusão do novo pedido, a lista contendo os pedidos de trocas é atualizado.

Fluxo Alternativo (3): Alteração
a) O usuário comum seleciona um pedido de troca ainda não analisado e edita o título do pedido, a descrição de condição e altera as fotos da peça.
b) O Sistema altera os dados no pedido de troca selecionado.

Fluxo Alternativo (3): Exclusão
a) O usuário comum seleciona um pedido de troca não analisado ou finalizado e requisita ao Sistema que o remova.
b) O Sistema realiza a remoção.

Fluxo Alternativo (3): Consulta
a) O usuário comum opta por consultar seus pedidos de troca.
b) O Sistema apresenta uma lista contendo os pedidos de trocas realizados pelo usuário comum.
c) O usuário comum seleciona um pedido de troca.
d) O Sistema apresenta os dados do pedido de troca.

Pós-condições: Um pedido de troca foi inserido, removido, ou teve seus campos modificados ou mostrados na tela.

#### Gerenciar Professor (CSU04)
#### Gerenciar Professor (CSU05)
#### Gerenciar Professor (CSU06)
#### Gerenciar Professor (CSU07)
#### Gerenciar Professor (CSU08)
#### Gerenciar Professor (CSU09)
#### Gerenciar Professor (CSU010)
#### Gerenciar Professor (CSU011)
#### Gerenciar Professor (CSU012)
#### Gerenciar Professor (CSU013)
#### Gerenciar Professor (CSU014)
#### Gerenciar Professor (CSU015)


### 3.4.3 Diagrama de Classes 

A Figura 2 mostra o diagrama de classes do sistema. A Matrícula deve conter a identificação do funcionário responsável pelo registro, bem com os dados do aluno e turmas. Para uma disciplina podemos ter diversas turmas, mas apenas um professor responsável por ela.

#### Figura 2: Diagrama de Classes do Sistema.
 
![dcu](https://github.com/user-attachments/assets/97ab1aa8-eb03-4b58-9ad5-1697d414a451)

### 3.4.4 Descrições das Classes 

| # | Nome | Descrição |
|--------------------|------------------------------------|----------------------------------------|
| 1	|	Aluno |	Cadastro de informações relativas aos alunos. |
| 2	| Curso |	Cadastro geral de cursos de aperfeiçoamento. |
| 3 |	Matrícula |	Cadastro de Matrículas de alunos nos cursos. |
| 4 |	Turma |	Cadastro de turmas.
| 5	|	Professor |	Cadastro geral de professores que ministram as disciplinas. |
| ... |	... |	... |
