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

![Diagrama Casos de Uso](/img/FibersCasosDeUsoRevisado.png)
fonte: Elaboração Própria.

### 3.4.2 Descrições de Casos de Uso

Cada caso de uso deve ter a sua descrição representada nesta seção. Exemplo:

#### Gerenciar Pedidos (CSU01)

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

#### Gerenciar Produtosr (CSU02)

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

#### Gerenciar Sistema de trocas (CSU03)

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

#### Gerenciar Produtos Favoritos (CSU04)

Sumário: O usuário comum realiza a gestão (inclusão, exclusão e consulta) dos seus produtos favoritos.

Ator Primário: Usuário comum.

Ator Secundário: Não possui.

Pré-condições: O usuário deve estar cadastrado no sistema.

Fluxo Principal:

1) O Usuário acessa a seção de Produtos Favoritos em sua conta.
2) O Sistema apresenta as operações que podem ser realizadas: inclusão de um novo produto, alteração de um produto, a exclusão de um produto e a consulta de produtos na lista de favoritos.
3) O Usuário seleciona a operação desejada: Inclusão, Exclusão, Alteração ou Consulta, ou opta por finalizar o caso de uso.
4) Se o Usuário desejar continuar com a gestão de produtos na lista de favoritos, o caso de uso retorna ao passo 2; caso contrário o caso de uso termina.

Fluxo Alternativo (3): Inclusão

a) O usuário comum marca um produto como favorito. 
b) A grade listando os produtos cadastrados é atualizada incluindo o novo produto.

Fluxo Alternativo (3): Exclusão

a) O usuário comum seleciona um produto e o desmarca como favorito. 
b) O Sistema realiza a remoção do produto da lista de produtos  favoritos.

Fluxo Alternativo (3): Consulta

a) O usuário comum opta por pesquisar pela palavra contida no título do produto favorito e solicita a consulta sobre a lista de produtos favoritos dele. 
b) O Sistema apresenta uma lista de produtos. 
c) O usuário comum seleciona o produto. 
d) O Sistema apresenta os dados do produto.

Pós-condições: Um produto foi inserido como favorito ou removido, seus dados foram apresentados na tela.

#### Gerenciar Cadastro do Usuário (CSU05)

Sumário: O usuário comum ou o administrador realiza a gestão (inclusão, alteração, exclusão e consulta) dos usuários comuns.

Ator Primário: Usuário comum ou Administrador. 

Ator Secundário: Não possui.

Pré-condições: O administrador deve estar autenticado no sistema.

Fluxo Principal:

1) O Administrador requisita a gestão de usuários. 
2) O Sistema apresenta as operações que podem ser realizadas: inclusão de um usuário comum, alteração de um usuário comum, a exclusão de um usuário comum e a consulta de um usuário comum.
3) O Adminstrador seleciona a operação desejada: Inclusão, Exclusão, Alteração ou Consulta, ou opta por finalizar o caso de uso.
4) Se o Adminstrador desejar continuar com a gestão de usuários , o caso de uso retorna ao passo 2; caso contrário o caso de uso termina.

Fluxo Alternativo (3): Inclusão

a) O Administrador requisita a inclusão de um usuário comum. 
b) O Sistema apresenta uma janela solicitando o e-mail do usuário a ser cadastrado. 
c) O Administrador fornece o dado solicitado. 
d) O Sistema verifica se o usuário já está cadastrado. Se sim, o Sistema reporta o fato e volta ao início; caso contrário, apresenta um formulário em branco para que os detalhes do usuário comum (login, senha, email, nome, sobrenome e data de nascimento) sejam incluídos. 
e) O Administrador fornece os detalhes do novo usuário comum. 
f) O Sistema verifica a validade dos dados. Se os dados forem válidos, inclui o novo usuário comum e a grade listando os usuários comuns cadastrados é atualizada; caso contrário, o Sistema reporta o fato, solicita novos dados e repete a verificação.

Fluxo Alternativo (3): Exclusão

a) O Administrador seleciona um usuário comum e requisita ao Sistema que o exclua.
b) Se o usuário pode ser removido, o Sistema realiza a remoção; caso contrário, o Sistema reporta o fato.

Fluxo Alternativo (3): Alteração

a) O Administrador altera um detalhe, ou mais, do usuário comum e requisita sua atualização.
b) O Sistema verifica a validade dos dados e, se eles forem válidos, altera os dados na lista de usuários comuns, caso contrário, o erro é reportado.

