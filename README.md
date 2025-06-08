# Cartão Validator

Este projeto é uma aplicação Node.js que valida bandeiras de cartões de crédito. Ele identifica a bandeira do cartão e verifica se o número do cartão é válido utilizando o algoritmo de Luhn.

## Estrutura do Projeto

```
cartao-validator
├── src
│   ├── index.js          # Ponto de entrada da aplicação
│   ├── validators
│   │   └── cardBrands.js # Validação das bandeiras de cartão
│   └── utils
│       └── luhn.js      # Implementação do algoritmo de Luhn
├── package.json          # Configuração do npm
└── README.md             # Documentação do projeto
```

## Bandeiras Suportadas

As bandeiras de cartões suportadas são:

- Mastercard
- Visa
- American Express
- Diners Club
- Discover
- enRoute
- JCB
- Voyager
- Hipercard
- Aura

## Instruções de Uso

1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   cd cartao-validator
   ```

2. Instale as dependências:
   ```
   npm install
   ```

3. Execute a aplicação:
   ```
   node src/index.js
   ```

## Exemplos

Para validar um número de cartão, você pode usar a função `validateCardBrand` que está disponível no arquivo `cardBrands.js`. Certifique-se de que o número do cartão esteja no formato correto e siga as regras de validação para cada bandeira.

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções. Crie um fork do repositório, faça suas alterações e envie um pull request.