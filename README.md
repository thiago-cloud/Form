# Formulário com Validações em JavaScript Puro

Status: Desenvolvedor ⚠️

Bem-vindo ao repositório do Formulário com Validações! Este projeto demonstra a criação de um formulário de registro em HTML com validações realizadas em JavaScript puro. As validações são implementadas utilizando expressões regulares (regex) para garantir que os dados inseridos estejam no formato correto.

## Tecnologias Utilizadas

- **HTML**
- **CSS**
- **JavaScript**

## Funcionalidades

O formulário inclui os seguintes campos, cada campo possui validações especificas além de utilizarem regex exceto o campo senha:

- **Nome Completo:** Não deve conter caracteres de números ou caracteres especiais.
- **Email:** Deve estar no formato de um email válido (ex: exemplo@dominio.com) e não pode estar em branco.
- **Senha:** Deve ter pelo menos 7 caracteres.
- **Confirmar Senha:** Deve corresponder à senha digitada.
- **Telefone:** Deve estar no formato de número de telefone válido (ex: (99) 99999-9999) e o campo não pode ficar em branco.
- **Data de Nascimento:** Deve estar no formato de data válido (ex: 01/01/2000) e o campo não pode ficar em branco.


## Estrutura do Repositório
O repositório está organizado da seguinte maneira:

- **/css:** Contém o arquivo style.css para estilização do formulário.
- **/images:** Contém as imagens do projeto.
- **/js:** Cóntem a parte logica do projeto como as validações.
- **index.html:** Contém o esqueleto do formulário.
- **README.md:** Este arquivo.

## Como Executar

1. Abra seu editor de código VS Code pode ser outro editor mais a explicação aqui serve para VS Code
2. Em seguida abra o arquivo index.html, pressione o botão direito do mouse e selecione o live serve(obs. E necessário a instalação da extensão live serve).