Fluxo Alternativo (3): Consulta

a) O Administrador opta por pesquisar pelo nome ou código e solicita a consulta sobre a lista de usuários comuns.
b) O Sistema apresenta uma lista de usuários comuns. 
c) O Administrador seleciona um usuário comum.
d) O Sistema apresenta os detalhes do usuário comum no formulário de usuários comuns.

Pós-condições: Um usuário comum foi inserido ou excluído, seus dados foram alterados ou apresentados na tela.

#### Gerenciar Compras (CSU06)

Sumário: O usuário comum realiza a gestão (inclusão, alteração, exclusão e consulta) de suas compras. 

Ator Primário: Usuário Comum. 

Ator Secundário: Não possui. 

Pré-condições: Usuário deve estar cadastrado no sistema. 

Fluxo Principal: 

1) O usuário comum requisita a gestão de sua lista de compras. 
2) O Sistema apresenta as operações que podem ser realizadas: inclusão de uma lista de compras, alteração de lista de compras, a exclusão de da lista de compras e a busca de item por palavra que conste nos itens da lista de compras. 
3) O usuário comum seleciona a operação desejada: Inclusão, Exclusão, Alteração ou Consulta, ou opta por finalizar o caso de uso. 
4) Se o usuário comum desejar continuar com a gestão de sua lista de compras, o caso de uso retorna ao passo 2; caso contrário o caso de uso termina. 

Fluxo Alternativo (3): Inclusão 

a) O usuário comum requisita a inclusão de um item. 
b) O Sistema apresenta uma janela solicitando o nome do item a ser cadastrado e sua quantidade em unidades de medida. 
c) Após todos os campos serem preenchidos e o usuário comum inclui o item na lista de compras, a grade listando os itens cadastrados é atualizada. 

Fluxo Alternativo (3): Exclusão 

a) O usuário comum seleciona um item e requisita ao Sistema que o remova. 
b) O Sistema realiza a remoção. 

Fluxo Alternativo (3): Alteração

a) O usuário comum seleciona um item para edição e altera um dado, ou mais, do item e requisita sua atualização. 
b) O Sistema altera os dados no cadastro da lista de compras.

Fluxo Alternativo (3): Consulta 

a) O usuário comum opta por pesquisar pela palavra contida no item da lista de compras e solicita a consulta.
b) O Sistema apresenta uma lista de itens. 
c) O usuário comum seleciona o item. 
d) O Sistema apresenta os dados do item.

Pós-condições: Um item foi inserido ou removido da lista de compras, seus dados foram alterados ou apresentados na tela.

#### Gerenciar Conteúdo (CSU07)

Sumário: Processamento de inclusão, alteração, exclusão e consulta dos conteúdos.

Ator Primário: Administrador.

Ator Secundário: Não Possui.

Pré-condições: O usuário deve estar cadastrado no sistema como Administrador.

Fluxo Principal: 
1) O Administrador requisita a gestão de conteúdo do site.
2) O Sistema apresenta as operações disponíveis para serem realizadas: inclusão de um novo conteúdo, alteração de um conteúdo, exclusão de um conteúdo e a consulta de um conteúdo por palavra chave.
3) O Administrador seleciona a operação desejada: Inclusão, Alteração, Exclusão ou Consulta, ou opta por finalizar o caso de uso.
4) Se o Administrador desejar continuar com a gestão dos conteúdos, o caso de uso retorna ao passo 2; caso contrário o caso de uso termina.

Fluxo Alternativo (3): Inclusão
a) O Administrador requisita a inclusão de um novo conteúdo.
b) O sistema apresenta uma janela solicitando um título, descrição, texto e imagens.
c) Após os campos serem preenchidos e o Administrador finalizar a inclusão do novo conteúdo, a lista contendo os conteúdos é atualizada.

Fluxo Alternativo (3): Alteração
a) O Administrador seleciona um conteúdo e edita o título, descrição, texto e imagens.
b) O Sistema altera os dados do conteúdo selecionado.

Fluxo Alternativo (3): Exclusão
a) O Administrador seleciona um conteúdo e requisita ao Sistema que o remova.
b) O Sistema realiza a remoção.

