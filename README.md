# Projeto Conta Bancária - TypeScript

<br />

<div align="center">
   <img src="https://images2.imgbox.com/45/93/OoCc5EX5_o.png" title="imgbox: ts-card" width="100%"/>
</div>

<br /><br />

## 1. Descrição

O Projeto **Conta Bancária** é um sistema construído para simular operações financeiras em um ambiente de contas bancárias. Ele faz parte da minha jornada de aprendizado em TypeScript e **Programação Orientada a Objetos (POO)**, combinando prática e teoria em um projeto funcional e desafiador.

O sistema permite gerenciar contas bancárias de forma simples e eficiente. Entre as funcionalidades estão:

- Criação de novas contas;
- Consultas de informações;
- Edição e exclusão de contas;
- Transações financeiras, como depósitos, saques e transferências.

Este projeto, desenvolvido em TypeScript, tem como objetivo principal aprofundar os conceitos fundamentais de POO, como:

- Classes e Objetos;
- Atributos e Métodos;
- Modificadores de Acesso;
- Herança e Polimorfismo;
- Classes Abstratas;
- Interfaces.

Além de servir como um simulador funcional, o projeto oferece uma base prática para compreender princípios fundamentais da POO aplicados em um cenário realista.

<br />


## 2. Tecnologias utilizadas

- Node.js v16+ ou superior
- TypeScript v5+ ou superior

<br />


## 3. Instalação
1. Clone este repositório:
   ```bash
   git clone https://github.com/Madsik92/conta_bancaria.git
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd conta_bancaria
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

<br />

## 4. Como Executar

1. Execute o projeto:
   ```bash
   ts-node Menu.ts
   ```
   

<br />

## 5. Funcionalidades

### 1. Criação de Conta
Permite criar uma nova conta bancária especificando nome do titular, número da agência, número da conta e saldo inicial, além das propriedades específicas de cada tipo de conta.

### 2. Listagem de Contas
Lista todas as contas cadastradas no sistema.

### 3. Consulta de Conta

- Por número: Encontra uma conta pelo número.
- Por nome: Encontra uma ou mais contas associadas a um titular.

### 4. Edição de Conta
Permite atualizar os dados de uma conta existente a partir do número da conta.

### 5. Exclusão de Conta
Remove uma conta especifica a partir do número da conta.

### 6. Saque
Realiza a retirada de um valor de uma conta, desde que o saldo seja suficiente.

### 7. Depósito
Adiciona um valor ao saldo de uma conta existente.

### 8. Transferência
Transfere um valor de uma conta para outra, respeitando os saldos e limites.

<br />

## 6. Tela Inicial do Sistema



<div align="left">
   <img src="https://i.imgur.com/G2xRT19.png" title="Imgur: bash" width="50%"/>
</div>