Fluxo Alternativo (3): Consulta
a) O Administrador opta por consultar os conteúdos ao digitar uma palavra chave que conste na lista de conteúdos.
b) O Sistema apresenta uma lista de conteúdos.
c) O Administrador seleciona um conteúdo.
d) O Sistema apresenta os dados do conteúdo.

Pós-condições: Um conteúdo foi inserido, removido, ou teve seus campos modificados ou mostrados na tela.

#### Administrar Créditos (CSU08)
#### Acompanhar Pedido (CSU09)
#### Avaliar Produto (CSU010)

Sumário: O usuário comum realiza a avaliação de um produto.

Ator Primário: Usuário Comum.

Ator Secundário: Não possui.

Pré-condições: O usuário comum deve ter feito uma compra do produto.

Fluxo Principal:
1) O usuário requisita a realização de uma avaliação de um produto.
2) O sistema apresenta uma tela solicitando a nota e comentário da avaliação.
3) Após os campos serem preenchidos e o usuário comum finalizar a inclusão da avaliação, o Sistema inclui a avaliação na lista de avaliações do produto.

Pós-condições: Uma avaliação de produto foi incluída nas avaliações do produto selecionado.

#### Buscar Produto (CSU011)

Sumário: O usuário comum realiza a consulta de um produto cadastrado no sistema.

Ator Primário: Usuário Comum.

Ator Secundário: Não possui.

Pré-condições: Não Possui.

Fluxo Principal:
1) O usuário comum requisita a consulta de um produto cadastrado no sistema.
2) O Sistema apresenta a lista de produtos de acordo com as palavras presentes nos nomes, descrições e categorias dos produtos cadastrados.
3) O usuário comum seleciona um produto, ou opta por finalizar o caso de uso.
4) Se o usuário comum desejar continuar a pesquisar outros produtos, o caso de uso retorna ao passo 2; caso contrário, o caso de uso termina.

Pós-condições: Um produto foi consultado, seus dados foram apresentados na tela.

#### Emitir relatórios (CSU012)

Sumário: O administrador gera relatório de vendas de acordo com os filtros desejados.

Ator Primário: Administrador.

Ator Secundário: Não possui.

Pré-condições: O usuário está cadastrado no sistema como administrador.

Fluxo Principal:
1) O administrador solicita a geração de um relatório de venda.
2) O Sistema apresenta uma tela para que sejam selecionados os filtros desejados
3) O administrador seleciona os filtros que desejar
4) O sistema emite na tela o relatório de venda

Pós-condições: Um relatório de vendas foi gerado e mostrado na tela.

#### Informar usuários (CSU013)

Sumário: Permitir administrador disparar avisos, anúncios e boletins aos usuários.

Ator Primário: Administrador.

Ator Secundário: Não possui.

Pré-condições: Administrador autenticado no sistema.

Fluxo Principal:

1) O administrador acessa a função de envio de mensagens aos usuários.
2) O sistema apresenta as operações que podem ser realizadas: envio de aviso, anúncio ou boletim aos usuários.
3) O administrador seleciona a operação desejada: ‘’Enviar Aviso’’, ‘’Enviar Anúncio’’ ou ‘’Enviar Boletim’’.
4) O administrador preenche os detalhes e confirma o envio.
5) O administrador opta por realizar outra operação ou finalizar o caso de uso.

Fluxo Alternativo (3): Enviar Aviso.

a) O administrador seleciona "Enviar Aviso".
b) O sistema apresenta um formulário para preenchimento do título e conteúdo do aviso, além da seleção dos destinatários.
c) O administrador preenche o formulário e confirma o envio.

Fluxo Alternativo (3): Enviar Anúncio.

a) O administrador seleciona "Enviar Anúncio".
b) O sistema apresenta um formulário para preenchimento do título, conteúdo do anúncio, data e hora de publicação, e seleção dos destinatários.
c) O administrador preenche o formulário e confirma o envio.

Fluxo Alternativo (3): Enviar Boletim.

a) O administrador seleciona "Enviar Boletim".
b) O sistema apresenta um formulário para preenchimento do título, conteúdo do boletim, data de envio, e seleção dos destinatários.
c) O administrador preenche o formulário e confirma o envio.

Pós-condições: Uma mensagem foi enviada aos usuários, seja como aviso, anúncio ou boletim.

#### Entrar no Sistema (CSU014)

Sumário: Processamento de login de usuário cadastrado.

Ator Primário: Usuário.

Ator Secundário: Não possui.

Pré-condições: Usuário deve estar cadastrado no sistema.

Fluxo Principal:

1) O usuário acessa a página de login.
2) O sistema solicita o nome de usuário e a senha.
3) O usuário insere o nome de usuário e a senha.
4) O sistema verifica as credenciais fornecidas.
5) Se as credenciais forem válidas, o sistema autentica o usuário e exibe a página inicial do sistema e as funcionalidades do sistema.

Fluxo Alternativo (4): Nome de Usuário ou Senha Incorretos. 

a) O sistema informa que o nome de usuário ou a senha estão incorretos.
b) O usuário verifica as informações inseridas e tenta novamente.
c) Se o erro persistir, o usuário pode optar por seguir o fluxo alternativo "Esqueci Minha Senha".

Fluxos Alternativos (c): Esqueci Minha Senha
a) O usuário clica no link "Esqueci Minha Senha". 
b) O sistema solicita o e-mail cadastrado. 
c) O usuário insere o e-mail cadastrado. 
d) O sistema envia um e-mail com instruções para redefinição de senha.
e) O usuário segue as instruções do e-mail para redefinir a senha.

Pós-condições: O usuário foi autenticado e tem acesso às funcionalidades do sistema, ou foi redirecionado para redefinir sua senha.

#### Sair do Sistema (CSU015)

Sumário: Processamento de saída de usuário do sistema.

Ator Primário: Usuário. 

Ator Secundário: Não possui. 

Pré-condições: Usuário deve estar autenticado /logado no sistema. 

Fluxo Principal: 
1) O usuário acessa a opção de logout/sair no sistema.
2) O sistema solicita confirmação da saída.
3) O usuário confirma a saída. 
4) O sistema encerra a sessão do usuário.
5) O sistema redireciona o usuário para a página inicial ou de login.

Fluxo Alternativo (2): Cancelar Logout.

a) O usuário acessa a opção de logout no sistema.
b) O sistema solicita confirmação da saída.
c) O usuário decide cancelar o logout.
d) O sistema mantém a sessão do usuário ativa e usuário continua utilizando o sistema normalmente.

Pós-condições: Este fluxo trata da situação em que o usuário decide cancelar o logout após o sistema solicitar a confirmação.


### 3.4.3 Diagrama de Classes 

A Figura 2 contém o Diagrama de Classes. Nesta modelagem, é possível perceber as seguintes regras: Cada Usuário deve possuir um único login para acessar o sistema. A classe Usuário permite que o usuário gerencie seus favoritos, seu carrinho,seus pedidos e possa avaliar os produtos. Já a classe Pedido, está associada a um único usuário e pode conter um ou mais itens. A classe Item da Lista representa os itens de um pedido, contendo a quantidade e o produto correspondente.
Um Produto pode pertencer a uma ou mais Categorias, que ajudam a classificá-lo. A classe Avaliação é realizada por um único usuário e está associada a um único produto. Os Favoritos podem conter diversos produtos. O Carrinho de Compras está diretamente relacionado ao usuário e pode conter vários produtos.



#### Figura 2: Diagrama de Classes do Sistema.
 
![Diagrama de Classes](/img/FibersDisagramaDeClassesRevisado.png)
fonte: Elaboração Própria.

### 3.4.4 Descrições das Classes 

| # | Nome | Descrição |
|--------------------|------------------------------------|----------------------------------------|
| 1	|	Usuário |	Gerenciar informações relativas aos Usuários, Como por exemplo: login, senha, email, nome, sobrenome, isto é, informações de acesso e identificação.|
| 2	| Pedidos |	Gerenciar informações relativas aos Pedidos feitos pelos Usuários, a partir dos ItensLista contidos no Carrinho.  |
| 3 | ItemLista|	Serve como uma classe intermediária que relaciona o Carrinho com Produtos e suas quantidades. |
| 4 |	Carrinho |	Gerenciar as quantidades de Produtos que compõem o mesmo. |
| 5	|	Favoritos |	Registrar os Produtos preferidos dos usuários. |
| 6	|	Produto |	Gerenciar informações relativas aos Produtos. Como por exemplo: título, descrição, preço e fotos. |
| 7	|	Avaliação |	Gerenciar dados relativos às Avaliações, que integram os Produtos. Como por exemplo: comentários, notas dos usuários e fotos. |
| 8	|	Categoria|	Classificar os produtos de acordo com o tipo de Categoria: cor, tamanho e preço. |

